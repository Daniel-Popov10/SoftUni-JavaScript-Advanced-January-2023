function printTwoSmallest(arr) {

    const sortArr = arr.sort((a, b) => a - b)
        .slice(0, 2);
    console.log(sortArr);

}

printTwoSmallest([30, 15, 50, 5]);