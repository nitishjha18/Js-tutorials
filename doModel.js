// // **********************DOM Manipulation************************

// // Selection by Id
// let heading  = document.getElementById("mainhead"); //h1
// console.dir(heading);

// // Selection with class

// let headClass = document.getElementsByClassName("heading-class");
// console.dir(headClass);

// // Selection with tag
// let pahras = document.getElementsByTagName("p");
// console.dir(pahras);

// // Query Selector
// // 1st element
// let firstEl = document.querySelector("p");
// console.dir(firstEl);
// // All Elements
//  let allEl = document.querySelectorAll("p");
// console.dir(allEl);

/* Practice question */
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " early in the morning";
// console.dir(h2.innerText);

// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// let idx = 1;
// for (div of divs) {7
//   // console.log(div.innerText );
//   div.innerText = `new unique value ${idx}`;
//   idx++;
// }
// divs[0].innerText = "New val1";
// divs[1].innerText = "New val2";
// divs[2].innerText = "New val3";

// let diV = document.querySelector("div");
// console.log(diV);

// let id = div.getAttribute("id");
// console.log(id);

// let nameh = div.getAttribute("name");
// console.log(nameh);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// To access the style of div
// let div = document.querySelector("div");
// div.style.backgroundColor = "pink";


// // INSERT ELEMENTS
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!"
// console.log(newBtn);
// // node.appnend(el)  --> adds at end of the node(inside)
// let div = document.querySelector("div");
// div.append(newBtn);
// // node.prepend(el)  --> adds at the start of the node(inside)
// div.prepend(newBtn);

// // node.before(el)  --> adds before the node(outside)
// div.before(newBtn);

// // node.after(el)  --> adds after the node(outside)
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerText = "Hi, this heading is creted in Js";
// document.querySelector("body").prepend(newHeading);

// // DELETE ELEMENTS
// newBtn.remove();


// PROBLEM QUESTIONS
// Q1
// let newB = document.createElement("button");
// newB.innerText = "Click me!";
// newB.style.backgroundColor = "Red";
// newB.style.color = "White";
// console.log(newB);
// document.querySelector("body").prepend(newB);
// Q2
let para = document.querySelector("p");
