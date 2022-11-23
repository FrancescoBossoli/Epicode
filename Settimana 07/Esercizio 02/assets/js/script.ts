class SonAccount {
    balance:number;
    constructor (balanceInit:number = 0) {
        this.balance = balanceInit;
    }
    public deposit(amount:number) {
        this.balance += amount;
    }
    public withDraw(amount:number) {
        this.balance -= amount;
    }
    public printBalance():number {
        return this.balance;
    }     
}

class MotherAccount extends SonAccount {
    balance:number;
    constructor (balanceInit:number = 0) {
        super(balanceInit);
    }
    private addInterest() {
        this.balance = this.balance * 1.1;
    }
    printBalance():number {
        this.addInterest();
        return super.printBalance();
    }
}

var Mother = new MotherAccount;
var Son = new SonAccount;