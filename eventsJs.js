// The change in the state of an object is known as EVENTS
let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div")
// };


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked")
// });
// let div = document.querySelector("div");

// EVENT OBJECT
let btn = document.querySelector("#btn1");
// btn.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX.clientY,);
// };

// EVENT LISTENER
btn.addEventListener("click", () => {
    console.log("button was clicked")
});
