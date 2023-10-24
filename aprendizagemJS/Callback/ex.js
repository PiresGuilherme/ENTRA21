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
function obterUsuario(callback) {
    return setTimeout(() => {
        return callback( {
            id:1,
            nome: 'Aladim' ,           
            dataNascimento: new Date()
        })
    }, 1000);
};
function obterTelefone(idUsuario, callback) {
    if (idUsuario) {
        setTimeout(() => {
            callback( {
                telefone: '470028922',
                ddd: 11
            })
        }
    
    , 2000)}
};
obterUsuario(
    (usuario, err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(usuario.nome);
            obterTelefone(usuario.id, (telefone, err) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(`(${telefone.ddd}) ${telefone.telefone}`);
                }
            })
        }
    }
    // (usuario) => {
    //     console.log(usuario.nome)
    // }
)