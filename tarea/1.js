function primo (a){
    let cont=0

    for (let i = 1; i<=a; i++){
        if (a%i==0){
            cont ++
        }
    }

    if (cont ==2){
        console.log(`el numero ${a} es primo`)
    }else{
        console.log(`el numero ${a} no es primo`)
    }
}

primo(100)