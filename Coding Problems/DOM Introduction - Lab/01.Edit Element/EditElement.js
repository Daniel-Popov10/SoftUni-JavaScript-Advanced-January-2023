function editElement(ref, match, replacer) {
    let content = ref.textContent;
    let replaceWord = new RegExp(match, 'g');
    let replace = content.replace(replaceWord, replacer);
    ref.textContent = replace;

}


