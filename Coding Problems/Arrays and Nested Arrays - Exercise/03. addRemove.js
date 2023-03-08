function processArr(arr) {
    const result = [];
    let counter = 0;

    arr.forEach(element => {
        counter++;
        switch (element) {
            case 'add':
                result.push(counter);
                break;
            case 'remove':
                result.pop();
                break;

        }
    });

    if (result.length) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }

}

processArr([['remove', 'remove', 'remove']]);