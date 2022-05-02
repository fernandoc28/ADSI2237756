let precio = (a,b) =>{
    let c = b/100
    let descuento = a*c
    let precio = a-descuento
    return(`Su valor a pagar es: ${precio}`)
}
console.log(precio(1000,50))