class Pagination {
    constructor (_items = [], _size = 10) {
        this.items = _items;
        this.pageSize = _size;
        this.lines = this.items.length;
        this.currentPage = 1;
        this.pages = () => {
            let lines = this.items.length;
            let pages = parseInt(lines / this.pageSize);
            if (lines % this.pageSize > 0) {
                pages++;
            }
            return pages;
        }
        this.visibleElements = () => {
            let elements = [];
            for (let i = 0; i < this.pageSize; i++) {
                elements.push(this.items[i+((this.currentPage - 1)*this.pageSize)]);
            }
            return elements;
        }
    }
    arrange() {
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        let btnGroup = document.getElementById("pagination");        
        for (let i = 0; i < this.pageSize; i++) {
            if (i + ((this.currentPage -1)*this.pageSize) <= this.lines - 1 ) {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);            
                let th = document.createElement("th");
                th.setAttribute("scope", "row");
                th.innerHTML = this.visibleElements()[i].number;
                let td1 = document.createElement("td");
                td1.innerHTML = this.visibleElements()[i].name;
                let td2 = document.createElement("td");
                td2.innerHTML = this.visibleElements()[i].surname;
                let td3 = document.createElement("td");
                td3.innerHTML = this.visibleElements()[i].class;
                tr.append(th, td1, td2, td3);
            }           
        }
        let page = this;
        btnGroup.innerHTML = "";
        let btnFirst = document.createElement("button");
        btnFirst.className = "btn btn-danger opacity-75 col-1 border border-1";
        btnFirst.innerHTML = "<i class='bi bi-rewind-fill'></i>";
        btnGroup.appendChild(btnFirst);
        btnFirst.addEventListener("click", function(event){
            event.preventDefault();
            page.firstPage();
        });
        let btnPrevious = document.createElement("button");
        btnPrevious.className = "btn btn-primary opacity-50 col-1 border border-1";
        btnPrevious.innerHTML = "<i class='bi bi-caret-left-fill'></i>";
        btnGroup.appendChild(btnPrevious);
        btnPrevious.addEventListener("click", function(event){
            event.preventDefault();
            page.previousPage();
        });
        for (let i = 1; i <= this.pages(); i++) {
            let btnX = document.createElement("button");
            btnX.className = "btn btn-success opacity-75 col-1 border border-1";
            btnX.innerHTML = i;
            btnGroup.appendChild(btnX);
            if (i == this.currentPage) {
                btnX.classList.remove("opacity-75");
            };
            if (i < (this.currentPage - 2) || i > (this.currentPage + 2)) {
                btnX.classList.add("d-none");
            };
            if (this.currentPage <= 3) {
                if (i == 4 || i == 5) {
                    btnX.classList.remove("d-none");
                }
            }
            if (this.currentPage >= this.pages() - 2) {
                if (i == (this.pages() - 3) || i == (this.pages() - 4)) {
                    btnX.classList.remove("d-none");
                }
            }
            btnX.addEventListener("click", function(event){
                event.preventDefault();
                page.goToPage(i);                
            });
        };
        let btnNext = document.createElement("button");
        btnNext.className = "btn btn-primary opacity-50 col-1 border border-1";
        btnNext.innerHTML = "<i class='bi bi-caret-right-fill'></i>";
        btnGroup.appendChild(btnNext);
        btnNext.addEventListener("click", function(event){
            event.preventDefault();
            page.nextPage();
        });
        let btnLast = document.createElement("button");
        btnLast.className = "btn btn-danger opacity-75 col-1 border border-1";
        btnLast.innerHTML = "<i class='bi bi-fast-forward-fill'></i>";
        btnGroup.appendChild(btnLast);
        btnLast.addEventListener("click", function(event){
            event.preventDefault();
            page.lastPage();
        });        
    }
    nextPage() {
        this.currentPage++;
        if (this.currentPage > this.pages()) {
            this.currentPage = this.pages();
        }
        this.arrange();
    }
    previousPage() {
        this.currentPage--;
        if (this.currentPage < 1) {
            this.currentPage = 1;
        }
        this.arrange();
    }
    firstPage() {
        this.currentPage = 1;        
        this.arrange();
    }
    lastPage() {
        this.currentPage = this.pages();        
        this.arrange();
    }
    goToPage(x) {
        this.currentPage = x;        
        this.arrange();
    }
}

