class Ahorro{

    constructor (dinero,dinero2){
        this._dinero=dinero
        this._dinero2=dinero2
    }

    get ahorro(){
        return this._dinero;
    }

    set ahorro(titulo){
    }

    abono(dinero) {

        var saldo = this._dinero+this._dinero2
        return saldo
    }

    retiro () {

        if (this._dinero<=0 || this._dinero2>this._dinero){
            return "No tiene suficiente dinero en la para realizar un retiro"
        }else {
            var saldo = this._dinero - this._dinero2
            return saldo
        }

    }
}

var  as = new Ahorro (100000,1000000)
console.log(as.retiro())