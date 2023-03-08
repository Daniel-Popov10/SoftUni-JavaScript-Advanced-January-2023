function takeBiggerHalf(arr) {
    const sortArr = arr.sort((a, b) => a - b);
    const returnHalf = arr.length === 0 ? sortArr.slice(sortArr.length / 2 + 1) : sortArr.slice(sortArr.length / 2);
    return returnHalf;
}

takeBiggerHalf([3, 19, 14, 7, 2, 19, 6]);