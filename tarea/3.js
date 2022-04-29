function fecha (a) {
    var today = new Date();
    var Xmas95 = new Date(a)
    console.log(today)
    if(today<Xmas95){
        console.log("La fecha es posterior")
    }else if(today>Xmas95){
        console.log("La fecha es anterior")
    }else if(today=Xmas95){
        console.log("La fecha es actual")
    }
}
fecha("2022 april 29")