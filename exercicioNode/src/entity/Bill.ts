import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Properties } from "./Properties";

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number;

    @Column()
    dueMonth: number;

    @Column()
    numberApt: number;

    @Column()
    block: string;

    @Column()
    paid: boolean

    @ManyToOne(()=> Properties, (properties) => properties.bill)
    properties : Properties[]
    
}