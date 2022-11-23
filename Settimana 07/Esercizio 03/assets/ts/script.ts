abstract class Lavoratore {
    codredd:number;
    redditoannuolordo:number;
    tasseinps:number;
    tasseirpef:number;

    constructor (_redditoannuolordo: number, _tasseinps: number, _tasseirpef: number, _codredd: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    getUtileTasse():number {
        return (this.redditoannuolordo * this.codredd) / 100;
    }
    getTasseInps():number {
        return (this.getUtileTasse() * this.tasseinps) / 100;
    }
    getTasseIrpef():number {
        return (this.getUtileTasse() * this.tasseirpef) / 100;
    }
    getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

class Professionista extends Lavoratore{
    constructor (_redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_redditoannuolordo, _tasseinps, _tasseirpef, 78);
    }
}

class Artigiano extends Lavoratore{
    codredd:number;
    constructor (_redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {        
        super(_redditoannuolordo, _tasseinps, _tasseirpef, 67);       
    }
}

class Commerciante extends Lavoratore{
    constructor (_redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_redditoannuolordo, _tasseinps, _tasseirpef, 40);        
    }
}

var prof = new Professionista(27500, 25.72, 5);
var art = new Artigiano(67500, 0.08, 15);
var comm = new Commerciante(97500, 0.08, 15);

console.log(comm.getRedditoAnnuoNetto());
