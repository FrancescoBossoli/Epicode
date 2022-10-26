const btnLeft = document.getElementsByClassName("left-arrow");
const btnRight = document.getElementsByClassName("right-arrow");
const btnPlay = document.getElementsByClassName("play-pause");
const cube = document.querySelectorAll(".cube");
const sections = cube.length;
var interval = "";

btnRight[0].addEventListener("click", turnRight);
btnRight[0].addEventListener("mouseover", overRight);
btnRight[0].addEventListener("mouseout", outRight);
btnLeft[0].addEventListener("click", turnLeft);
btnLeft[0].addEventListener("mouseover", overLeft);
btnLeft[0].addEventListener("mouseout", outLeft);
btnPlay[0].addEventListener("click", play)

function turnRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-90)+"deg)";
    }
}
function overRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-35)+"deg)";
    }
}
function outRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+35)+"deg)";
    }
}
function turnLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+90)+"deg)";
    }
}
function overLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+35)+"deg)";
    }
}
function outLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-35)+"deg)";
    }
}
function play() {
    if (btnPlay[0].firstChild.className == "fas fa-play") {
        btnPlay[0].firstChild.className = "fas fa-stop";
        interval = setInterval(turnRight, 1000);          
        }    
    else {
        clearInterval(interval);
        btnPlay[0].firstChild.className = "fas fa-play";
    }
}