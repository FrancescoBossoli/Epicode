class Abbigliamento {
    id:number 
    codprod:number 
    collezione:string 
    capo:string 
    modello:number 
    quantita:number 
    colore:string 
    prezzoivaesclusa:number 
    prezzoivainclusa:number 
    disponibile:string 
    saldo:number    

    constructor(_id:number, _codprod:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string, _saldo:number) {
        this.id = _id
        this.codprod = _codprod
        this.collezione = _collezione
        this.capo = _capo
        this.modello = _modello
        this.quantita = _quantita
        this.colore = _colore
        this.prezzoivaesclusa = _prezzoivaesclusa
        this.prezzoivainclusa = _prezzoivainclusa
        this.disponibile = _disponibile
        this.saldo = _saldo
    }

    getsaldocapo():number {
        return ((this.prezzoivainclusa * this.saldo) /100)
    }

    getacquistocapo():number {
        return (this.prezzoivainclusa - this.getsaldocapo());
    }
}   

var vestiti: Array<any> = [];

async function compra(): Promise<void> {
    const response = await fetch('http://localhost:3000/Abbigliamento')
    const data = await response.json()
    for (let i: number = 0; i < data.length; i++) {
        console.log(data[i])
        let vestito = new Abbigliamento(data[i].id, data[i].codprod, data[i].collezione, data[i].capo, data[i].modello, data[i].quantita, data[i].colore, data[i].prezzoivaesclusa, data[i].prezzoivainclusa, data[i].disponibile, data[i].saldo)
        console.log(vestito.getacquistocapo())
        vestiti.push(vestito)
    }
    console.log(vestiti)
}

compra();