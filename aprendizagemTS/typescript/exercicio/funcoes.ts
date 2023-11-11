
enum Status {
    RESOLVIDO,
    PENDENTE
}
class Tarefa {
    private _titulo: string;
    private _desc: string;
    private _status: Status;

    constructor(titulo: string, desc: string) {
        this._titulo = titulo;
        this._desc = desc;
        this._status = Status.PENDENTE;
        // this.criar(this._id, titulo, desc, Status.PENDENTE);
    }

    get getTitulo() {
        return this._titulo;
    }
    set setTitulo(titulo: string) {
        this._titulo = titulo;
    }

    get getDesc() {
        return this._desc;
    }
    set setDesc(desc: string) {
        this._desc = desc;
    }

    get getStatus() {
        return this._status;
    }
    set setStatus(status: boolean) {
        if (status) {
            this._status = Status.PENDENTE;
        } else {
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