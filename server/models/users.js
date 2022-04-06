const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

function get(id){
    return { ...list.find(user => user.id === parseInt(id)), password: undefined };
}

async function create(user) {
    user.id = ++highestId;

    user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);

    list.push(user);
    return {...user, password: undefined};
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index,1);
    
    return { ...user[0], password: undefined};
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, +process.env.SALT_ROUNDS);
    }
    newUser = list[index] = { ...oldUser, ...newUser };

    return { ...newUser, password: undefined};
}

async function login(email, password){
    const user = list.find(user => user.email === email);
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

module.exports = {
    get,
    create,
    remove,
    update,
    login,
    fromToken,
    get list(){
        return list.map(x=> ({...x, password: undefined }) );
    }
}
