/*
B"H
*/

export interface User {
    handle: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
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