var pet_preferito = 'gatto';
console.log(pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';



document.getElementById('petUno').innerHTML= '<span style="color:blue "> ' + petPreferito + '</span>';
document.getElementById('petDue').innerHTML= '<span style="color:violet "> ' + PetPreferito + '</span>';
document.write('Il nome della variabile assegnata al pet ' + $pet + ' è scritto correttamente e appare in console');
document.write('<br>Il nome della variabile assegnata al pet ' + _pet + ' è scritto correttamente e appare in console');
document.write('<br>Posso aggiungere contenuto html tramite <b style="color: red;">document.write <b>');