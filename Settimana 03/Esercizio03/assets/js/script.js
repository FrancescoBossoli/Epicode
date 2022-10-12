function conta(num1,num2) {
    return num1 + num2;
}
document.getElementById('corretta').innerHTML = `Succo con ${conta(1, 3)} mele e ${conta(2, 3)} arance`;

function contaArance() {
    var arance = 3;
    function somma() {
    let totale = arance + arance;
    }
    return somma();
}
document.getElementById('sbagliata').innerHTML = `Succo con ${conta(2, 4)} mele e ${contaArance()} arance`;

function miaEta() {
    const anno = 1986;
    let anni = 2022 - anno;
    return anni;
}
document.getElementById('eta').innerHTML += `${miaEta()} anni`;

var eta = (x) => 2022 - eval(x);
document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${eta(30)}`;
document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${eta(24)}`;

function ingredienti() {
    let mele = 9;
    let arance = conta(7,8);
    return mele + " fette di mela e " + arance + " fette di arancia"
}
document.getElementById('torta').innerHTML += `Torta con ${ingredienti()}`;

document.getElementById('calcola').addEventListener('click', function () {
    let cibo = document.getElementById('cibo');
    let detersivi = document.getElementById('detersivi');
    let abiti = document.getElementById('abiti');
    let tot = eval(cibo.value) + eval(detersivi.value) + eval(abiti.value);
    document.getElementById('totale').innerHTML = "Il totale spesa è: €" + tot;
})