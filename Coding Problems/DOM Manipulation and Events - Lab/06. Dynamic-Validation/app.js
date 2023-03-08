function validate() {

    const input = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+.[a-z]+/g;

    input.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if (pattern.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }

}