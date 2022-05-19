/*for (let i= 0; i < 5; i++) {
    setTimeout(function() { 
       console.log(i); 
    },1000 );
}*/
//por cada ciclo es 1 segundo

/*for (var i= 0; i < 5; i++) {
    setTimeout(function() { 
       console.log(i); 
    },i*1000 );
}*/
// Var se usa como variable global y al ejecutarlo se toma el valor final del for, y let es una variable local que por cada ciclo se suma su valor

/*setTimeout(() => {
    console.log("Hola")
}, 0);
console.log("Hola2")*/

let array = ["a","b","c","d","e","f","g"]

setTimeout(()=>{
    for (i=0;i<8;i++){
        console.log(array[Math.round(Math.random()*6)])
    }

},2000)