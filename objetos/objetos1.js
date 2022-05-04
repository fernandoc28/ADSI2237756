var ob={
    nombre:'fernando',
    documento:123,
    ficha:2237756,
    informacion:function(){
        return `${this.nombre}, su documento es ${this.documento} y está en la ficha ${this.fich}`
    }
}
console.log(typeof(ob))
console.log(ob.informacion())