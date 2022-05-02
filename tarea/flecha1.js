let primo = (a) => {
    let cont=0
    for (let i = 1; i<=a; i++){
        if (a%i==0){
            cont ++
        }
    }
    return cont == 2 ? "El numero es primo" : "el numero no es primo"
}
console.log(primo(2))