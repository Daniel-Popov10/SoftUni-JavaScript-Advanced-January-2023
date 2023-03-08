function colorize() {
    const getEl = document.querySelectorAll('table tr');
    const convertToArr = Array.from(getEl);


    for (let i = 1; i < convertToArr.length; i++) {

        let el = convertToArr[i];

        if (i % 2 !== 0) {
            el.style.background = 'teal';
        }
    }

};