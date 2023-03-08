function calcFruitCost(fruit, grams, pricePerKg) {

    calcPrice(pricePerKg);
    convertGrams(grams);

    function convertGrams() {
        return grams / 1000;
    }


    function calcPrice() {
        return pricePerKg * convertGrams();
    }



    console.log(`I need $${calcPrice().toFixed(2)} to buy ${convertGrams().toFixed(2)} kilograms ${fruit}.`);
}

calcFruitCost('orange', 2500, 1.80);

