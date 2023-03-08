function findEquals(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        const array = matrix[i];
        for (let j = 0; j < array.length; j++) {
            const element = matrix[i][j];

            if (j + 1 < array.length && element === matrix[i][j + 1]) {
                count++;
            }

            if (i + 1 < matrix.length && element === matrix[i + 1][j]) {
                count++;
            }

        }

    }

    console.log(count);
}

findEquals([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);