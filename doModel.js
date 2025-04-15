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


let divs = document.querySelectorAll(".box");
// console.log(divs);
let idx = 1;
for (div of divs) {
    // console.log(div.innerText );
    div.innerText = `new unique value ${idx}`;
    idx++;
}
// divs[0].innerText = "New val1";
// divs[1].innerText = "New val2";
// divs[2].innerText = "New val3";