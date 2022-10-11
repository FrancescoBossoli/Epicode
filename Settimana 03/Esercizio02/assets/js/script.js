var uno = 'Aldo';
let due = 'cliente';
const tre = 3.14;
var concatenata = uno + ', ' + due + ', ' + tre;
document.getElementById('concatena').innerHTML= uno + ', ' + due + ', ' + tre;
document.getElementById('concatena2').innerHTML= concatenata;
var mario = 'Mario';
document.getElementById('var').innerHTML= mario;
{
    let mario = 'Carla';
    document.getElementById('let').innerHTML= mario;
}
document.getElementById('final').innerHTML= mario;
{
    let mario = 'Mario';
    document.getElementById('let2').innerHTML= mario;    
}
{
    let mario = 'Carla';
    document.getElementById('let3').innerHTML= mario;
}
var mario = 'Carla';
document.getElementById('final2').innerHTML= mario;
var value = 15;
document.getElementById('iniziale').innerHTML+= value;
var value3 = value+value;
var value2 = value3++;
document.getElementById('valore1').innerHTML+= value2 + ", " + value3;
var value5 = value - 10;
var value4 = value5--;
document.getElementById('valore2').innerHTML+= value4 + ", " + value5;
document.getElementById('valore3').innerHTML+= value * 3;
document.getElementById('valore4').innerHTML+= value / 3;
document.getElementById('valore5').innerHTML+= value + " " + ((value > 1) ? "è un numero" : "non è un numero");


