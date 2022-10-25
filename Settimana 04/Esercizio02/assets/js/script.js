function spendi() {
    var budget = Number(document.getElementById('budgetIniziale').value);
    if (budget > 100) {
        var spese = 0;
        var acquisto = 0;
        var rimanenza = budget;
        document.getElementById('scelta').innerHTML = "Il tuo budget iniziale è " + budget + "€";
        for (spese = 0; rimanenza >= (budget / 10); spese++) {
            acquisto = Math.floor(Math.random() * budget / 10);
            rimanenza -= acquisto;
            document.getElementById('lista').innerHTML += "<li>Ammontare della spesa: €" + acquisto + "<span>";
            document.getElementById('lista').innerHTML += "Nuovo budget aggiornato: €" + rimanenza + "</span></li>";
        }
        document.getElementById('lista').innerHTML += "<h2>Hai speso abbastanza!</h2>";
        document.getElementById('lista').innerHTML += "<p>Totale spese effettuate: " + spese + "</p>";
        document.getElementById('lista').innerHTML += "<p>Budget rimanente: €" + rimanenza + "</p>";
    }
    else {
        document.getElementById('scelta').innerHTML = "Hai un budget troppo basso per poterti dare a spese folli";
    }
}