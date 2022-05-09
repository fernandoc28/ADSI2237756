const [a,b,c] = [1,2,3,4,5]
console.log(a,...)


function prueba (){
    const a = () => "Valor 1" 
    const b = () => "Valor 2"
    const c = () => "Valor 3"
}

const [p,q,r] = prueba();
console.log(p())
console.log(q())
console.log(r())


function darobjeto (){
    return [
        {
            Nombre:"fernando",
            Apellido:"Camacho",
            Lenguajes:"Js",
            info:function(){
                return `${this.Nombre}` `${this.Apellido}` `${this.Lenguajes}`
            }
        },
        {
            Nombre:"fernan",
            Apellido:"Camac"
        },
        {
            Nombre:"fernan",
            Apellido:"Camacho",
            ludicas:{
                nombre:"Musica",
                dias:["Lunes","Martes"]
            }
        }
    ]
}


const [obj,ob2,ob3]=darobjeto();
console.log(obj,ob2,ob3)