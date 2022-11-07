var btnAdd = document.getElementById("addEntry");
let table= document.getElementById("table");
let today = new Date();
let counter = 0;

function Person(_name, _surname, _date) {
    let birthday = new Date(_date);
    let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    this.name = _name;
    this.surname = _surname;    
    this.date = `${birthday.getDate()} ${months[birthday.getMonth()]} ${birthday.getFullYear()}`;        
    this.fullname = `${this.name} ${this.surname}`;  
    this.age = () => {                
        if (today.getMonth() > birthday.getMonth() || (today.getMonth() == birthday.getMonth() && today.getDate() >= birthday.getDate())) {
            return (today.getFullYear() - birthday.getFullYear());
        } 
        else {
            return (today.getFullYear() - birthday.getFullYear()) -1 ;
        }
    }
}

btnAdd.addEventListener("click", () => {    
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let date = document.getElementById("date").value;

    if (name && surname && date) {
        if (!document.getElementsByTagName("h4")[0].classList.contains("hide")){
            document.getElementsByTagName("h4")[0].classList.toggle("hide");
        }
        if (!document.querySelector("thead")) {
            let thead = document.createElement("thead");
            table.appendChild(thead);
            let tr = document.createElement("tr");
            thead.appendChild(tr);
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");
            let th3 = document.createElement("th");
            let th4 = document.createElement("th");
            th1.setAttribute("scope", "col-2");
            th2.setAttribute("scope", "col-5");
            th3.setAttribute("scope", "col-5");
            th4.setAttribute("scope", "col-2");
            th1.innerHTML = "#";
            th2.innerHTML = "Nome Completo";
            th3.innerHTML = "Data di Nascita";
            th4.innerHTML = "Età";
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            let tbody = document.createElement("tbody");
            tbody.className = "table-group-divider";
            table.appendChild(tbody);
        }
        counter++; 
        let entry = new Person(name, surname, date);
        let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let th = document.createElement("th");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        th.setAttribute("scope", "row");
        th.innerHTML = counter;
        td1.innerHTML = entry.fullname;
        td2.innerHTML = entry.date;
        td3.innerHTML = entry.age();
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }
    else {
        if (document.getElementsByTagName("h4")[0].classList.contains("hide")){
        document.getElementsByTagName("h4")[0].classList.toggle("hide");
        }
    }
    clean();
})

function clean() {
    document.getElementById("name").value = "";    
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
}