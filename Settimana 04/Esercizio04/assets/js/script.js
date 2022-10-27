var ul = document.getElementsByTagName("ul");
var h1 = document.getElementsByTagName("h1");
var p = document.getElementsByTagName("p");
var li = ul[0].children;
var list = ul[1].children;
var button = document.getElementsByTagName("button");

document.onload = start();

function start() {
    ul[0].style.margin = 0;
    ul[0].style.padding = 0;
    ul[0].style.backgroundColor = "blue";
    ul[0].style.width = "80px";
    ul[0].style.lineHeight = "60px";
    ul[0].style.textAlign = "center";
    ul[0].style.color = "white";
    ul[0].style.fontSize = "18px";
    ul[0].style.verticalAlign = "center";    
    ul[0].style.position = "absolute";
    ul[0].style.top = "10px";
    h1[0].style.textAlign = "center";
    h1[0].style.marginBlock = "100px";
    p[0].style.fontWeight = 600;
    p[0].style.textTransform = "uppercase";
    p[0].style.padding = 0;
    for (i=0; i<li.length; i++) {
        li[i].style.display = "none";
    }    
    for (i=0; i<list.length; i++) {
        list[i].style.width = "200px";
    }
}

ul[0].addEventListener("click", menu);
button[0].addEventListener("click", bigger);
button[1].addEventListener("click", colour);
button[2].addEventListener("click", capitalize);
button[3].addEventListener("click", hide);
button[4].addEventListener("click", show);

function menu() {
    if (li[0].style.display == "none") {
        ul[0].style.backgroundColor = "cornflowerblue";
        ul[0].focus();
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "block";
            li[i].style.backgroundColor = "mediumpurple";
            li[i].style.width = "200px";
            li[i].style.color = "black";
            li[i].style.textAlign = "left";
            li[i].style.paddingLeft = "20px";
        }
    }
    else {
        ul[0].style.backgroundColor = "blue";
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "none";
        }
    }
}

function bigger() {
    h1[0].style.fontSize = "6em";
}

function colour() {
    h1[0].style.color = "red";
}

function capitalize() {
    h1[0].style.textTransform = "uppercase";
}

function hide() {
    h1[0].style.visibility = "hidden";
}

function show() {
    h1[0].style.visibility = "initial";
}

for (i = 0; i < list.length; i++) {
    list[i].addEventListener('mouseover', function() {
        this.style.color = "red";
    });
    list[i].addEventListener('mouseout', function() {
        this.style.color = "black";;
    });
    list[i].addEventListener('click', function() {
        if (this.style.textDecoration == "line-through") {
        this.style.textDecoration = "none";
        }
        else {
        this.style.textDecoration = "line-through";   
        }
    });
}

for (i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "lightgray";
    });
    li[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = "mediumpurple";
    });
}