let bulbTop = document.querySelector(".bulb-top");
let bulbBottom=document.querySelector(".bulb-bottom");
let bulbSwitch = document.querySelector(".switch");

let isOpen=false;
bulbSwitch.addEventListener("click",()=> {
    if(isOpen){
        bulbSwitch.classList.remove("on");
        bulbBottom.classList.remove("bulbOn");
        bulbTop.classList.remove("bulbOn");

    }
    else
    {
        bulbSwitch.classList.add("on");
        bulbTop.classList.add("bulbOn");
        bulbBottom.classList.add("bulbOn");

    }
    isOpen=!isOpen;
})


