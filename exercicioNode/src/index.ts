import { request } from "http";
import { AppDataSource } from "./data-source"
import { Resident } from "./entity/Resident"
import express, { json, Response, Request } from 'express';
import { Properties } from "./entity/Properties";
import { AptComplex } from "./entity/aptComplex";


const server = express();
server.use(json())


server.get("/residents", async (request: Request, response: Response) => {
    const residentRepostory = AppDataSource.getRepository(Resident);
    let newResident = await residentRepostory.find()
    return response.json(newResident);
});

server.post('/residents', (request: Request, response: Response) => {
    const residentRepostory = AppDataSource.getRepository(Resident);
    let newResident = new Resident;
    newResident.name = request.body.name;
    newResident.birthDate = request.body.birthDate

    residentRepostory.save(newResident);
    return response.status(200).json(newResident);
});

server.post('/properties', async (request:Request, response:Response)=>{
    const propertiesRepository = AppDataSource.getRepository(Properties);
    let newProperties = await new Properties;
    newProperties.numberApt = request.body.numberApt;
    newProperties.block = request.body.block;
    newProperties.resident = request.body.resident;
    newProperties.bill = []
    propertiesRepository.save(newProperties);
    return response.status(200).json();

})

server.get('/properties', async (request:Request, response:Response)=> {
    const propertiesRepository = AppDataSource.getRepository(Properties);
    let properties = await propertiesRepository.find();
    return response.status(200).json(properties)
})


server.post('/aptComplex', async (request:Request, response:Response) => {
    const aptComplexRepository = AppDataSource.getRepository(AptComplex);
    let newAptComplex = new AptComplex;
    newAptComplex.name = request.body.name;
    newAptComplex.address = request.body.address;
    newAptComplex.building = request.body.building;
    newAptComplex.properties = request.body.properties;
    await aptComplexRepository.save(newAptComplex);
    return response.status(200).json();
})

server.get('/aptComplex', async (request:Request, response: Response) => {
    const aptComplexRepository = AppDataSource.getRepository(AptComplex);
    let aptComplex = await aptComplexRepository.find();
    return response.status(200).json(aptComplex);
})

AppDataSource.initialize().then(async () => {
    server.listen(2000, ()=> {
        console.log('esta escutando');
  
    })
}).catch(error => console.log(error))
