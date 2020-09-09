class Calculator {
    constructor(x, y) {
        this.a = x;
        this.b = y;
    }

    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mul() {
        return this.a * this.b;
    }
    div() {
        return (this.b !== 0 ? (this.a / this.b) : 'cannot divide by zero');
    }
}

let cal = new Calculator(20, 30);
console.log('sum = ', cal.add());
console.log('subtraction = ', cal.sub());
console.log('Multiplication = ', cal.mul());
console.log('Division = ', cal.div());