function fecha (a) {
   
    var today = new Date();
    var Xmas95 = new Date(a)

    if(today<Xmas95){
        console.log("La fecha es posterior")
    }else if(today>Xmas95){
        console.log("La fecha es anterior")
    }else if(today=Xmas95){
        console.log("La fecha es actual")
    }
}
fecha("April 29, 2022")