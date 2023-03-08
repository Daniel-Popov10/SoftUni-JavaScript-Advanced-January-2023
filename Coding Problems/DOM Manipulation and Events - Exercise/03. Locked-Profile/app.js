function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button')).forEach(button => button.addEventListener('click', showInfo))



    function showInfo(event) {
        let profiles = event.target.parentElement;
        let isActive = profiles.querySelector('input[value="unlock"]').checked;
        if (isActive) {
            let info = Array.from(profiles.querySelectorAll('div')).find(el => el.id.includes('HiddenFields'));
            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }

        }



    }


}