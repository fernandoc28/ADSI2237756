/*function principal (num1,num2,callback){
    let r= num1+num2
    callback(r)
}
function impresora (mjs){
    console.log(`Imprimiendo ${mjs}`)
}

principal(123,123,impresora)*/


//funcion que tenga como parametros 2 string y una funcion callback que los compare en tamaño y decir cual es mayor, la funcion principal debe imprimirlos


function principal(mj1,mj2,callback){
    var m = mj1
    var n = mj2
    callback(m,n)
    if(q>p){
        console.log("El primer string es mayor")
    }else if(p>q){
        console.log("El segundo string es mayor")
    }
}

function comparar(){
    let q = m.length
    let p = n.length
}

principal("Hola","Adios",comparar)