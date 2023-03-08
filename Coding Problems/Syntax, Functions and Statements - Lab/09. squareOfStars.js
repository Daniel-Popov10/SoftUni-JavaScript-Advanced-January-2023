function createSquare(input) {

    if (!input) {
        input = 5;
    }
    let result = ''
    for (let row = 0; row < input; row++) {
        result = '';
        for (let col = 0; col < input; col++) {
            result += '* ';

        }
        console.log(result);
    }
}

createSquare();