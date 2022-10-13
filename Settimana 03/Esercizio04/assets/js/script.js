var frase = new String('Sto imparando JavaScript');

document.getElementById('maiuscola').innerHTML += frase.toUpperCase();
document.getElementById('minuscola').innerHTML += frase.toLowerCase();
document.getElementById('strArray').innerHTML += frase.split('');
document.getElementById('estraiCaratteri').innerHTML += frase.charAt(2)+frase.charAt(1)+frase.charAt(14)+frase.charAt(18);
document.getElementById('concatena').innerHTML += frase.concat(' JS')
document.getElementById('estraiStringa').innerHTML += frase.slice(5,9);

var gruppo = ["Giovanni","Carla","Piero","Mirtilla"];

document.getElementById('array').innerHTML += gruppo.toString();
document.getElementById('lunghezza').innerHTML += gruppo.length;
document.getElementById('elemento').innerHTML += gruppo[2];
document.getElementById('ultimo').innerHTML += gruppo[gruppo.length-1];
gruppo.splice(2,1,"Massimo");
document.getElementById('modificato').innerHTML += gruppo.toString();

var annoNascita = [2001, 1990, 1987, 2018, 2010];
var gruppo2 = ["Mario", "Anna", "Maria", "Nicola", "Giovanna"];
var eta = [""];

calcolaEta = (a) => 2022 -a;

for (i=0; i<annoNascita.length; i++) {
    eta[i] = calcolaEta(annoNascita[i]);
}

document.getElementById('eta1').innerHTML += `${calcolaEta(annoNascita[0])} anni`;
document.getElementById('eta2').innerHTML += `${calcolaEta(annoNascita[1])} anni`;
document.getElementById('eta3').innerHTML += `${calcolaEta(annoNascita[2])} anni`;
document.getElementById('eta4').innerHTML += `${calcolaEta(annoNascita[3])} anni`;
document.getElementById('eta5').innerHTML += `${calcolaEta(annoNascita[4])} anni`;
document.getElementById('arrayEta').innerHTML += eta.toString();

var animali = ["coniglio", "cane", "gatto", "criceto"]

document.getElementById('intero').innerHTML += animali.toString();
animali.push("leone");
document.getElementById('aggiunto').innerHTML += animali.toString();
animali.pop();
document.getElementById('estratto').innerHTML += animali.toString();
document.getElementById('verifica1').innerHTML += animali.includes("criceto");
document.getElementById('verifica2').innerHTML += animali.includes("topo");
