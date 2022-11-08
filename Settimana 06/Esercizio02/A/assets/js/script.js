class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    checkAge(x) {
        if (this.age > x.age) {
            document.writeln(this.name + " è più vecchio di " + x.name + "<br>");
        }else {
            document.writeln(x.name + " è più vecchio di " + this.name + "<br>");
        }
    }
}

let P1 = new Person("Franco", 34);
let P2 = new Person("Paolo", 27);
let P3 = new Person("Luca", 32);

P1.checkAge(P2);
P1.checkAge(P3);
P2.checkAge(P3);