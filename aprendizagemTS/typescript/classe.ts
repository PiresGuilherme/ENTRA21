class Livro {
    private _titulo: string;
    private _autor: string;
    private _numDePag:number;

    constructor(titulo:string, autor:string, numDePag:number ){
        this._titulo = titulo;
        this._autor = autor;
        this._numDePag = numDePag;
    }

    detalhes():void{
        console.log(`nome ${this._titulo}, autor ${this._autor} e numero de paginas ${this._numDePag}`);
    }

    public get getTitulo():string {
        return this._titulo;
    }
    public set setTitulo(titulo:string){
        this._titulo = titulo;
    }

    public get getAutor():string {
        return this._autor;
    }
    public set setAutor(autor:string){
        this._autor = autor;
    }
    
    public get getNumDePag():number {
        return this._numDePag;
    }
    public set setNumDePag(numDePag: number){
        this._numDePag=numDePag;
    }
}

const livro = new Livro('Pequeno Principe', 'nãosei', 500);
livro.detalhes();
console.log(livro.getAutor);
livro.setNumDePag = 400;
livro.detalhes();
