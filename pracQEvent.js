// Dark & Light mode with button
// let modebt = document.querySelector("#bt");
// let currmode = "light";

// modebt.addEventListener("click", () =>{
//     if(currmode == "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
//     console.log(currmode)
// });

let hover = document.querySelector("div");
let mhover = "light"
hover.onmouseover = () => {
    if(mhover == "light"){
                mhover = "dark";
                document.querySelector("body").style.backgroundColor = "black";
            }else{
                mhover = "light";
                document.querySelector("body").style.backgroundColor = "white";
        
            }
            console.log(mhover);

};