function validate() {
    const sumbitButton = document.getElementById('submit');

    sumbitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let isValid = true;

        const username = document.getElementById('username');
        const userNameValidation = /\b[A-Za-z0-9]{3,20}$/g;
        const userNameValue = username.value;

        if (!userNameValidation.test(userNameValue)) {
            username.style.border = '2px solid red';
            isValid = false;
        } else {
            username.style.border = 'none';
        };


        const password = document.getElementById('password');
        const passwordValidation = /\b[A-Za-z0-9_]{5,15}$/g;
        const passwordValue = password.value;

        const confirmPassword = document.getElementById('confirm-password');
        const confirmPasswordValidation = /\b[A-Za-z0-9_]{5,15}$/g;
        const confirmPasswordValue = confirmPassword.value;

        if (passwordValue === confirmPasswordValue) {

            if (!passwordValidation.test(passwordValue)) {
                password.style.border = '2px solid red';
                isValid = false;
            } else {
                password.style.border = 'none';
            }

            if (!confirmPasswordValidation.test(confirmPasswordValue)) {
                confirmPassword.style.border = '2px solid red';
                isValid = false;
            } else {
                confirmPassword.style.border = 'none';
            }
        } else {
            isValid = false;
            password.style.border = '2px solid red';
            confirmPassword.style.border = '2px solid red';
        }

        const email = document.getElementById('email');
        const emailValidation = /[A-Za-z0-9@]+\.+[A-Za-z0-9]+/g;
        const emailValue = email.value;

        if (!emailValidation.test(emailValue)) {
            email.style.border = '2px solid red';
            isValid = false;
        } else {
            email.style.border = 'none';
        }

        const isCompany = document.getElementById('company');

        if (isCompany.checked) {
            const companyInfo = document.getElementById('companyInfo');
            companyInfo.style.display = 'block';
            const companyNumber = document.getElementById('companyNumber');
            const companyNumVal = Number(companyNumber.value);

            if (companyNumVal >= 1000 && companyNumVal <= 9999) {
                companyNumber.style.border = 'none';
            } else {
                isValid = false;
                companyNumber.style.border = '2px solid red';
            }

        }
        const valid = document.getElementById('valid');

        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }

    });

}
