class Libro{

    constructor (titulo, editorial){
        this._titulo=titulo;
        this._editorial=editorial
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this._titulo=titulo
    }
}

var lib1 = new Libro ("Satanas","Planeta");
console.log(lib1)

lib1.titulo="Satanas 2"
console.log(lib1.titulo)