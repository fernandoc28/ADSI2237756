var arreglo=[1,1,1,1,1,5,8,9,6,5,7]

let numeros = (a,arreglo2)=>{
    var numeros = a
    var contar2 = 0;
    var arreglo = arreglo2;

    for (var i = 0; i < arreglo.length; i++) {

            if(arreglo[i]==numeros){
                contar2+=1;
            }

    }
    return("El numero está " +contar2+" veces")
}
console.log (numeros(1,arreglo))