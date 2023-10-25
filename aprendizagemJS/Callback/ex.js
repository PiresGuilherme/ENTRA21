// var array = [10, 9, 8, 7];
// function funcaoPrincipal(array, media) {
//     console.log(media(array));
// }



// const media = (number) => {   
//    var valor = number.reduce((total, numero) => {return total + numero} ,0);
//    return valor/number.length;
// }
// funcaoPrincipal(array, media)

//2 

// function principal2(pares) {
//     var array = [1,2,3,4,5,6,7,8,9];
//     console.log(pares(array));
// }
// const verifica = (number) => {
//     return number.filter(par => (par % 2)==0);
// } 
// principal2(verifica)


//3
// function obterUsuario(callback) {
//     return setTimeout(() => {
//         return callback({
//             id: 1,
//             nome: 'Aladim',
//             dataNascimento: new Date()
//         })
//     }, 1000);
// };

// function obterTelefone(idUsuario, callback) {
//     if (idUsuario) {
//         setTimeout(() => {
//             callback({
//                 telefone: '470028922',
//                 ddd: 11
//             })
//         }
//             , 2000)
//     }
// };

// obterUsuario(
//     (usuario, err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(usuario.nome);
//             obterTelefone(usuario.id, (telefone, err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(`(${telefone.ddd}) ${telefone.telefone}`);
//                 }
//             })
//         }
//     }
// )



// promises
var array = [10, 9, 8, 7];
const media = new Promise((resolve, err) => {
    var valor = array.reduce((total, numero) => total + numero, 0);

    let total = (valor / array.length);
    if (typeof total === 'number') {
        resolve(total);
    } else {
        err('erro');
    }
})

media.then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro);
})


//2 
const principal2 = new Promise((resolve, reject) => {
    let par = array.filter(par => (par % 2) == 0)
    if (par.length > 0) {
        resolve(par)
    } else {
        reject('não há nenhum número par')
    }
})
principal2.then((pares) => {
    console.log(pares);
}).catch((err) => {
    console.log(err);
})


//3
const obterUser = new Promise((resolve, reject) => {
    let user = {id: 1,
        nome: 'Aladim',
        dataNascimento: new Date()}
        if (user != null ) {
            return setTimeout(() => {
                return resolve(user)
            }, 1000)
        } else {
            reject('erro')
        }
});
const obterTel = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            telefone: '470028922',
            ddd: 11
        })
    }, 2000)
})

obterUser.then((correto)=> {
    console.log(correto.nome);
    obterTel.then((ok)=>{
        console.log(ok.telefone);
    }).catch((err) => {
        console.log(err);
    })
}).catch((erro)=>{
    console.log(erro);
})