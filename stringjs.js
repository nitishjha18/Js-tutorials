// Template literals
let specialString = `This is a special string`
console.log(specialString);

let obj = {
    item: "pen",
    price: 110,
};
// old way
console.log("The price of", obj.item, "is", obj.price, "rupees");
// Template literal way
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
let sum = `The sum of two numbers ${1+2+3}`;
console.log(sum);


// escape character --> \n - next line
console.log("Your favourite show is Smack Down \nComming soon");


// String methods
// --> str.toUpperCase()
// --> str.toLowerCase()
// --> str.trim() {Removes whitespaces -- Starting and end se }
// --> str.slice(start, end?) -- returns the string part(end not incl)
// --> str1.concat(str2)
// -->str.replace(searchVal,newVal)
// -->str.charAt(idx)

let str1 = "lecture is going on ";
let str2 = "hello";
let str = "Js Tutorials";

let ustr          =  str.toUpperCase();
let lstr          =  str.toLowerCase();
let trimWhSpaces  =  str.trim();
let strSlice      =  str.slice(1,4);
let strConcat     =  str1.concat(str2);
let strReplace    =  str.replace("l","L");
let strCharat     =  str.charAt(0);

console.log(ustr);
console.log(lstr);
console.log(trimWhSpaces);
console.log(strSlice);
console.log(strConcat);
console.log(strReplace);
console.log(strCharat);

// #To make changes in a string you will have to make a new string/variable


// practice Questions
let fullName = prompt("Enter your full name without space");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);

 


