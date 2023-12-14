"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post");
let gabriel = {
    name: 'gabriel',
    userName: '@gabrielmorez',
    birthDate: new Date(2002, 5, 5),
    bio: 'Fogo no sistema e foco no dinheiro',
    avatarUrl: '',
    email: 'gabrielmorez@hotmail.com',
    password: 'senha-super-segura'
};
let laux = {
    name: 'Laux',
    userName: '@Laux',
    birthDate: new Date(1982, 9, 10),
    bio: 'Não me rotule',
    avatarUrl: '',
    email: 'thiagolaux@gmail.com',
    password: 'senha-123'
};
let larissa = {
    name: 'Larissinha Gratiluz',
    userName: '@larigratiluz',
    birthDate: new Date(2005, 1, 16),
    bio: '#Gratiluz',
    avatarUrl: '',
    email: 'larigratiluz@gmail.com',
    password: 'gratiluz',
};
let post1 = new post_1.Post('Bom dia flores do dia. #Gratiluze', '', larissa);
post1.likeThePost(laux);
post1.likeThePost(gabriel);
console.log(post1);
