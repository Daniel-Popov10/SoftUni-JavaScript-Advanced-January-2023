function extractText() {
    const getText = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    for (const item of getText) {
        textArea.value += item.textContent + '\n';
    }
}

