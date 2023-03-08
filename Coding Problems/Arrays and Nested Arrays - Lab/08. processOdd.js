function processOdd(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }

    console.log(result.reverse().join(' '));
}

processOdd([10, 15, 20, 25]);