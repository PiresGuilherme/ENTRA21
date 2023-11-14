import { imprimir } from "./funcao";
import { imprimir as lala } from "./funcao";

// console.log('Olá mundo!');

let number: number =42;
let nome: string = "Pires"
let booleano: boolean = true;


let array: number[] = [11,12,13,14];
let arrayS: string[] = ['pedro','pauo'];
console.log(array);


let objeto: object = {
    nome:'bla',
    idade:13
};

let tuple: [number, string] = [0, 'aaaaa'];

enum tipoPessoa {
    FISICA,
    JURIDICA
};
let pessoa: tipoPessoa.JURIDICA;


let qqCoisa: any = 50;
qqCoisa = 'bla';


function somar(a:number, b:number): number {
    let soma = a+b;
    return soma;
}


somar(1,2);


interface pessoa {
    nome:string;
    idade:number
}
let person : pessoa={nome:'pires', idade:1};

imprimir();




function primeiroElemento<T>(array:T[]): T {
    return array[0];    
};

let ns: number[] = [1,2,3,4,5];
console.log(primeiroElemento(ns));

let frutas: string[] = ['maca', 'banana', 'pera'];
console.log(primeiroElemento(frutas));

