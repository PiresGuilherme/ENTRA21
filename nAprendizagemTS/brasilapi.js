import axios from 'axios';

const brasilApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api/',
    timeout:1000,
});

brasilApi.get('/cep/v2/89087491').then((data) => {
    console.log(data);
});