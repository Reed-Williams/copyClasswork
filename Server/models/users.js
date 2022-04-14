const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');
const collection = db.db("gratitude").collection("users");

let highestId = 3;

const list = [
    {
        firstName: 'John',
        lastName: 'Doe',
        handle: 'johndoe',
        password: 'password',
        email: 'jhon@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1,
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        handle: 'russian_dictator',
        password: 'long table',
        email: 'jhon@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: 'vp',
        password: 'password',
        email: 'kamala@whitehouse.org',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3,
    },
];

async function get(id){
    const user = await collection.findOne({ _id: new ObjectId(id) });
    if(!user){
        throw { statusCode: 404, message: 'User not found'};
    }
    return { ...user, password: undefined };
}

async function getByHandle(handle){
    const user = await collection.findOne({ handle });
    if(!user){
        throw { statusCode: 404, message: 'User not found'};
    }
    return { ...user, password: undefined };
}

async function create(user) {
    user.id = ++highestId;

    if(!user.handle){
        throw { stat: 400, message: 'Handel is Required'}
    }

    user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);

    const result = await collection.insertOne(user);
    //result doesn't give us all the info we want to return, so we get it after inserting it
    user = await get(result.insertedId);
    return {...user, password: undefined};
}

async function remove(id){
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return { ...user.value , password: undefined};
}

async function update(id, newUser){

    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    
    newUser = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newUser },
        { returnDocument: 'after' }
    );
    console.log(newUser);
    
    return { ...newUser, password: undefined};
}

async function login(email, password){
    //replace list find with the collection find
    const user = await collection.findOne({ email });

    if(!user){
        throw{ statusCode: 404, message: 'User not found'};
    }
    if(!await bcrypt.compare(password, user.password)){
        throw { statusCode: 401, message: 'Invalid password' };
    }
    const data = {...user, password: undefined};
    const token = jwt.sign(data, process.env.JWT_SECRET)
    //return token as a new property in the user
    return {...user, token};
}

//return to the user from the token 
function fromToken(token){
    //resolve and reject are two functions 
    //below we have what is happening under the hood of async await
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
            if(err){
                reject(err);
            }
            else{
                resolve(decoded);
            }
        });
    });
}

//puts what is in our list into the database
function seed(){
    return collection.insertMany(list);
}

module.exports = {
    collection, 
    seed,
    getByHandle,
    get,
    create,
    remove,
    update,
    login,
    fromToken,
    //we say getList because java script can't have async getters 
    async getList(){
        //the await needs to be wrapped in ( ) bc map needs an array not a promise
        return (await collection.find().toArray()).map(x=> ({...x, password: undefined }) );
    }
}
