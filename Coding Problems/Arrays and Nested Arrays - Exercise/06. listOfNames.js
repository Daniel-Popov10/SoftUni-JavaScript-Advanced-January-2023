function sortNames(arr) {
    const sortArr = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    sortArr.forEach(element => {
        console.log(`${counter}.${element}`);
        counter++;
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);