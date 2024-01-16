import { Resident } from "../model/Resident";

export class UserDTO {
    constructor(
        public id: number,
        public name: string,
        public birthDate: string, 
    ) { }

    static fromModel(user: Resident): UserDTO {
        const userDTO = new UserDTO(user.id,user.name,null);
        // userDTO.id = user.id;
        // userDTO.name = user.name;
        // userDTO.birthDate = user.birthDate;
        return userDTO;
    }

    toModel(): Resident {
        const newUser = new Resident();
        newUser.id = this.id;
        newUser.name = this.name;
        newUser.birthDate = this.birthDate;
        return
    };
}