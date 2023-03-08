function cityTaxes(name, population, treasury) {

    function collectTaxes() {
        return result.treasury += result.population * result.taxRate;
    }

    function applyGrowth(percent) {
        return Math.floor(result.population += result.population * percent / 100)
    }

    function applyRecession(percent) {
        return Math.floor(result.treasury -= result.treasury * percent / 100);
    }

    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,

    }

    return result;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(20);
console.log(city.treasury);