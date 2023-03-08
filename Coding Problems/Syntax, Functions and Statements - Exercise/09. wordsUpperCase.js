function extractWords(input) {
    let wordPattern = /[A-Za-z]+/g;
    let extract = input.match(wordPattern);
    let wordsArr = [];

    for (let word of extract) {
        word = word.toUpperCase();
        wordsArr.push(word);
    }

    console.log(wordsArr.join(', '));
}

extractWords('Hi, how are you?');