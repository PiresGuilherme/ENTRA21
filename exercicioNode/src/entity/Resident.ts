import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Properties } from "./Properties";

@Entity()
export class Resident {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    birthDate: string;

    @ManyToOne(()=> Properties, (properties) => properties.resident)
    properties : Properties[]
}
