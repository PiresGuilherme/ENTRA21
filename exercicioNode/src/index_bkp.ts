import "reflect-metadata"


import express, { json, Response, Request } from 'express';
import { AptComplex } from './aptComplex';
import { Properties } from './properties';
import { Residents } from './residents';

const server = express();

const aptComplex: AptComplex[] = [];
const properties: Properties[] = [];
const resident: Residents[] = [];
server.use(json())
// server.get("", (request:Request, response: Response) => {
//     return response.send('ok')
// })

server.post('/residents', (request: Request, response: Response) => {
    let newResident: Residents = {
        name: request.body.name,
        birthDate: request.body.birthDate
    };
    resident.push(newResident);
    return response.status(200).json(newResident);
});

server.get("/residents", (request: Request, response: Response) => {
    return response.json(resident);
});

server.post('/properties', (request: Request, response: Response) => {
    let residentName = resident.find((residentObj: Residents) => residentObj.name == request.body.residentName)
    // console.log(residentName);

    if (!residentName) {
        return response.status(400).json({
            error: "Resident not found"
        });
    }
    let newProperties: Properties = new Properties(
        request.body.numberApt,
        residentName,
        request.body.block
    );
    properties.push(newProperties);
    return response.status(200).json(newProperties);
});

server.get("/properties", (request: Request, response: Response) => {
    return response.json(properties);
});


server.post("/aptComplex", (request: Request, response: Response) => {
    let foundProperties = properties.find((propertiesObj: Properties) => propertiesObj.numberApt == request.body.properties.numberApt && propertiesObj.block == request.body.properties.block)
    if (!foundProperties) {
        return response.status(404).json({
            error: "Propertie not found"
        })
    }

    let newAptComplex: AptComplex = {
        name: request.body.name,
        address: request.body.address,
        building: request.body.building,
        properties
    }
    aptComplex.push(newAptComplex);
    return response.status(200).json(newAptComplex);
})

server.get("/aptComplex", (request: Request, response: Response) => {
    return response.json(aptComplex);
}
)
server.post("/properties/bill", (request: Request, response: Response) => {
    let foundProperties = properties.find((propertiesObj: Properties) => 
        propertiesObj.numberApt == request.body.numberApt && propertiesObj.block == request.body.block
    );

    if (!foundProperties) {
        return response.status(404).json({
            error: "Propertie not found"
        })
    }
    let newBill = foundProperties.generateBill(request.body.value, request.body.dueMonth);
    return response.status(200).json(newBill);
})

// server.get("/properties/bill", (request: Request, response: Response) => {
//     })
server.post("/properties/paid", (request: Request, response: Response) => {
    let foundProperties = properties.find((propertiesObj: Properties) => 
        propertiesObj.numberApt == request.body.numberApt && propertiesObj.block == request.body.block
    );

    if (!foundProperties) {
        return response.status(404).json({
            error: "Propertie not found"
        })
    }
    let newBill = foundProperties.payBill(request.body.dueMonth);
    return response.status(200).json(newBill);
})
// server.post('/properties/bill', (request:Request, response: Response) => {
//     return response.json(aptComplex);}
// })



server.post("/properties/resident", (request: Request, response: Response) => {
    let foundResident = resident.find((residentObj: Residents) => residentObj.name == request.body.residentName);
    let foundProperties = properties.find((propertiesObj: Properties) => propertiesObj.numberApt == request.body.numberApt && request.body.block == propertiesObj.block)
    if (!foundResident || !foundProperties) {
        return response.status(404).json({
            error: "Resident or Properties not found"
        })
    }
    foundProperties.addResident(foundResident.name, foundResident.birthDate);
    return response.status(200)
    
})


server.listen(2000, () => {
    console.log('esta escutando');
})
