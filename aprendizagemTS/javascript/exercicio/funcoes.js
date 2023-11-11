var Status;
(function (Status) {
    Status[Status["RESOLVIDO"] = 0] = "RESOLVIDO";
    Status[Status["PENDENTE"] = 1] = "PENDENTE";
})(Status || (Status = {}));
class Tarefa {
    constructor(titulo, desc) {
        this._titulo = titulo;
        this._desc = desc;
        this._status = Status.PENDENTE;
        // this.criar(this._id, titulo, desc, Status.PENDENTE);
    }
    get getTitulo() {
        return this._titulo;
    }
    set setTitulo(titulo) {
        this._titulo = titulo;
    }
    get getDesc() {
        return this._desc;
    }
    set setDesc(desc) {
        this._desc = desc;
    }
    get getStatus() {
        return this._status;
    }
    set setStatus(status) {
        if (status) {
            this._status = Status.PENDENTE;
        }
        else {
            this._status = Status.RESOLVIDO;
        }
    }
}
// async function criar() {
//     var titulo = document.querySelector('#titulo');
//     var desc = document.querySelector('#desc');
//     var contador = await fetch('http://localhost:3000/contador').then(response => response).then(data => {
//         var objeto = new Livro(data, titulo, desc)
//         fetch('http://localhost:3000/tarefa', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(objeto)
//         }
//         ).catch(err => new Error('deu erro aqui'))
//     });
// }
