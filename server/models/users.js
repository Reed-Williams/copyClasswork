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

function create(user) {
    user.id = ++highestId;
    list.push(user);
    return {...user, password: undefined};
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index,1);
    
    return { ...user[0], password: undefined};
}

function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    newUser = list[index] = { ...oldUser, ...newUser };

    console.log(list);
    
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
