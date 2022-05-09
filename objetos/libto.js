function libro(titulo,numpag,añoimpresion,editorial){

    var pagxmin = 4;
    var tiempolec = numpag/pagxmin
    var añoactual= 2022
    this.titulo=titulo;
    this.numpag=numpag;
    this.añoimpresion=añoimpresion;
    this.editorial=editorial;
    this.añoactual = añoactual;
    this.pagxmin=pagxmin;

    this.settiempolec=function(){
      }
        if (pagxmin >=4) {
            console.log(`Se tardaría en leer ${titulo} en ${tiempolec} minutos`);
        }else{
            console.log(`usted puede tener dificultades para leer ${titulo}`);
        }
    }

    this.settiempolec=function(){
    }

    /*if (exp>=10) {
        console.log(`el tiempo de vida util del libro ${titulo} ha expirado`);

    } else if (exp<=9) {
    console.log(`el tiempo de vida util del libro ${titulo} no ha expirado`);
    }*/


 var libro1 = new libro("Satanas",128,2002,"Planeta");