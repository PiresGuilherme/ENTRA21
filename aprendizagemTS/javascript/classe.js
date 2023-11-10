class Livro {
    constructor(titulo, autor, numDePag) {
        this._titulo = titulo;
        this._autor = autor;
        this._numDePag = numDePag;
    }
    detalhes() {
        console.log(`nome ${this._titulo}, autor ${this._autor} e numero de paginas ${this._numDePag}`);
    }
    get getTitulo() {
        return this._titulo;
    }
    set setTitulo(titulo) {
        this._titulo = titulo;
    }
    get getAutor() {
        return this._autor;
    }
    set setAutor(autor) {
        this._autor = autor;
    }
    get getNumDePag() {
        return this._numDePag;
    }
    set setNumDePag(numDePag) {
        this._numDePag = numDePag;
    }
}
const livro = new Livro('Pequeno Principe', 'nãosei', 500);
livro.detalhes();
console.log(livro.getAutor);
