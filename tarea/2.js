function precio (a,b){
    let c = b/100
    let descuento = a*c
    let precio = a-descuento
    console.log(`Su valor a pagar es: ${precio}`)
}

precio(10,50)