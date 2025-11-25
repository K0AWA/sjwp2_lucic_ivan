
let randNumber1=Math.floor(Math.random()*6)+1

let randImageSource1= "./images/dice" + randNumber1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randImageSource1);


let randNumber2=Math.floor(Math.random()*6)+1
let randImageSource2= "./images/dice" + randNumber2 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randImageSource2);

if(randNumber1>randNumber2){
    alert("Player 1 wins")
}

else if(randNumber2>randNumber1) {
    alert("Player 2 wins")
}

else{
    alert("It is draw")
}