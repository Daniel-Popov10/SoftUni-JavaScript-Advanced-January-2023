function fibonacci() {
    let x = 1, y = 1;
    return function () {
        let z = x;
        x = y;
        y = z + y;
        return z;
    }
}

let fib = fibonacci();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13 