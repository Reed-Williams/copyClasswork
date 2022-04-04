require(bcrypt);

let highestId = 3;

const list = [
    {
        name: 'Sally',
        username: 'seashellSeller',
        password: 'starfish',
        email: 'sheSellsSeashells@gmail.com',
        id: 1,
    },
    {
        name: 'Steve',
        username: 'stevenWilliams67',
        password: 'mustang',
        email: 'swilliam39@newpaltz.edu',
        id: 2,
    },
    {
        name: 'Percy',
        username: 'percyJackson',
        password: 'blueberry',
        email: 'pjackso21@yahoo.com',
        id: 3,
    }
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

module.exports = {
    get,
    create,
    remove,
    update,
    get list(){
        return list.map(x=> ({...x, password: undefined }) );
    }
}
