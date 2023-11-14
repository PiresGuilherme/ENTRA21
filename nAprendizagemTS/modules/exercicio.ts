import axios from 'axios';
import inquirer from 'inquirer';

const brasilApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api/'
})

 function buscar(cep:number):any {
    // var cep = document.getElementById('cep');
    brasilApi.get(`/cep/v2/${cep}`).then((data) => {
        console.log(data.data);
    })
}

// console.log(buscar(89120000));


// function cidadesDdd(ddd:number) {
//     brasilApi.get(`/ddd/v1/${ddd}`).then(data => console.log(data.data))
// }
// cidadesDdd(11)



inquirer.prompt([{
    type: 'input',
    name: 'cep',
    message: 'Digite seu CEP:'}
]).then((answer) => {
    console.log(answer);
    buscar(answer.cep)}).catch((error) => console.log(error));
