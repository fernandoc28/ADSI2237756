var array = [1, 2, 3, 4, 5]

let dev=(arr)=>{

    let mean = arr.reduce((acc, curr)=>{
        return acc + curr
      }, 0) / arr.length;

      arr = arr.map((k)=>{
        return (k - mean) ** 2
      })

     let sum = arr.reduce((acc, curr)=> acc + curr, 0);

     let variance = sum / arr.length

     return Math.sqrt(sum / arr.length)
}

console.log(dev(array))