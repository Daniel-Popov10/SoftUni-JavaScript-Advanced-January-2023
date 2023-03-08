function printFoodObject(data) {

    const result = {};

    for (let i = 0; i < data.length; i++) {
        const food = data[i];
        const calories = data[i + 1];

        if (i % 2 === 0) result[food] = Number(calories);

    }

    console.log(result);
}

printFoodObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);