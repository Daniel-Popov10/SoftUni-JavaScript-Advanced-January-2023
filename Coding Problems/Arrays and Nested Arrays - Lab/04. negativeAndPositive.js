function processArr(arr) {
    const result = [];
    arr.forEach(element => {
        const process = element < 0 ? result.unshift(element) : result.push(element);

    });
    console.log(result);
}

processArr([7, -2, 8, 9]);