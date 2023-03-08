function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, arr.length) + 1;

    return arr.slice(start, end).reduce((acc, val) => acc + Number(val), 0);

}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); 