class Hex {
    constructor(val) {
        this.val = Number(val);
    };

    valueOf() {
        return this.val;
    };

    toString() {
        return '0x' + this.val.toString(16).toUpperCase();
    };

    plus(num) {
        let total = this.val + num.valueOf();
        return new Hex(total);
    };

    minus(num) {
        let total = (this.val - num.valueOf());
        return new Hex(total);
    };

    parse(string) {
        return parseInt(string, 16);
    };
}

let FF = new Hex(255);
console.log(FF.valueOf());
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() == '0xF');
console.log(FF.parse('AAA'));
