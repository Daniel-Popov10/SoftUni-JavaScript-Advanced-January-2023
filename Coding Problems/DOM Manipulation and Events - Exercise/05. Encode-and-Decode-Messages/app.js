function encodeAndDecodeMessages() {
    const encodeButton = document.querySelectorAll('#main div button')[0];
    const decodeButton = document.querySelectorAll('#main div button')[1];
    const encodeTextArea = document.querySelectorAll('#main div textarea')[0];
    const decodeTextArea = document.querySelectorAll('#main div textarea')[1];


    encodeButton.addEventListener('click', encodeText);
    decodeButton.addEventListener('click', decodeText);

    function encodeText() {
        let encodedArray = [];
        encodeTextArea.value.split('').forEach(el => {
            let asciiValue = (el.charCodeAt() + 1);
            let encodeText = String.fromCharCode(asciiValue);
            encodedArray.push(encodeText);
            decodeTextArea.value = encodedArray.join('');
            encodeTextArea.value = '';
        });
    }

    function decodeText() {
        let decodedArray = [];
        decodeTextArea.value.split('').forEach(el => {
            let asciiValue = (el.charCodeAt() - 1);
            let decodeText = String.fromCharCode(asciiValue);
            decodedArray.push(decodeText);
            decodeTextArea.value = decodedArray.join('');
        });

    }
}