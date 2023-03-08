function checkCoordinates(x1, y1, x2, y2) {

    let firstPoint = calcFirstPoint(x1, y1);
    let secondPoint = caclSecondPoint(x2, y2);
    let thirdPoint = calcThirdPoint(x1, y1, x2, y2)


    if (Number.isInteger(firstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(thirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function calcFirstPoint() {
        let calcFirst = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return calcFirst;
    }
    function caclSecondPoint() {
        let calcSecond = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return calcSecond;
    }

    function calcThirdPoint() {
        let calcThird = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return calcThird;
    }

}

checkCoordinates(5, 7, 1, 1);