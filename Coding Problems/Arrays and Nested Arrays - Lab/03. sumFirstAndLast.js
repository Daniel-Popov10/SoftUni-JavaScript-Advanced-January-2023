function sumFirstAndLast(arr) {
    const first = Number(arr.shift());
    const last = Number(arr.pop());
    const sum = first + last;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);