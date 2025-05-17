// console.log("one");
// console.log("two");

// // setTimeout(hello, 5000);  //timeout -> after the given time function will execute

// setTimeout( () => {
//     console.log("hello");
// },4000) //timeout

// console.log("three");
// console.log("four");

//  callback - A callback is a function passed as an arguement to another function

// function sum(a, b) {
//   console.log(a + b);
// }

// function Calculator(a, b, sumCallback) {
//   sumCallback(a,b);
// }

// Calculator(2,5,sum);

// ******************************Promise******************************
let promises = new Promise((resolve, reject) => {
  console.log("I am a promise");
  reject("galatttttttttttttttttt hai yeeeeeeeeeeeeeeeeeeeeee");
  resolve(123);
});
