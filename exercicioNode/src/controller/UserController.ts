import { Request } from "express";
import { Resident } from "../model/Resident";
import { AppDataSource } from "../data-source";
import { UserDTO } from "../dto/UserDTO";

export class UserController {
    constructor() {

    }

    async getUsers() {
    const residentRepostory = AppDataSource.getRepository(Resident);
    let residentsList = await residentRepostory.find()
    return residentsList.map((user:Resident)=>  UserDTO.fromModel(user));
    }
    async createUser(userDTO: UserDTO){
        const residentRepostory = AppDataSource.getRepository(Resident);
        let newResident = userDTO.toModel();
        const savedUser =  await residentRepostory.save(newResident);
        return UserDTO.fromModel(savedUser);
    }
}