function findBiggest(arr) {
    const result = [];

    arr.forEach(array => {
        for (const element of array) {
            result.push(element);
        }
    });

    const takeBiggest = result.sort((a, b) => a - b).pop();
    console.log(takeBiggest);
}

findBiggest([[20, 50, 10],

[8, 33, 145]]);