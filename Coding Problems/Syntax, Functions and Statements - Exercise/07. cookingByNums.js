function performOperations(num, p1, p2, p3, p4, p5) {

    let parseNum = Number(num);

    let commandsArr = [p1, p2, p3, p4, p5];

    function chop() {
        return parseNum / 2;
    }
    function dice() {
        return Math.sqrt(parseNum);
    }


    function spice() {
        return parseNum += 1;
    }

    function bake() {
        return parseNum *= 3;
    }

    function fillet() {
        return parseNum *= 0.80;
    }



    for (const command of commandsArr) {

        switch (command) {
            case 'chop':
                parseNum = chop(parseNum);
                break;
            case 'dice':
                parseNum = dice(parseNum);
                break;
            case 'spice':
                parseNum = spice(parseNum);
                break;
            case 'bake':
                parseNum = bake(parseNum);
                break;
            case 'fillet':
                parseNum = fillet(parseNum);
                break;
        }
        console.log(parseNum);
    }


}

performOperations('32', 'chop', 'chop', 'chop', 'chop', 'chop');