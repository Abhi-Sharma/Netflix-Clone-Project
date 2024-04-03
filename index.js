let btn = document.querySelector(".what");
let ans1 = document.querySelector(".ans1");
let body = document.querySelector("body");
let counter = true;
let cross = document.querySelector("i.fa-solid.fa-plus");
btn.addEventListener("click",()=>{
    if(counter==true){
    cross.classList.add("add");
    ans1.classList.remove("ans1");
    counter = false;
    }
    else{
        cross.classList.remove("add");
        ans1.classList.add("ans1");
        counter = true;
    }

})

let cross1 = document.querySelector(".add1");
let btn1 = document.querySelector(".how");
let ans2 = document.querySelector(".ans2");
btn1.addEventListener("click",()=>{
    if(counter==true){
    cross1.classList.add("add");
    ans2.classList.remove("ans2");
    counter = false;
    }
    else{
        cross1.classList.remove("add");
        ans2.classList.add("ans2");
        counter = true;
    }

})

let cross2 = document.querySelector(".add2");
let btn2 = document.querySelector(".where");
let ans3 = document.querySelector(".ans3");
btn2.addEventListener("click",()=>{
    if(counter==true){
    cross2.classList.add("add");
    ans3.classList.remove("ans3");
    counter = false;
    }
    else{
        cross2.classList.remove("add");
        ans3.classList.add("ans3");
        counter = true;
    }

})

let cross3 = document.querySelector(".add3");
let btn3 = document.querySelector(".cancel");
let ans4 = document.querySelector(".ans4");
btn3.addEventListener("click",()=>{
    if(counter==true){
    cross3.classList.add("add");
    ans4.classList.remove("ans4");
    counter = false;
    }
    else{
        cross3.classList.remove("add");
        ans4.classList.add("ans4");
        counter = true;
    }

})

let cross4 = document.querySelector(".add4");
let btn4 = document.querySelector(".watchon");
let ans5 = document.querySelector(".ans5");
btn4.addEventListener("click",()=>{
    if(counter==true){
    cross4.classList.add("add");
    ans5.classList.remove("ans5");
    counter = false;
    }
    else{
        cross4.classList.remove("add");
        ans5.classList.add("ans5");
        counter = true;
    }

})

let cross5 = document.querySelector(".add5");
let btn5 = document.querySelector(".is");
let ans6 = document.querySelector(".ans6");
btn5.addEventListener("click",()=>{
    if(counter==true){
    cross5.classList.add("add");
    ans6.classList.remove("ans6");
    counter = false;
    }
    else{
        cross5.classList.remove("add");
        ans6.classList.add("ans6");
        counter = true;
    }

});