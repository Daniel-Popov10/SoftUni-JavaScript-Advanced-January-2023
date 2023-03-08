function extractSubset(arr) {

    let currentBiggest = arr[0];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];


        if (element >= currentBiggest) {
            currentBiggest = element;
            result.push(currentBiggest);

        }
    }

    return result;
}

extractSubset([20, 2, 3, 4])