function validate() {
    const validation = /[a-z]+@[a-z]+.[a-z]+/g;
    const getInput = document.getElementById('email');

    getInput.addEventListener('change', (e) => {
        if (!validation.test(e.currentTarget.value)) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }

    });
}