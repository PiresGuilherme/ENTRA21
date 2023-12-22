
import { Column, DataSource, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resident } from "./Resident";
import { Bill } from "./Bill";
import { AppDataSource } from "../data-source";
import { request } from "http";
import { AptComplex } from "./aptComplex";

@Entity()
export class Properties {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numberApt: number;

    @OneToMany(()=>  Resident, (resident) => resident.properties)
    resident: Resident[]

    @Column()
    block: string;


    @OneToMany(() => Bill, (bill) => bill.properties)
    bill: Bill[]

    @ManyToOne(()=> AptComplex, (aptComplex) => aptComplex.properties)
    aptComplex : AptComplex[];

    generateBill(value: number, dueMonth: number) {
        const billRepository = AppDataSource.getRepository(Bill);
        let newBill = new Bill;
        newBill.value = value;
        newBill.dueMonth = dueMonth;
        newBill.numberApt = this.numberApt;
        newBill.block = this.block;
        newBill.paid = false;
    }

    // payBill(dueMonth: number) {
    //     let validar = this.bill.find(month => month.dueMonth == dueMonth && month.paid == false);
    //     if (!validar) {
    //         return console.error("Couldn't find bill");
    //     }
    //     this.bill.forEach(bill => {
    //         if(bill.dueMonth == dueMonth){
    //             bill.paid = true;
    //         }
    //     })
    // }
    
    // addResident(name:string, birthDate:string){
    //     let resident : Residents ={ 
    //         name,
    //         birthDate
    //     }
    //     this.residents.push(resident)
    // }
}
