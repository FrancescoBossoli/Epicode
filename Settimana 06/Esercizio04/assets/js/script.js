var list = [];

window.addEventListener('DOMContentLoaded', printData);

function printData() {
    fetch('http://localhost:3000/users').then((response) => {
        return response.json();
    }).then((data) => {
        list = data;
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        if (list.length > 0) {            
            list.map(function (element) {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                let th = document.createElement("th");
                th.setAttribute("scope", "row");
                th.className = "text-center";
                th.innerHTML = element.id;
                let td1 = document.createElement("td");
                td1.innerHTML = element.name;
                let td2 = document.createElement("td");
                td2.innerHTML = element.username;
                let td3 = document.createElement("td");
                td3.innerHTML = element.address.city;
                let td4 = document.createElement("td");
                td4.innerHTML = element.address.street + " - " + element.address.suite;
                let td5 = document.createElement("td");
                td5.innerHTML = element.address.zipcode;
                let td6 = document.createElement("td");
                td6.innerHTML = element.website;
                let td7 = document.createElement("td");
                td7.innerHTML = element.phone;
                let td8 = document.createElement("td");
                td8.innerHTML = element.email;
                let td9 = document.createElement("td");
                td9.innerHTML = element.company.name;
                
                tr.append(th, td1, td2, td3, td4, td5, td6, td7, td8, td9);
            });
        }
        else {
            document.write = "Nessun elemento presente";
        }
    });
}

