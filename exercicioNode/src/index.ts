import express, {json, Response, Request} from 'express';
import { AptComplex } from './aptComplex';
import { Properties } from './properties';
import { Residents } from './residents';

const server = express();

const aptComplex : AptComplex[] = [];
const properties: Properties[] = [];
const resident: Residents[] = [];
server.use(json())
// server.get("", (request:Request, response: Response) => {
//     return response.send('ok')
// })

server.post('/residents', (request:Request, response: Response) => {
    let newResident: Residents = {
        name: request.body.name, 
        birthDate: request.body.birthDate
    };
   resident.push(newResident);
    return response.status(200).json(newResident);
});

server.get("/residents", (request:Request, response: Response) => {
    return response.json(resident);
});

server.post('/properties', (request:Request, response: Response) => {
    let residentName = resident.find((residentObj:Residents) =>         residentObj.name == request.body.residents)
    console.log(residentName);
    
    if (!residentName){
        return response.status(400).json({
            error: "Resident not found"
    });
    }
    let newProperties: Properties = {
        numberApt: request.body.numberApt,
        residents: resident,
        block: request.body.block
    };
    
    return response.status(200).json(newProperties);
});

server.get("/properties", (request:Request, response: Response) => {
    return response.json(properties);
});




// server.post('/aptComplex', (request:Request, response: Response) => {

// })

server.listen(2000, ()=>{
    console.log('esta escutando');    
})