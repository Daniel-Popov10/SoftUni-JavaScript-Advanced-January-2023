function sortNums(arr) {

    const result = [];

    const sortArr = arr.sort((a, b) => a - b);


    while (sortArr.length !== 0) {
        const takeFirst = sortArr.shift();
        result.push(takeFirst);
        const takeSecond = sortArr.pop();
        result.push(takeSecond);
    }

    return result;

}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);