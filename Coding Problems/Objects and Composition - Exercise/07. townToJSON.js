function convertToJSON(table) {
    const result = [];
    let obj = {};
    for (let i = 1; i < table.length; i++) {
        const elements = table[i].split(/\s*\|\s*/g)
        const town = elements[1];
        const latitude = Number(elements[2]).toFixed(2);
        const longitude = Number(elements[3]).toFixed(2);

        obj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        }
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

convertToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);