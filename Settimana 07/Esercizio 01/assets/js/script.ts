var giocatore1 : number = Math.floor(Math.random()* 100) ;
var giocatore2 : number = Math.floor(Math.random()* 100) ;

if (giocatore1 == giocatore2) {
    giocatore2--;
}

confronto(giocatore1 , giocatore2);

function confronto(valore1: number, valore2: number) {

    let estratto : number = Math.floor(Math.random()* 100) ;
    console.log("Il numero estratto è: " + estratto);
    if(valore1 == estratto){
        console.log("Il giocatore 1 ha indovinato!");
    } else if (valore2 == estratto){
        console.log("Il giocatore 2 ha indovinato!");
    } else if ((Math.abs(estratto - valore1)) < (Math.abs(estratto - valore2))){
        console.log(`Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più`);
    } else {
        console.log(`Nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più`);
    }
}
