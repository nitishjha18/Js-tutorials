// Arithmatic Operator
let a = 5;
let b = 2;

// ***************************************Arithmetic Operator***************************************
// console.log("a+b =", a+b);
// console.log("a-b =", a-b);
// console.log("a=", a, "& b=", b);
// console.log("a*b =", a*b);
// console.log("a/b =", a/b);
// console.log("a%b =", a%b);
// console.log("a**b =", a**b); //  5^2


// ***************************************Unary Operaor*********************************************
// a++;      // a = a-1;
// b--;      // b = b-1;
// console.log("a=", a, "& b=", b);
// Post ++
// console.log("a++ =", a++); // first 5 is used
// console.log("a =", a);     // now in this step new updated value is used
// // Post --
// console.log("a-- =", a--); // first 5 is used
// console.log("a =", a);     // now in this step new updated value is used
// // Pre ++
// console.log("++a =", ++a); // first 5 is used
// console.log("a =", a);     // now in this step new updated value is used
// // Pre --
// console.log("--a =", --a); // first 5 is used
// console.log("a =", a);     // now in this step new updated value is used


// ***************************************Assignment Operators**************************************
// a+=4;  // a = a+4
// console.log("+a=",a)
// a-=4;  // a = 9
// console.log("-a=",a)
// a*=4;  // a = 5
// console.log("*a=",a)
// a/=4;  // a = 20
// console.log("/a=",a)
// a%=4;  // a = 4
// console.log("%a=",a)
// b**=4;  
// console.log("**b=",b)


// **********************************************Comarision Operaters*******************************
// let c = "Bottle";
// console.log("5 == 2   is ", a==b);    // returns true or false
// console.log("a === c  is ", a===c);  // Strict checks data type also
// console.log("5 != 2   is ", a!=b);
// console.log("a !== c  is ", a!==c); 
// >   Greter than
// >=  Greter than equals to
// <   Less than 
// <=  Less than equals to

// **********************************************Lofgical Operater**********************************
// let p = 6;
// let q = 5
// let cond1 = p > q;  // true
// let cond2 = p === 0;  // false
// console.log("cond1 && cond2 =", cond1 && cond2);
//  console.log("cond1 || cond2 =", cond1 || cond2);
//  a && b - a*b 
//  a || b - a+b



// **********************************************Chapter-3 --> CONDITIONAL STATEMENT******************************
 
// let age =26;
// if(age >= 18) {
// console.log("You can vote");     
// }
// if(age < 18){
//     console.log("You can't vote");  
// }

// let mode = "pink";
// let color;
//  if(mode == "dark"){
//     color = "black";
//  }else{
//     color = "white";
//  }
//   console.log(color);

//  if(mode == "light"){
//     color = "white";
//  }
//  console.log(color);
// let num = 15;
// if(num%2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")

// }
// let age = 2;
// age >= 18 ? console.log("adult") : console.log("not adult");
// // console.log(answer);


// let num = prompt("Enter a number");
// if(num % 5 == 0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

let score = prompt("Enter your score");
let grade;
if(score >= 90 && score <= 100){
    grade="A";
}else if(score >= 70 && score <= 89){
    grade="B";
}
else if(score >= 60 && score <= 69){
    grade="C";
}
else if(score >= 50 && score <= 59){
    grade="A";
}
else if (score >= 0 && score <= 49){
    grade="F"
}
console.log("Based on your score your grade is :", grade);

 