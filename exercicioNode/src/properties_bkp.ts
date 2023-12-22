// import { Residents } from "./residents"
// import { Bill } from "./bill"

// export class Properties {
//     numberApt: number;
//     residents: Residents[];
//     block: string;
//     bill: Bill[];

    // constructor(numberApt: number, residents: Residents, block: string) {
    //     this.numberApt = numberApt,
    //         this.residents = [residents],
    //         this.block = block,
    //         this.bill = []
    // }

//     generateBill(value: number, dueMonth: number) {
//         this.bill.push({ value, dueMonth, numberApt: this.numberApt, block: this.block, paid:false })
//     }

//     payBill(dueMonth: number) {
//         let validar = this.bill.find(month => month.dueMonth == dueMonth && month.paid == false);
//         if (!validar) {
//             return console.error("Couldn't find bill");
//         }
//         this.bill.forEach(bill => {
//             if(bill.dueMonth == dueMonth){
//                 bill.paid = true;
//             }
//         })
//     }
    
//     addResident(name:string, birthDate:string){
//         let resident : Residents ={ 
//             name,
//             birthDate
//         }
//         this.residents.push(resident)
//     }
// }
