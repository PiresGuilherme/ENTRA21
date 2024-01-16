import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./Properties";

@Entity()
export class AptComplex {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    building: number;

    @OneToMany(()=> Properties, (properties) => properties.aptComplex)
    properties : Properties[];
}