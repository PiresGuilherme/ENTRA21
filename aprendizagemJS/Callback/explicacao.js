function minhaFuncaoNomeada(nome) {
    console.log('Nomeada', nome);
};

minhaFuncaoNomeada('Pires');

const anonima = function () {
    console.log('anonima');
};
anonima();

const arrowFunction = () => {
    console.log('arrow Function');
}
arrowFunction();


const saudar = (responder) => {
    const horaAtual = new Date().getHours();

    // const responder = (saudacao) => console.log(saudacao);
    if (horaAtual <= 12) {
        return responder('bom dia');
    }
    else if (horaAtual < 18) {
        return responder('boa tarde');
    }
    else if (horaAtual < 24) {
        return responder('boa noite');
    }
}
const responderCallback = saudacao => console.log(saudacao);
saudar(responderCallback);



//com função nomeada
const saudar2 = function horaSaudacao(presponder) {
    const horaAtual = new Date().getHours();

    // const responder = (saudacao) => console.log(saudacao);
    if (horaAtual <= 12) {
        return presponder('bom dia');
    }
    else if (horaAtual < 18) {
        return presponder('boa tarde');
    }
    else if (horaAtual < 24) {
        return presponder('boa noite');
    }
}
const imprimeSaudacao = function imprime(saudacao) { console.log(saudacao) };
saudar2(imprime);
saudar2(imprimeSaudacao);


const funcaoPrincipal = (parametro) => {
    const valor = 77;
    parametro(valor);
}

const callbackson = (number) => console.log(number);

funcaoPrincipal(callbackson);





PROMISES

const minhaPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('operação bem sucedida');
    }, 1000);
});

// tentando imrpimir antes que a promise seja resolvida, retornará Promise{<pending>}
console.log(minhaPromise);

minhaPromise.then((resultado) => {
    // isso será impresso depois que a promise for resolvida
    console.log(resultado);
})



function sumNumbers(sucesso, erro) {
    let result = 1 + 1;
    if (result === 2) {
        sucesso();
    } else {
        erro();
    };
};

function sucessoa() {
    console.log('2');
};

function erroa() {
    console.log('erro');
};

sumNumbers(() => {
    console.log('2')
}, () => {
    console.log('erro');
});


let promise = new Promise((resolve, reject) => {
    let soma = 1 + 1;
    if (soma === 2) {
        resolve('s, 2');
    } else {
        reject('errou')
    }
})

promise.then((result) => {
    console.log(result);
}).catch((errado) => {
    console.log(errado);
})




const melhorDev = 'joão';
function quemEMelhor(callback, erro) {
    if (melhorDev != 'Pires' && melhorDev != 'fernanda') {
        erro({
            nome: 'está errado',
            message: melhorDev + '? É sério?'
        });
    } else {
        callback({
            nome: melhorDev,
            message: 'Somos os melhores'
        });
    }
}

quemEMelhor((result) => {
    console.log(result.nome + '? uhhu ' + result.message);
}, (erro) => {
    console.log(erro.nome + ' ' + erro.message);
});


let melhor = new Promise((resolve, err) => {
    if (melhorDev != 'Pires' && melhorDev != 'fernanda') {
        err({
            nome: 'está errado',
            message: melhorDev + '? É sério?'
        })
    } else {
        resolve({
            nome: melhorDev,
            message: 'Somos os melhores'
        })
    }
})
melhor.then((result) => {
    console.log(result.nome + '? uhhu ' + result.message);
}).catch((erro) => {
    console.log(erro.nome + ' ' + erro.message);
});



ASYNC/AWAIT
function melhorBandaDeRock(banda) {
    return new Promise((resolve, reject) => {
        if (banda == "Oficina G3") {
            resolve({
                sucesso: true,
                nomeDaBanda: banda,
                msg: banda + "é a melhor banda de rock!"
            });
        } else {
            reject({
                sucesso: false,
                msg: "Não tenho certeza",
            });
        }
    });
}

function melhorMusica(resposta) {
    return new Promise((resolve, reject) => {
        if (resposta.sucesso) {
            resolve("Humanos de " + resposta.nomeDaBanda);
        } else {
            reject("Você conhece o oficina G3?");
        }
    });
}

melhorBandaDeRock("Oficina G3").then((response) => {
    console.log("Checkando a resposta...");
    return melhorMusica(response);
}).then(response => {
    console.log("Encontrando a melhor música");
    console.log(response);
}).catch(err => {
    console.log(err.msg);
})

async function facaOTrabalho() {
    try {
        const melhorBandaR = await melhorBandaDeRock('Oficina G3');
        console.log(melhorBandaR);
        const melhorMusicaR = await melhorMusica(melhorBandaR);
        console.log(melhorMusicaR);
    } catch (error) {
        console.log(error);
    }
}
facaOTrabalho();