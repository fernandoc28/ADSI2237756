function principal(vec,callback1,callback2){
    let tam= Math.round(Math.random()*20)
    for(i=0; i< tam; i++){
        vec.push(Math.round(Math.random()*100))
    }
    callback1(vec)
    console.log(callback2(vec))
}

function mostrarvec(vec){
    console.log(vec)
}

function sumarVec(vec){
    let suma = 0
    for(i=0;i<vec.length;i++){
        suma+=vec[i]
        
    }
    return suma
}

principal([],mostrarvec,sumarVec)