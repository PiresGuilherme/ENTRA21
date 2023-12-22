import { AppDataSource } from "./data-source"
import express, { Request, Response, json } from 'express';
import { User } from "./entity/User";

const server = express();
server.use(json())


server.get("", (request: Request, response: Response) => {
    console.log("O servidor está funcionando");
    // console.log(request);
    return response.send("Olá");

});

server.get("/users", async (request: Request, response: Response) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find();
    
    return response.json(users);
    
})

server.post("/users", async (request: Request, response: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    let newUser = new User();
    newUser.name= request.body.name;
    newUser.userName=request.body.userName;
    newUser.birthDate= request.body.birthDate;
    newUser.bio= request.body.bio;
    newUser.avatarUrl= request.body.avatarUrl;
    newUser.email= request.body.email;
    newUser.password= request.body.password;

    await userRepository.save(newUser)
    return response.status(201).json(newUser);
})

AppDataSource.initialize().then(async () => {
    console.log("database initialized");

    server.listen(3000, () => {
        console.log("servidor escutando na porta 3000");

    });
}).catch(error => console.log(error))
