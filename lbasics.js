// ***********While***********
// let i = 1;
// while(i<=5){
//     console.log("Apna college");
//     i++;
// }

// ***********do-While***********
// let i=1;
// do{
//     console.log("Js is getting started");
//     i++;
// }while(i<=10);

// ***********for-of***********
// let str = "Armstrong";
// let size = 0;
// for(let i of str ){
//     console.log("i=",i);
//     size++;
// }
// console.log("String size is equals:",size );

// ***********for-of***********
// let student = {
//     name: "Billo Bagge",
//     age: 21,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let i in student){
//     console.log(i); 
// }

// ***********Q-1***********
// for(let i=0; i<=100; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }

// ***********Q-2***********
let gameNum = 91;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
    userNum = prompt("You guessed the wrong number, Guess again");
}
console.log("Congratulations, you entered the right number");