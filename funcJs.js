// function myFunction(msg){       // parameter -> input
//     console.log(msg);

// }
// myFunction("Js is going on");   // Argument

// function sum(a,b){
//     s = a+b;
//     return s;
// }
//  let val = sum(3,4);
//  console.log(val);

//************************ Arrow Functions ************************

const arrowSum = (a, b) => {
  console.lo(a + b);
};

const arrowMul = (p, q) => {
  return p * q;
};

const printHello = () => {
  console.log("hello");
};

//************************ Practice Questions ************************

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

const gintiVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

//************************ forEach  ************************
let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arrow func
// arr.forEach((val) => {
//     console.log(val);
// });

//************************ Practice Questions ************************
let arr1 = [5, 15, 25];
// arr.forEach((val) => {
//     // let ans = val * val;
//     console.log(val*val);
// });

// method no. 2
// let calc = (val1) => {
//   console.log(val1 * val1);
// };
// arr1.forEach(calc);

//************************ Map ************************
let newArr = arr1.map((val) => {
  return val;
});

//************************ Filter ************************
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr2.filter((val2) => {
  return val2 % 2 === 0;
});
console.log(evenArr);

//************************Reduce ************************
let arr3 = [1, 2, 3, 4];
const output = arr3.reduce((prev, curr) => {
  // return prev + curr;
  return prev > curr ? prev : curr;
});
console.log(output);

//************************ Practice Questions ************************
let marks = [78, 52, 34, 90, 91, 90];
let markFilter = marks.filter((markS) => {
  return markS > 90;
});
console.log(markFilter);

// let n = prompt("Enter a number")
// let arr4 = [];
// for(let i=0; i<=n; i++){
//     arr4[i-1] = i;
// }
// console.log(arr4);

let arr5 = [1, 2, 3, 4];
let sumAll = arr5.reduce((prev1, curr1) => {
  // return prev1 + curr1;
  return prev1 * curr1;
});
console.log(sumAll);