window.addEventListener("DOMContentLoaded", init);

function init() { 
    Weblist.arrange();
}

const users = [
    {number: 1, name: "Carlo", surname: "Verdi", class: "A"},
    {number: 2, name: "Franco", surname: "Bianchi", class: "B"},
    {number: 3, name: "Piero", surname: "Rossi", class: "B"},
    {number: 4, name: "Dario", surname: "Neri", class: "C"},
    {number: 5, name: "Marco", surname: "Verdi", class: "A"},
    {number: 6, name: "Bruno", surname: "Bianchi", class: "A"},
    {number: 7, name: "Mario", surname: "Rossi", class: "C"},
    {number: 8, name: "Paolo", surname: "Neri", class: "B"},
]

const list = [
    {number: 1, name: "Leonardo", surname: "Rossi", class: "A"},
    {number: 2, name: "Francesco", surname: "Russo", class: "B"},
    {number: 3, name: "Alessandro", surname: "Ferrari", class: "A"},
    {number: 4, name: "Lorenzo", surname: "Esposito", class: "C"},
    {number: 5, name: "Mattia", surname: "Bianchi", class: "A"},
    {number: 6, name: "Tommaso", surname: "Romano", class: "C"},
    {number: 7, name: "Gabriele", surname: "Colombo", class: "D"},
    {number: 8, name: "Andrea", surname: "Bruno", class: "B"},
    {number: 9, name: "Riccardo", surname: "Ricci", class: "C"},
    {number: 10, name: "Edoardo", surname: "Marino", class: "D"},
    {number: 11, name: "Matteo", surname: "Costa", class: "A"},
    {number: 12, name: "Diego", surname: "Franco", class: "B"},
    {number: 13, name: "Niccolò", surname: "Gallo", class: "A"},
    {number: 14, name: "Giuseppe", surname: "Conti", class: "C"},
    {number: 15, name: "Antonio", surname: "Greco", class: "D"},
    {number: 16, name: "Federico", surname: "Martino", class: "A"},
    {number: 17, name: "Giovanni", surname: "Giordano", class: "B"},
    {number: 18, name: "Pietro", surname: "Rizzo", class: "A"},
    {number: 19, name: "Filippo", surname: "Mancini", class: "C"},
    {number: 20, name: "Samuele", surname: "Villa", class: "D"},
    {number: 21, name: "Davide", surname: "Mauro", class: "B"},
    {number: 22, name: "Christian", surname: "Lombardi", class: "A"},
    {number: 23, name: "Michele", surname: "Fontana", class: "B"},
    {number: 24, name: "Enea", surname: "Roberto", class: "A"},
    {number: 25, name: "Marco", surname: "Barbieri", class: "D"},
    {number: 26, name: "Giulio", surname: "Moretti", class: "A"},
    {number: 27, name: "Luca", surname: "Bianco", class: "B"},
    {number: 28, name: "Gioele", surname: "Martini", class: "A"},
    {number: 29, name: "Gabriel", surname: "Fratelli", class: "C"},
    {number: 30, name: "Elia", surname: "Mariani", class: "D"},
    {number: 31, name: "Salvatore", surname: "Rinaldi", class: "B"},
    {number: 32, name: "Alessio", surname: "Amato", class: "C"},
    {number: 33, name: "Simone", surname: "Galli", class: "D"},
    {number: 34, name: "Emanuele", surname: "Ferrara", class: "B"},
    {number: 35, name: "Vincenzo", surname: "Caruso", class: "A"},
    {number: 36, name: "Jacopo", surname: "Leone", class: "C"},
    {number: 37, name: "Thomas", surname: "Mario", class: "D"},
    {number: 38, name: "Giacomo", surname: "Santoro", class: "B"},
    {number: 39, name: "Samuel", surname: "Longo", class: "C"},
    {number: 40, name: "Daniele", surname: "Conte", class: "C"},
    {number: 41, name: "Manuel", surname: "Sala", class: "D"},
    {number: 42, name: "Daniel", surname: "Martinelli", class: "A"},
    {number: 43, name: "Luigi", surname: "Serra", class: "B"},
    {number: 44, name: "Nathan", surname: "D'Angelo", class: "A"},
    {number: 45, name: "Liam", surname: "Dalla", class: "C"},
    {number: 46, name: "Noah", surname: "Marchetti", class: "D"},
    {number: 47, name: "Giorgio", surname: "Marini", class: "B"},
    {number: 48, name: "Cristian", surname: "Salvatore", class: "C"},
    {number: 49, name: "Domenico", surname: "Fabbri", class: "D"},
    {number: 50, name: "Raffaele", surname: "Fiore", class: "A"},
    {number: 51, name: "Nicola", surname: "Ferri", class: "B"},
    {number: 52, name: "Ettore", surname: "Gentile", class: "A"},
    {number: 53, name: "Niccolo'", surname: "Gatti", class: "D"},
    {number: 54, name: "Stefano", surname: "Palma", class: "B"},
    {number: 55, name: "Angelo", surname: "Monti", class: "C"},
    {number: 56, name: "Mario", surname: "Soc", class: "B"},
    {number: 57, name: "Paolo", surname: "Vitale", class: "C"},
    {number: 58, name: "Santiago", surname: "Lombardo", class: "D"},
    {number: 59, name: "Flavio", surname: "De Luca", class: "A"},
    {number: 60, name: "Alberto", surname: "Bernardi", class: "B"},
    {number: 61, name: "Carlo", surname: "Pellegrini", class: "A"},
    {number: 62, name: "Damiano", surname: "Messina", class: "B"},
    {number: 63, name: "Kevin", surname: "Benedetti", class: "C"},
    {number: 64, name: "Alex", surname: "Massimo", class: "D"},
    {number: 65, name: "Nicolas", surname: "Coppola", class: "A"},
    {number: 66, name: "Nicholas", surname: "Morelli", class: "B"},
    {number: 67, name: "Adam", surname: "Grassi", class: "A"},
    {number: 68, name: "Vittorio", surname: "Testa", class: "C"},
    {number: 69, name: "Bryan", surname: "Marchi", class: "D"},
    {number: 70, name: "Rayan", surname: "Parisi", class: "B"},
    {number: 71, name: "Cesare", surname: "Ferraro", class: "C"},
    {number: 72, name: "Valerio", surname: "Michele", class: "D"},
    {number: 73, name: "Pasquale", surname: "Santis", class: "A"},
    {number: 74, name: "Massimo", surname: "Rocca", class: "B"},
    {number: 75, name: "Achille", surname: "Valentini", class: "A"},
    {number: 76, name: "Sebastiano", surname: "Riva", class: "B"},
    {number: 77, name: "Ludovico", surname: "Agostino", class: "A"},
    {number: 78, name: "Brando", surname: "Angelis", class: "C"},
    {number: 79, name: "Roberto", surname: "Palumbo", class: "D"},
    {number: 80, name: "Sebastian", surname: "Pasquale", class: "B"},
    {number: 81, name: "David", surname: "Giorgi", class: "C"},
    {number: 82, name: "Enrico", surname: "Farina", class: "D"},
    {number: 83, name: "Michael", surname: "Silvestri", class: "A"},
    {number: 84, name: "Dario", surname: "Sanna", class: "B"},
    {number: 85, name: "Amir", surname: "Rizzi", class: "A"},
    {number: 86, name: "Martino", surname: "Cattaneo", class: "D"},
    {number: 87, name: "Gregorio", surname: "Poli", class: "B"},
    {number: 88, name: "Leone", surname: "Mazza", class: "C"},
    {number: 89, name: "Dylan", surname: "Paola", class: "D"},
    {number: 90, name: "Ciro", surname: "Lombardi", class: "A"},
    {number: 91, name: "Leo", surname: "Pellegrino", class: "A"},
    {number: 92, name: "Antonino", surname: "Piazza", class: "C"},
    {number: 93, name: "Fabio", surname: "Leo", class: "D"},
    {number: 94, name: "Mathias", surname: "Orlando", class: "B"},
    {number: 95, name: "Gennaro", surname: "Carbone", class: "C"},
    {number: 96, name: "Carmine", surname: "Re", class: "D"},
    {number: 97, name: "Zeno", surname: "Moro", class: "A"},
    {number: 98, name: "Claudio", surname: "Neri", class: "B"},
    {number: 99, name: "Ryan", surname: "Giuliani", class: "A"},
    {number: 100, name: "Aron", surname: "Guerra", class: "C"},
    {number: 101, name: "Cristiano", surname: "Rossi", class: "D"},
    {number: 102, name: "Gaetano", surname: "Russo", class: "B"},
    {number: 103, name: "Omar", surname: "Ferrari", class: "C"},
    {number: 104, name: "Mirko", surname: "Esposito", class: "D"},
    {number: 105, name: "Ethan", surname: "Bianchi", class: "B"},
    {number: 106, name: "Youssef", surname: "Romano", class: "C"},
    {number: 107, name: "Francesco Pio", surname: "Colombo", class: "D"},
    {number: 108, name: "Adriano", surname: "Bruno", class: "A"},
    {number: 109, name: "Leon", surname: "Ricci", class: "D"},
    {number: 110, name: "Ivan", surname: "Marino", class: "A"},
    {number: 111, name: "Rocco", surname: "Costa", class: "C"},
    {number: 112, name: "Giosue'", surname: "Franco", class: "D"},
    {number: 113, name: "Mohamed", surname: "Gallo", class: "A"},
    {number: 114, name: "Bruno", surname: "Conti", class: "D"},
    {number: 115, name: "Cosimo", surname: "Greco", class: "B"},
    {number: 116, name: "Alexander", surname: "Martino", class: "C"},
    {number: 117, name: "Michelangelo", surname: "Giordano", class: "D"},
    {number: 118, name: "Gianluca", surname: "Rizzo", class: "A"},
    {number: 119, name: "Rosario", surname: "Mancini", class: "C"},
    {number: 120, name: "Giordano", surname: "Villa", class: "D"},
    {number: 121, name: "Jad", surname: "Mauro", class: "C"},
    {number: 122, name: "Anas", surname: "Lombardi", class: "D"},
    {number: 123, name: "Aaron", surname: "Fontana", class: "A"},
    {number: 124, name: "Loris", surname: "Roberto", class: "B"},
    {number: 125, name: "Martin", surname: "Barbieri", class: "D"},
    {number: 126, name: "Sergio", surname: "Moretti", class: "B"},
    {number: 127, name: "Brayan", surname: "Bianco", class: "C"},
    {number: 128, name: "Vito", surname: "Martini", class: "D"},
    {number: 129, name: "Valentino", surname: "Fratelli", class: "A"},
    {number: 130, name: "Elias", surname: "Mariani", class: "B"},
    {number: 131, name: "Thiago", surname: "Rinaldi", class: "A"},
    {number: 132, name: "Imran", surname: "Amato", class: "C"},
    {number: 133, name: "Emanuel", surname: "Galli", class: "D"},
    {number: 134, name: "Lucio", surname: "Ferrara", class: "B"},
    {number: 135, name: "Lucas", surname: "Caruso", class: "C"},
    {number: 136, name: "Matthias", surname: "Leone", class: "D"},
    {number: 137, name: "Erik", surname: "Mario", class: "A"},
    {number: 138, name: "Dante", surname: "Santoro", class: "B"},
    {number: 139, name: "Gianmarco", surname: "Longo", class: "A"},
    {number: 140, name: "Jason", surname: "Conte", class: "C"},
    {number: 141, name: "Maurizio", surname: "Sala", class: "D"},
    {number: 142, name: "Massimiliano", surname: "Martinelli", class: "B"},
    {number: 143, name: "Umberto", surname: "Serra", class: "C"},
    {number: 144, name: "Biagio", surname: "D'Angelo", class: "D"},
    {number: 145, name: "Romeo", surname: "Dalla", class: "D"},
    {number: 146, name: "Fabrizio", surname: "Marchetti", class: "A"},
    {number: 147, name: "Anthony", surname: "Marini", class: "B"},
    {number: 148, name: "Elio", surname: "Salvatore", class: "A"},
    {number: 149, name: "Gerardo", surname: "Fabbri", class: "C"},
    {number: 150, name: "Marcello", surname: "Fiore", class: "D"},
    {number: 151, name: "Carmelo", surname: "Ferri", class: "C"},
    {number: 152, name: "William", surname: "Gentile", class: "D"},
    {number: 153, name: "Oliver", surname: "Gatti", class: "A"},
    {number: 154, name: "Alfonso", surname: "Palma", class: "B"},
    {number: 155, name: "Ilyas", surname: "Monti", class: "A"},
    {number: 156, name: "Joele", surname: "Soc", class: "C"},
    {number: 157, name: "Jonathan", surname: "Vitale", class: "D"},
    {number: 158, name: "Brian", surname: "Lombardo", class: "B"},
    {number: 159, name: "Ismaele", surname: "De Luca", class: "C"},
    {number: 160, name: "Mauro", surname: "Bernardi", class: "D"},
    {number: 161, name: "Christopher", surname: "Pellegrini", class: "D"},
    {number: 162, name: "Matias", surname: "Messina", class: "A"},
    {number: 163, name: "Ascanio", surname: "Benedetti", class: "B"},
    {number: 164, name: "Luis", surname: "Massimo", class: "A"},
    {number: 165, name: "Tancredi", surname: "Coppola", class: "C"},
    {number: 166, name: "Tobia", surname: "Morelli", class: "D"},
    {number: 167, name: "Denis", surname: "Grassi", class: "C"},
    {number: 168, name: "Emmanuel", surname: "Testa", class: "D"},
    {number: 169, name: "Manfredi", surname: "Marchi", class: "A"},
    {number: 170, name: "Orlando", surname: "Parisi", class: "B"},
    {number: 171, name: "Leandro", surname: "Ferraro", class: "B"},
    {number: 172, name: "Emilio", surname: "Michele", class: "C"},
    {number: 173, name: "Noel", surname: "Santis", class: "D"},
    {number: 174, name: "Luciano", surname: "Rocca", class: "A"},
    {number: 175, name: "Guido", surname: "Valentini", class: "B"},
    {number: 176, name: "Arturo", surname: "Riva", class: "A"},
    {number: 177, name: "Evan", surname: "Agostino", class: "C"},
    {number: 178, name: "Donato", surname: "Angelis", class: "D"},
    {number: 179, name: "Giona", surname: "Palumbo", class: "B"},
    {number: 180, name: "Danilo", surname: "Pasquale", class: "C"},
    {number: 181, name: "Joel", surname: "Giorgi", class: "D"},
    {number: 182, name: "Amedeo", surname: "Farina", class: "B"},
    {number: 183, name: "Karim", surname: "Silvestri", class: "C"},
    {number: 184, name: "Nicolo", surname: "Sanna", class: "D"},
    {number: 185, name: "Aldo", surname: "Rizzi", class: "A"},
    {number: 186, name: "Eric", surname: "Cattaneo", class: "B"},
    {number: 187, name: "Zakaria", surname: "Poli", class: "B"},
    {number: 188, name: "Dennis", surname: "Mazza", class: "C"},
    {number: 189, name: "Ibrahim", surname: "Paola", class: "D"},
    {number: 190, name: "Yanis", surname: "Lombardi", class: "A"},
    {number: 191, name: "Alfredo", surname: "Pellegrino", class: "B"},
    {number: 192, name: "Saverio", surname: "Piazza", class: "D"},
    {number: 193, name: "Ziyad", surname: "Leo", class: "A"},
    {number: 194, name: "Alan", surname: "Orlando", class: "D"},
    {number: 195, name: "Guglielmo", surname: "Carbone", class: "B"},
    {number: 196, name: "Lapo", surname: "Re", class: "C"},
    {number: 197, name: "Milo", surname: "Moro", class: "D"},
    {number: 198, name: "Armando", surname: "Neri", class: "B"},
    {number: 199, name: "Ferdinando", surname: "Giuliani", class: "C"},
    {number: 200, name: "Jordan", surname: "Guerra", class: "D"}
];

const Weblist = new Pagination(list, 16);