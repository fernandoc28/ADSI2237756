const array3 = [4,5,2,1,8]
const array4 = [5,7,8,1,3]

let promedio=(a,b)=>{
    let sum = 0;
    let sum2 = 0;

    const array = a;
    const array2 = b;


    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum=sum/array.length
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    sum2=sum2/array2.length

    if(sum>sum2){
        return(array)
    }else{
        return(array2)
    }
}

console.log(promedio(array3,array4))