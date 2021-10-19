// test(5, 10);
// function test(a, b) {
//     let max = Math.max(a, b);
//     let min = Math.min(a, b);
//     let myArr = [];
//     for(let i = min; i <= max; i++) {
//         myArr.push(i);
//     }
//     return console.log(myArr);;
// }

function rangeOfNumbers(n, n2) {
    let min = Math.min(n, n2);
    let max = Math.max(n, n2)
    let counter = max - min;


    if(n < 1) return [];
    else {
       const test = rangeOfNumbers(counter - 1);
       test.push(couner);
       return test;
    }
};

console.log(rangeOfNumbers(5, 10));