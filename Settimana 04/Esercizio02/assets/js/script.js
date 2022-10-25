function spendi() {
    var budget = Number(document.getElementById('budgetIniziale').value);
    if (budget > 100) {
        var spese = 0;
        var acquisto = 0;
        var rimanenza = budget;
        var half = false;
        document.getElementById('scelta').innerHTML = "Il tuo budget iniziale è " + budget + "€";
        for (spese = 0; rimanenza >= (budget / 10); spese++) {
            if (half == false && rimanenza <= (budget/2)) {
                half = true;
                document.getElementById('lista').innerHTML += "<br><span><b>Sei arrivato a spendere metà del budget</b></span><br>";
            }
            acquisto = Math.floor(Math.random() * budget / 10);
            rimanenza -= acquisto;
            document.getElementById('lista').innerHTML += "<li>Ammontare della spesa: €" + acquisto + "<span>";
            document.getElementById('lista').innerHTML += "Nuovo budget aggiornato: €" + rimanenza + "</span></li>";
        }
        document.getElementById('esito').innerHTML += "<h2>Hai speso abbastanza!</h2>";
        document.getElementById('esito').innerHTML += "Totale spese effettuate: " + spese + "<br>";
        document.getElementById('esito').innerHTML += "Budget rimanente: €" + rimanenza;
    }
    else {
        document.getElementById('scelta').innerHTML = "Hai un budget troppo basso per poterti dare a spese folli";
    }
}