function diccionario(array,callback1,callback2){
    let posicion = Math.round(Math.random()*3)
    let palabra = array[posicion]
    console.log(palabra)
    callback1(palabra,callback2,posicion)
}
function traductor(palabra,callback2,posicion){

    let tra = ["manzana","carro","computador","raton"]
    let p = tra[posicion]
    console.log(p)
    callback2(posicion)
}
function sinonimo(posicion){
    let sinonimos = [["fruta"],["vehiculo","automovil"],["dispositivo","ordenador","portatil"],["roedor","animal","rata"]]
    let sino = sinonimos[posicion]
    console.log(sino)
}

diccionario(["apple","car","computer","mouse"],traductor,sinonimo)