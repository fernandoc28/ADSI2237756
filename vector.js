var numbers = [1, 2, 3, 4, 5];


let vector = (array,a) =>{

    var length = array.length;
    for (var i = 0; i < length; i++) {
        array[i] *= a;
    }
    return array
}
console.log(vector(numbers,3))