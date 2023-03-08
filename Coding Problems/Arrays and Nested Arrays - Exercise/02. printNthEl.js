function printStep(arr, step) {
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        const element = arr[i];

        result.push(element);

    }
    return result;
}

printStep(['5', '20', '31', '4', '20'], 2);