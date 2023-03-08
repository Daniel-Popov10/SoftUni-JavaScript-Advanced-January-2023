function focused() {

    const div = Array.from(document.querySelectorAll('input[type="text"]'));


    div.forEach((el) => {
        el.addEventListener('focus', () => {
            el.parentNode.className = 'focused'
        })
        el.addEventListener('blur', () => {
            el.parentNode.className = '';
        })


    })

}