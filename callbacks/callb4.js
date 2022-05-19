function saludo(nombre,callback){
    setTimeout(()=>{
        console.log(`Hola ${nombre}`)
        callback()
        callback()
    },3000)
}

function hablar (){
    setTimeout(() => {
        console.log("dadasdas")
    }, 2000);
}
saludo("fernando",hablar)

function despedirse(){
    setTimeout(() => {
       console.log("adios") 
    }, 1000);
}