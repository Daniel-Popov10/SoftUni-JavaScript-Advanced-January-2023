function calcArea(input) {

    const check = typeof input === 'number' ? console.log((input ** 2 * Math.PI).toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);

}

calcArea('name');