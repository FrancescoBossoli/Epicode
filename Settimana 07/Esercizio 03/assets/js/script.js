var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_redditoannuolordo, _tasseinps, _tasseirpef, _codredd) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd) / 100;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps) / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef) / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo, _tasseinps, _tasseirpef, _codredd) {
        if (_codredd === void 0) { _codredd = 78; }
        return _super.call(this, _redditoannuolordo, _tasseinps, _tasseirpef, _codredd) || this;
    }
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo, _tasseinps, _tasseirpef, _codredd) {
        if (_codredd === void 0) { _codredd = 67; }
        return _super.call(this, _redditoannuolordo, _tasseinps, _tasseirpef, _codredd) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo, _tasseinps, _tasseirpef, _codredd) {
        if (_codredd === void 0) { _codredd = 40; }
        return _super.call(this, _redditoannuolordo, _tasseinps, _tasseirpef, _codredd) || this;
    }
    return Commerciante;
}(Lavoratore));
var prof = new Professionista(27500, 25.72, 5);
var art = new Artigiano(67500, 0.08, 15);
var comm = new Commerciante(97500, 0.08, 15);
console.log(prof.getRedditoAnnuoNetto());
