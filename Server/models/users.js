let highestId = 3;
const list = [
    {handle: 'exampleperson',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@yahoo.com',
    pic: 'https://randomuser.me/api/portraits/men/33.jpg',
    id: 1},
    {handle: 'exampleperson1',
    password: '12345',
    firstName: 'James',
    lastName: 'Dunn',
    email: 'example1@yahoo.com',
    pic: 'https://randomuser.me/api/portraits/men/34.jpg',
    id: 2},
    {handle: 'exampleperson2',
    password: 'abcdef',
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'example2@yahoo.com',
    pic: 'https://randomuser.me/api/portraits/men/35.jpg',
    id: 3},
];

//return the user of a given id
function get(id){
    return list.find(user => user.id === parseInt(id));
}
//make a new user
function create(user){
    user.id = ++highestId;
    list.push(user);
    return user;
}

//export the array 
module.exports.list = list;
//export the get method
module.exports.get = get;
//export the create method
module.exports.create = create;