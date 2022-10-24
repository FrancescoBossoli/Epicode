var date = new Date();
document.getElementById("datafull").innerHTML = date;
const mesi = new Array("Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre");
document.getElementById("data").innerHTML = date.getDate() + " / " + mesi[date.getMonth()] + " / " + date.getFullYear();
document.getElementById("giorno").innerHTML += date.getDate();
document.getElementById("mese").innerHTML += mesi[date.getMonth()];
document.getElementById("datanum").innerHTML += date.getDate() + " - " + (date.getMonth()+1) + " - " + date.getFullYear();
function saluta() {
    let ore = date.getHours();
    let saluto = "";
    if (ore > 5 && ore < 12) {
        saluto = "Buongiorno";
    }
    else if (ore > 11 && ore < 18) {
        saluto = "Buon pomeriggio"
    }
    else if (ore > 17 && ore < 23) {
        saluto = "Buonasera"
    }
    else {
        saluto = "Buonanotte"
    }
    document.getElementById("saluto").innerHTML = saluto + "!";
  }

