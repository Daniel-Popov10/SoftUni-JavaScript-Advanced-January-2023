function toggle() {

    const button = document.getElementsByClassName('button')[0];
    const getDiv = document.getElementById('extra');


    if (getDiv.style.display === 'block') {
        getDiv.style.display = 'none';
        button.textContent = 'More'
    } else {
        getDiv.style.display = 'block';
        button.textContent = 'Less'
    }
};