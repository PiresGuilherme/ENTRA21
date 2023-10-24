// function minhaFuncaoNomeada(nome) {
//     console.log('Nomeada', nome);
// };

// minhaFuncaoNomeada('Pires');

// const anonima = function () {
//     console.log('anonima');
// };
// anonima();

// const arrowFunction = () => {
//     console.log('arrow Function');
// }
// arrowFunction();


// const saudar = (responder) => {
//     const horaAtual = new Date().getHours();

//     // const responder = (saudacao) => console.log(saudacao);
//     if (horaAtual <= 12) {
//         return responder('bom dia');
//     }
//     else if (horaAtual < 18) {
//         return responder('boa tarde');
//     }
//     else if (horaAtual < 24) {
//         return responder('boa noite');
//     }
// }
// const responderCallback = saudacao => console.log(saudacao);
// saudar(responderCallback);



// //com função nomeada
// const saudar2 = function horaSaudacao(presponder) {
//     const horaAtual = new Date().getHours();

//     // const responder = (saudacao) => console.log(saudacao);
//     if (horaAtual <= 12) {
//         return presponder('bom dia');
//     }
//     else if (horaAtual < 18) {
//         return presponder('boa tarde');
//     }
//     else if (horaAtual < 24) {
//         return presponder('boa noite');
//     }
// }
// const imprimeSaudacao = function imprime(saudacao) { console.log(saudacao) };
// saudar2(imprime);
// saudar2(imprimeSaudacao);


// const funcaoPrincipal = (parametro) => {
//     const valor = 77;
//     parametro(valor);
// }

// const callbackson = (number) => console.log(number);

// funcaoPrincipal(callbackson);