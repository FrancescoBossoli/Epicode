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
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        this.balance = balanceInit;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.withDraw = function (amount) {
        this.balance -= amount;
    };
    SonAccount.prototype.printBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        this.balance = this.balance * 1.1;
    };
    MotherAccount.prototype.printBalance = function () {
        this.addInterest();
        return _super.prototype.printBalance.call(this);
    };
    return MotherAccount;
}(SonAccount));
var Mother = new MotherAccount;
var Son = new SonAccount;
