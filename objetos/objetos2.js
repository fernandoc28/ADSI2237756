var ejercicio={
    numeros:[7,5,2,1,3,8],

    promedio:function(){
        let sum = 0
        for (let i=0; i<this.numeros.length; i++){
            sum+=this.numeros[i]
        }
        sum=sum/this.numeros.length
        return `El promedio del array es: ${sum}`
    },

    mayor:function(){
        var max = Math.max(...this.numeros);
        return `, el número mayor es el ${max}`
    },

    menor:function(){
        var min = Math.min(...this.numeros);
        return `y el número menor es el ${min}`
    }
}

console.log(ejercicio.promedio(),ejercicio.mayor(),ejercicio.menor())