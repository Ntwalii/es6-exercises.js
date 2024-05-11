// function* fibonacciGenerator(limit){
//     let arr=[0,1]
//     yield arr[0];
//     yield arr[1];

//     for(let i=1;i<=limit-2;i++){
//         arr.push(arr[i]+arr[i-1])
//         yield arr[i]+arr[i-1];
        
//     }
// }

// let one=fibonacciGenerator(10);

// for(let i of one){
//     console.log(i)
// }

function alphanumeric(string){
  return /^[a-zA-Z0-9]+$/.test(string)
    }

    console.log(alphanumeric("Aubin-"));