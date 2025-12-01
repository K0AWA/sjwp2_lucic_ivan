
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




















/*1. Kako pristupiti h1 elementu preko njegovog ID-ja title i promijeniti mu boju u crvenu?
document.getElementById("title").style.color = "red";

2. Kako pomoću getElementsByTagName odabrati sve <li> elemente i prvome promijeniti tekst u “Promijenjeno”?
document.getElementsByTagName("li")[0].textContent = "Promijenjeno";

3. Kako dohvatiti sve elemente s klasom list pomoću getElementsByClassName i zadnjem dodati klasu highlight?
let items = document.getElementsByClassName("list");
items[items.length - 1].classList.add("highlight");

4. Kako pomoću querySelector odabrati prvi <a> element unutar liste i promijeniti mu atribut href na https://www.bing.com
?
document.querySelector("ul a").setAttribute("href", "https://www.bing.com");

5. Kako pomoću querySelectorAll odabrati sve <li> elemente i svakome postaviti textContent na: “Stavka”?
document.querySelectorAll("li").forEach(li => li.textContent = "Stavka");

6. Kako pomoću classList.add dodati klasu active na gumb koji ima klasu btn?
document.querySelector(".btn").classList.add("active");

7. Kako pomoću classList.remove ukloniti klasu list s drugog <li> elementa?
document.getElementsByTagName("li")[1].classList.remove("list");

8. Kako pristupiti tekstu unutar <h1> i promijeniti ga u “Welcome”? (koristeći innerHTML)
document.querySelector("h1").innerHTML = "Welcome";

9. Kako dohvatiti tekst prvog <li> elementa koristeći textContent?
let tekst = document.querySelector("li").textContent;

10. Kako dohvatiti atribut href iz <a> elementa pomoću getAttribute?
let link = document.querySelector("a").getAttribute("href");*/
