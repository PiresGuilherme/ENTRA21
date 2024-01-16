import { request } from "http";
import { AppDataSource } from "./data-source"
import { Resident } from "./model/Resident"
import express, { json, Response, Request } from 'express';
import { Properties } from "./model/Properties";
import { AptComplex } from "./model/aptComplex";
import { UserController } from "./controller/UserController";
import { UserDTO } from "./dto/UserDTO";


const server = express();
server.use(json())


server.get("/residents", async (request: Request, response: Response) => {
    // const residentRepostory = AppDataSource.getRepository(Resident);
    // let newResident = await residentRepostory.find()
    const userController = new UserController()

    return response.json(await userController.getUsers());
});

server.post('/residents', (request: Request, response: Response) => {
    const userController = new UserController();
    const newResident = userController.createUser(new UserDTO(null,request.body.name,request.body.birthDate))
    return response.status(200).json(newResident);
});



server.post('/properties', async (request: Request, response: Response) => {
    const propertiesRepository = AppDataSource.getRepository(Properties);
    let newProperties = await new Properties;
    newProperties.numberApt = request.body.numberApt;
    newProperties.block = request.body.block;
    // newProperties.resident = request.body.resident;
    newProperties.bill = []
    propertiesRepository.save(newProperties);
    return response.status(200).json();

})

server.get('/properties', async (request: Request, response: Response) => {
    const propertiesRepository = AppDataSource.getRepository(Properties);
    let properties = await propertiesRepository.find();
    return response.status(200).json(properties)
})


server.post('/aptComplex', async (request: Request, response: Response) => {
    const aptComplexRepository = AppDataSource.getRepository(AptComplex);
    let newAptComplex = new AptComplex;
    newAptComplex.name = request.body.name;
    newAptComplex.address = request.body.address;
    newAptComplex.building = request.body.building;
    newAptComplex.properties = request.body.properties;
    await aptComplexRepository.save(newAptComplex);
    return response.status(200).json();
})

server.get('/aptComplex', async (request: Request, response: Response) => {
    const aptComplexRepository = AppDataSource.getRepository(AptComplex);
    let aptComplex = await aptComplexRepository.find();
    return response.status(200).json(aptComplex);
})

AppDataSource.initialize().then(async () => {
    server.listen(2000, () => {
        console.log('esta escutando');

    })
}).catch(error => console.log(error))
