function createCatalogue(data) {

    let catalog = {};

    for (const line of data) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        if (!catalog.hasOwnProperty(firstLetter)) {
            catalog[firstLetter] = {};
        };

        catalog[firstLetter][product] = price;
    }
    const sortObj = Object.keys(catalog).sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sortObj) {
        console.log(key);
        let sortProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortProducts) {
            console.log(`  ${product}: ${catalog[key][product]}`);
        };
    };
}

createCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);