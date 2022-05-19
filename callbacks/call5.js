function saludo(nombre,nombre2,callback1,callback2,callback3){
    setTimeout(()=>{
        callback1(nombre,nombre2)
        callback2(nombre)
        callback3(nombre2)
    },3000)
}

/*function recurso(nombre,nombre2){
    console.log(`Hola estoy enviando un audio y soy ${nombre}`)
    console.log(`Hola estoy enviando un audio y soy ${nombre2}`)
    console.log(`${nombre}: ha enviado una imagen`)
    console.log(`${nombre2}: ha enviado :D :)`)


}*/

function audio(nombre){
    console.log(`Hola estoy enviando un audio y soy ${nombre}`)
}

function imagen(nombre){
    console.log(`${nombre}: ha enviado una imagen`)
}

function emoji(nombre){
    console.log(`${nombre}: ha enviado :D :)`)
}


saludo("Jose","Daniel",audio,imagen,emoji)