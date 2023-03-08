function extract(content) {
    let getText = document.getElementById('content').textContent;
    let extractPattern = new RegExp(/[(][A-Z a-z]+\s*[A-Z a-z][)]/g);

    let matchWords = getText.match(extractPattern);
    return matchWords.join('; ');
};

