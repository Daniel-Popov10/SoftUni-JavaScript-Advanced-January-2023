function constructCar(car) {

    const engines = {
        small: { power: 90, volume: 1800, },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }


    const constructedCar = {
        model: car.model,
        engine: engines,
        carriage: {
            type: car.carriage,
            color: car.color,

        }
    };

    if (car.power <= 90) {
        constructedCar.engine = engines.small;
    } else if (car.power <= 120) {
        constructedCar.engine = engines.normal;
    } else {
        constructedCar.engine = engines.monster;
    }


    let wheelsArr = [];
    if (car.wheelsize % 2 === 0) {
        car.wheelsize--;
    }
    while (wheelsArr.length < 4) {
        wheelsArr.push(car.wheelsize);
    }
    constructedCar.wheels = wheelsArr;
    return constructedCar;
}


constructCar({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });