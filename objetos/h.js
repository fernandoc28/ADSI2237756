class Usuario{
    constructor(id,nombre,apellido,email,contraseña){
        this._id=id;
        this._nombre=nombre;
        this._apellido=apellido;        
        this._email=email;
        this._contraseña=contraseña
    }
    get Usuario(){
        return this._id=id,
        this._nombre=nombre,
        this._apellido=apellido,
        this._email=email,
        this._contraseña=contraseña
    }
    set Usuario(id){
        this._id=id
    }
}

class Cliente extends Usuario{
    constructor(id,nombre,apellido,email,contraseña,tipo){
        super(id,nombre,apellido,email,contraseña)
        this._tipo=tipo;
    }
    get Cliente(){
        return this._tipo=tipo
    }
    set Cliente(tipo){
        this._tipo=tipo
    }
}

var c1 = new Cliente (1,"Fernando","Camacho","fer.gmail.com","123","Cliente")

console.log(c1)

class carrito {
    constructor(objeto,cliente){
        this._objeto=objeto,
        this._cliente=cliente
    }
    get carrito(){
        return this._objeto=objeto,
        this._cliente=clientez
    }
    set carrito(objeto){
        this._objeto=objeto,
        this._cliente=cliente
    }
}

var ca1 =  new carrito ("Consola",c1)

console.log(ca1)