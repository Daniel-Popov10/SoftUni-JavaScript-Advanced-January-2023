function getLowestPrice(data) {
    let obj = {};

    for (const line of data) {
        let [town, product, price] = line.split(' | ');

        if (!obj[product]) {
            obj[product] = {};
        }
        obj[product][town] = Number(price);

    }

    let finalResult = [];


    for (const key in obj) {
        let sortObj = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sortObj[0];
        finalResult.push(`${key} -> ${price} (${town})`);
    }
    console.log(finalResult.join('\n'));
}

getLowestPrice(['Sample Town | Sample Product | 1000',
    'New York | Sample Product | 1000.1',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Burger | 10']);