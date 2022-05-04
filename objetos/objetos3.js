var operaciones={
    n1:2,
    n2:4,
    d1:5,
    d2:6,

    suma:function(){

        if(this.d1==this.d2){
            let d = this.n1+this.n2;
            let n= this.d1;
            return `El numerador es ${d} y el denominador es ${n}`
        }else {
            let d = this.d2*this.n1
            let n = this.d1*this.n2
        }
    }
}

console.log(operaciones.suma())