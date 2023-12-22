// import "reflect-metadata";


// // import { Post } from './post';
// // import { User } from './user';


// // let gabriel: User = {
// //     name:'gabriel',
// //     userName:'@gabrielmorez',
// //     birthDate: new Date(2002, 5, 5),
// //     bio: 'Fogo no sistema e foco no dinheiro',
// //     avatarUrl: '',
// //     email: 'gabrielmorez@hotmail.com',
// //     password:'senha-super-segura'
// // };

// // let laux : User = {
// //     name: 'Laux',
// //     userName:'@Laux',
// //     birthDate: new Date(1982,9,10),
// //     bio:'Não me rotule',
// //     avatarUrl:'',
// //     email: 'thiagolaux@gmail.com',
// //     password:'senha-123'
// // };

// // let larissa:User ={
// //     name: 'Larissinha Gratiluz',
// //     userName: '@larigratiluz',
// //     birthDate: new Date(2005, 1, 16),
// //     bio: '#Gratiluz',
// //     avatarUrl:'',
// //     email:'larigratiluz@gmail.com',
// //     password:'gratiluz',
// // };

// // let post1 = new Post('Bom dia flores do dia. #Gratiluze', '', larissa);


// // post1.likeThePost(laux);
// // post1.likeThePost(gabriel); 
// // console.log(post1);






// import express, { Request, Response, json } from 'express';
// import { User } from './user';
// import { Post } from './post';

// const users : User[] = [];
// const posts: Post[] = [];
// const server = express();
// server.use(json())

// server.get("", (request: Request, response: Response) => {
//     console.log("O servidor está funcionando");    
//     // console.log(request);
//     return response.send("Olá");
    
// });

// server.get("/users", (request:Request,  response:Response) => {
//     return response.json(users);
// })

// // server.post("/users", (request:Request, response:Response) => {
// //     let newUser: User = {
// //         name: request.body.name,
// //         userName: request.body.userName,
// //         birthDate: request.body.birthDate,
// //         bio: request.body.bio,
// //         avatarUrl: request.body.avatarUrl,
// //         email: request.body.email,
// //         password: request.body.password
// //     };
// //     users.push (newUser);
// //     return response.status(201).json(newUser);
// // })

// // server.post("", (request: Request, response: Response) => {
// //     console.log("meu servidor foi chamado");    
// //     // console.log(request);
// //     console.log(request.body);
// //     return response.status(201).send("criado");
    
// // })

// server.get("/posts", (request:Request,  response:Response) => {
//     return response.json(posts);
// })

// server.post("/posts", (request:Request, response:Response) => {
//     const user = users.find((userObj:User) => userObj.userName == request.body.userName)
//     if(!user) {
//         return response.status(400).json({
//             error: "User not found"
//         })
//     }
//     let newPost: Post = new Post(
//         request.body.caption,
//         request.body.pictureUrl,
//         user
// )
//         return response.status(201).json(newPost);
    
// })


// server.listen(3000, () => {
//     console.log("servidor escutando na porta 3000");
    
// });