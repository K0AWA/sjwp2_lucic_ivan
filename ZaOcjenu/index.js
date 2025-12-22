const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");

const rezultati = document.querySelectorAll(".rez");

function dijeli(a, b) {
    return a / b;
}

function djeliloNapona(r1, r2, u) {
    return (r1 / (r1 + r2)) * u;
}

function zbrojiTri(a, b, c) {
    return a + b + c;
}

function paralelnoTri(a, b, c) {
    return 1 / (1 / a + 1 / b + 1 / c);
}

function zracniSvitak(n, s, l) {
    let mi0 = 4 * Math.PI * Math.pow(10, -7);
    return mi0 * ((n * n) * s / l);
}

function induktivniOtpor(w, l) {
    return w * l;
}

btn1.onclick = () => {
    let u = Number(document.getElementById("u").value);
    let r = Number(document.getElementById("r").value);
    rezultati[0].textContent = "I = " + dijeli(u, r).toFixed(2) + " A";
};

btn2.onclick = () => {
    let r1 = Number(document.getElementById("r1").value);
    let r2 = Number(document.getElementById("r2").value);
    let uul = Number(document.getElementById("uul").value);
    rezultati[1].textContent = "Uiz = " + djeliloNapona(r1, r2, uul).toFixed(2) + " V";
};

btn3.onclick = () => {
    let r1 = Number(document.getElementById("sr1").value);
    let r2 = Number(document.getElementById("sr2").value);
    let r3 = Number(document.getElementById("sr3").value);
    rezultati[2].textContent = "Ru = " + zbrojiTri(r1, r2, r3) + " Ω";
};

btn4.onclick = () => {
    let r1 = Number(document.getElementById("pr1").value);
    let r2 = Number(document.getElementById("pr2").value);
    let r3 = Number(document.getElementById("pr3").value);
    rezultati[3].textContent = "Ru = " + paralelnoTri(r1, r2, r3).toFixed(2) + " Ω";
};

btn5.onclick = () => {
    let c1 = Number(document.getElementById("sc1").value);
    let c2 = Number(document.getElementById("sc2").value);
    let c3 = Number(document.getElementById("sc3").value);
    rezultati[4].textContent = "Cu = " + paralelnoTri(c1, c2, c3).toFixed(6) + " F";
};

btn6.onclick = () => {
    let c1 = Number(document.getElementById("pc1").value);
    let c2 = Number(document.getElementById("pc2").value);
    let c3 = Number(document.getElementById("pc3").value);
    rezultati[5].textContent = "Cu = " + zbrojiTri(c1, c2, c3) + " F";
};

btn7.onclick = () => {
    let w = Number(document.getElementById("w").value);
    let l = Number(document.getElementById("l").value);
    rezultati[6].textContent = "XL = " + induktivniOtpor(w, l).toFixed(2) + " Ω";
};

btn8.onclick = () => {
    let l1 = Number(document.getElementById("sl1").value);
    let l2 = Number(document.getElementById("sl2").value);
    let l3 = Number(document.getElementById("sl3").value);
    rezultati[7].textContent = "Lu = " + zbrojiTri(l1, l2, l3) + " H";
};

btn9.onclick = () => {
    let l1 = Number(document.getElementById("pl1").value);
    let l2 = Number(document.getElementById("pl2").value);
    let l3 = Number(document.getElementById("pl3").value);
    rezultati[8].textContent = "Lu = " + paralelnoTri(l1, l2, l3).toFixed(3) + " H";
};

btn10.onclick = () => {
    let n = Number(document.getElementById("n").value);
    let s = Number(document.getElementById("s").value);
    let d = Number(document.getElementById("d").value);
    let l = zracniSvitak(n, s, d);
    rezultati[9].textContent = "L = " + (l * 1000000).toFixed(2) + " µH";
};
