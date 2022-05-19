function simulaclase(){
    let atributo="sin iniciar";
    return{
        setAtributo:(a)=>atributo=a,
        getAtributo:()=>atributo,
    }
} 
const objeto=simulaclase();
console.log(objeto.getAtributo())
objeto.setAtributo("Fabiana");
console.log(objeto.getAtributo())