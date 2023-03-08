function adder(n) {
    return function (x) {
        return x + n;
    };
}

const add5 = adder(5);
const add10 = adder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13
