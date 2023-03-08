function attachGradientEvents() {
    //todo get gradient field
    const gradientField = document.getElementById('gradient');
    //todo add click event for gradient
    gradientField.addEventListener('mousemove', calcGradient);

    //todo calculate gradient percentage
    function calcGradient(event) {
        const x = event.offsetX;
        const percentage = Math.floor(x / 300 * 100);
        //todo get result div
        document.getElementById('result').textContent = `${percentage}%`;
        //todo display percentage in result div
    }

}