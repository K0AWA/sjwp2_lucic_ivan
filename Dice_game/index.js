
let randNumber1=Math.floor(Math.random()*6)+1

let randImageSource1= "./images/dice" + randNumber1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randImageSource1);


let randNumber2=Math.floor(Math.random()*6)+1
let randImageSource2= "./images/dice" + randNumber2 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randImageSource2);
