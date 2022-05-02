let fecha = (a) => {
    var today = new Date("2022 5 2");
    var fecha2 = new Date(a)
    
    if(today<fecha2){
        return("La fecha es posterior")
    }else if(today>fecha2){
        return("La fecha es anterior")
    }else if(today=fecha2){
        return("La fecha es actual")
    }
}
console.log(fecha("2022 5 3"))