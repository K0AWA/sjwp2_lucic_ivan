/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


/*11. Kako postaviti novi atribut title="Google link" na <a> element pomoću setAttribute?
document.querySelector("a").setAttribute("title", "Google link");

12. Kako pomoću querySelector dohvatiti <ul> s ID-em list i dodati mu još jednu stavku pomoću innerHTML?
document.querySelector("#list").innerHTML += "<li>Nova stavka</li>";

13. Kako pomoću getElementById promijeniti pozadinsku boju cijelog <ul> elementa u svijetloplavu?
document.getElementById("list").style.backgroundColor = "lightblue";

14. Kako pomoću querySelectorAll odabrati sve <li> elemente i svakome dodati klasu blue-text?
document.querySelectorAll("li").forEach(li => li.classList.add("blue-text"));

15. Kako dohvatiti checkbox i provjeriti je li označen?
let checked = document.querySelector("input[type='checkbox']").checked;

16. Kako gumbu .btn promijeniti tekst u “Pressed!” pomoću textContent?
document.querySelector(".btn").textContent = "Pressed!";

17. Kako pristupiti trećem <li> elementu koristeći getElementsByClassName?
let third = document.getElementsByClassName("list")[2];

18. Kako pomoću querySelector dohvatiti button.btn i promijeniti mu inline stil: veličinu fonta na 20px?
document.querySelector("button.btn").style.fontSize = "20px";

19. Kako pomoću getElementsByTagName odabrati prvi <input> i postaviti mu atribut checked na "true"?
document.getElementsByTagName("input")[0].setAttribute("checked", "true");

20. Kako pomoću querySelectorAll odabrati sve <a> linkove i promijeniti im boju teksta na zelenu?
document.querySelectorAll("a").forEach(a => a.style.color = "green");*/
