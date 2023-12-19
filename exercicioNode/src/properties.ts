import { Residents } from "./residents"

export class Properties {
    numberApt : number;
    residents : Residents[];
    block: string;
    bill: string;

    constructor (numberApt: number, residents: Residents, block:string){
        this.numberApt = numberApt,
        this.residents = [],
        this.block = block
        this.bill = ""
    }

    generateBill(numberApt : number,block: string) {
        this.bill
    }
}