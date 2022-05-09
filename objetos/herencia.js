class herencia{

    constructor (nombre, apellido){
        this._nombre=nombre
        this._apellido=apellido
    }

    get herencia (){
        return this.nombre
        return this. apellido
    }

    set herencia (nombre, apellido){

    }
}


class estudiante  extends herencia{

    constructor (Ficha, programa){
        super()
        this._Ficha=Ficha
        this._programa=programa
    }

}