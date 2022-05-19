let externa =()=>{
    let mjs = "Soy externa";
    let interna=()=>{
        let ms2 = "Soy interna"
    }
    return interna
}

const pro = externa()
console.log(pro())


function ahorro (){
    let capital = 0;
    function deposito (dinero){
        capital=capital+dinero
    }
    return deposito
}
let miahorro = ahorro()
console.log(miahorro(10))
