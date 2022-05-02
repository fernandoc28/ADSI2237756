let contar = (a) =>{
    
    var contar = 0;
    var contar2 = 0;
    var contar3 = 0;
    var contar4 = 0;
    var cadena = a;
    var minusculas = "abcdefghijklmnopqrstuvwxyz"
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var caracteres = "!#$%&/()=?¡¿'[]{}"
    var numeros = "1234567890"

    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }
    }
    for (var i = 0; i < numeros.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==numeros[i]){
                contar2+=1;
            }
        }
    }
    for (var i = 0; i < caracteres.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==caracteres[i]){
                contar3+=1;
            }
        }
    }
    for (var i = 0; i < minusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==minusculas[i]){
                contar4+=1;
            }
        }
    }

    return("Se encontraron: "+contar+" Mayusculas, " +contar4+ " minusculas, "+contar2+ " numeros y " +contar3+ " caracteres especiales");
}
console.log(contar("1561651261"))