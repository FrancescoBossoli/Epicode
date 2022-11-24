var arrayTask = new Array;
var btnAdd:HTMLElement = document.getElementById("add")!;
var list:HTMLElement = document.getElementById("list")!;
var empty:HTMLElement = document.getElementById("empty")!;
var errore:HTMLElement = document.getElementById("errore")!;

function Task(_titolo:string, _categoria:string, _contenuto:string) {
    this.titolo = _titolo;
    this.categoria = _categoria;
    this.contenuto = _contenuto    
}

window.addEventListener("DOMContentLoaded", print);

btnAdd.addEventListener("click", async function(e) {
    e.preventDefault();
    let newTitle = (document.getElementById("titolo") as HTMLInputElement).value;
    let newCategory = (document.getElementById("categoria") as HTMLInputElement).value;
    let newContent = (document.getElementById("contenuto")as HTMLInputElement).value;
    
    if (newTitle && newCategory && newContent) {
        let newTask = new Task(newTitle, newCategory, newContent);        
        await addToList(newTask);
        print();
    } else {
        errore.style.visibility = "visible";
        errore.innerHTML = "Attenzione! Riempire tutti i campi";
        clearForm();
        return;
    }
})

async function addToList(task:any) {
	let response = await fetch('http://localhost:3000/tasks/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(task)
	});
}

function print() {
    fetch ("http://localhost:3000/tasks").then((response) => {return response.json()}).then(async (data) => {
        arrayTask = data;
        empty.style.display = "none";
        errore.style.visibility = "hidden";
        list.innerHTML = "";
        arrayTask.forEach(task => {
            let li:HTMLLIElement = document.createElement("li");
            li.className = "list-group-item mb-3 text-start";
            li.innerHTML = ` Titolo task : <strong>${task.titolo}</strong> / Categoria: <strong>${task.categoria}</strong> / Descrizione: <strong>${task.contenuto}</strong>`;
            let span:HTMLSpanElement = document.createElement("span");
            span.className = "btn btn-danger btn-sm float-end";
            span.innerText = "X";
            let hr:HTMLHRElement = document.createElement("hr");
            list.appendChild(li);
            li.appendChild(span);
            li.appendChild(hr);
            span.addEventListener("click", async function() {                  
                this.parentNode!.parentNode!.removeChild(this.parentNode!);
                let id:number = arrayTask[arrayTask.indexOf(task)].id;
                await deleteTask(id);
                print();
            })
        });
        clearForm();
    });
}

async function deleteTask(id:number) {
    let response = await fetch('http://localhost:3000/tasks/' + id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(arrayTask)
	});
}

function clearForm() {
    (document.getElementById("titolo") as HTMLInputElement).value = "";
    (document.getElementById("categoria") as HTMLInputElement).value = "";
    (document.getElementById("contenuto") as HTMLInputElement).value = "";
}