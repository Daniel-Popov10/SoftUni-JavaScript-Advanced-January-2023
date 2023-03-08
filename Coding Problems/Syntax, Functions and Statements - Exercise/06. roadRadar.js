function detectSpeed(speed, area) {
    let limit = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    difference = Math.abs(speed - limit);

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

detectSpeed(40, 'city')