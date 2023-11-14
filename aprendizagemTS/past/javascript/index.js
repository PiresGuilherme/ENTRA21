"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcao_1 = require("./funcao");
// console.log('Olá mundo!');
let number = 42;
let nome = "Pires";
let booleano = true;
let array = [11, 12, 13, 14];
let arrayS = ['pedro', 'pauo'];
console.log(array);
let objeto = {
    nome: 'bla',
    idade: 13
};
let tuple = [0, 'aaaaa'];
var tipoPessoa;
(function (tipoPessoa) {
    tipoPessoa[tipoPessoa["FISICA"] = 0] = "FISICA";
    tipoPessoa[tipoPessoa["JURIDICA"] = 1] = "JURIDICA";
})(tipoPessoa || (tipoPessoa = {}));
;
let pessoa;
let qqCoisa = 50;
qqCoisa = 'bla';
function somar(a, b) {
    let soma = a + b;
    return soma;
}
somar(1, 2);
let person = { nome: 'pires', idade: 1 };
(0, funcao_1.imprimir)();
function primeiroElemento(array) {
    return array[0];
}
;
let ns = [1, 2, 3, 4, 5];
console.log(primeiroElemento(ns));
let frutas = ['maca', 'banana', 'pera'];
console.log(primeiroElemento(frutas));
