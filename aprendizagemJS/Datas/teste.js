// const agora = new Date().toLocaleString('pt-BR');
// console.log(agora)

// const dataHoraBrasilia = agora.toLocaleString('pt-BR');

// console.log('Data e hora em Brasília:', dataHoraBrasilia);


// let dataAtual = new Date();
// console.log(dataAtual);

// let ano = dataAtual.getFullYear()
// let mes = dataAtual.getMonth()
// let dia = dataAtual.getDate()
// let horas = dataAtual.getHours()
// let minutes = dataAtual.getMinutes()
// let segundos = dataAtual.getSeconds()

// let dataEspecifica = new Date('2023-01-15')
// console.log(dataTimesTamp = new Date(1631856000000));


// let date = new Date();
// date.setDate(date.getDate() + 2);

// let data1 = new Date('2023-01-15');
// let data2 = new Date('2023-01-10');

// let timestemp1 = data1.getTime();
// let timestemp2 = data2.getTime()

// let diferencaEmMilissegundo = timestemp1 - timestemp2;

// let diferencaEmDias = diferencaEmMilissegundo / 1000 * 60 * 60 * 24;

// console.log(`A diferenca entre as datas ${diferencaEmDias} dias`);


// let date = new Date();
// date.setDate(date.getDate() + 5);
// function formatarData(data) {
//     let dia= date.getUTCDate();
//     let mes= date.getUTCMonth() +1;
//     let ano= date.getUTCFullYear();
// return` ${dia} / ${mes} / ${ano}`
// }
// let dateFormatada = formatarData(date);
// console.log(dateFormatada);


function exibir(date) {
    return (`${date.getUTCDate()} / ${date.getUTCMonth() + 1} / ${date.getUTCFullYear()} `)
}
//1 
var data = new Date();
// console.log(exibir(data));

//2
let nasc = new Date('2003-04-02');
// console.log(exibir(nasc));

//3
var atual = new Date();
var dias = 10
atual.setDate(atual.getDate() + dias);
// console.log(exibir(atual));
var outra = new Date ('2005-02-16')

//4
function diferenca(data, outra) {
    var resultado = (data - outra);
    let paragraph = document.createElement('p');
    paragraph.textContent = (`diferenca em dias ${Math.floor(resultado / (1000*60*60*24))}`);
    document.body.appendChild(paragraph)
    return(`diferenca em dias ${Math.floor(resultado / (1000*60*60*24))}`);
} 
console.log(diferenca(atual, nasc));

//5
// var day = prompt('digite o dia');
// var month = prompt('digite o mes');
// var year = prompt('digite o ano');
// var userBorn = new Date(year,month,day);
// document.writeln(exibir(userBorn));


//6
function recente(data1,data2) {
    if(data1 >data2){
        console.log(data1);
    } else{
        console.log(data2);
    }
}

// recente(outra,nasc)