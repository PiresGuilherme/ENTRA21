"use strict";
// import { Post } from './post';
// import { User } from './user';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// let gabriel: User = {
//     name:'gabriel',
//     userName:'@gabrielmorez',
//     birthDate: new Date(2002, 5, 5),
//     bio: 'Fogo no sistema e foco no dinheiro',
//     avatarUrl: '',
//     email: 'gabrielmorez@hotmail.com',
//     password:'senha-super-segura'
// };
// let laux : User = {
//     name: 'Laux',
//     userName:'@Laux',
//     birthDate: new Date(1982,9,10),
//     bio:'Não me rotule',
//     avatarUrl:'',
//     email: 'thiagolaux@gmail.com',
//     password:'senha-123'
// };
// let larissa:User ={
//     name: 'Larissinha Gratiluz',
//     userName: '@larigratiluz',
//     birthDate: new Date(2005, 1, 16),
//     bio: '#Gratiluz',
//     avatarUrl:'',
//     email:'larigratiluz@gmail.com',
//     password:'gratiluz',
// };
// let post1 = new Post('Bom dia flores do dia. #Gratiluze', '', larissa);
// post1.likeThePost(laux);
// post1.likeThePost(gabriel); 
// console.log(post1);
const express_1 = __importStar(require("express"));
const server = (0, express_1.default)();
server.use((0, express_1.json)());
server.get("", (request, response) => {
    console.log("meu servidor foi chamado");
    // console.log(request);
    return response.send("Olá");
});
server.post("", (request, response) => {
    console.log("meu servidor foi chamado");
    // console.log(request);
    console.log(request.body);
    return response.status(201).send("criado");
});
server.listen(3000, () => {
    console.log("servidor escutando na porta 3000");
});
