function aggregate(array) {

    operation(array, 0, (a, b) => a + b);
    operation(array, 0, (a, b) => a + 1 / b);
    operation(array, '', (a, b) => a + b);

    function operation(array, initialValue, func) {
        let val = initialValue;
        for (let index = 0; index < array.length; index++) {
            val = func(val, array[index]);

        }
        console.log(val);
    }

}

aggregate([1, 2, 3]);