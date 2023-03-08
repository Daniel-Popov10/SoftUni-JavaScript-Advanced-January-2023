function isMagic(matrix) {
    let sum = 0;


    matrix.forEach(element => {
        sum = element.reduce((acc, val) => acc + val);
    });

    for (let i = 0; i < matrix.length; i++) {
        let sumCol = 0;
        for (let j = 0; j < matrix.length; j++) {

            const col = matrix[j][i];
            sumCol += col;
        }

        if (sumCol !== sum) {
            return false;
        }

    }
    return true;
}

isMagic([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);