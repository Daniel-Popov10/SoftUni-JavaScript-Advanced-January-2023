function subtract() {
    let getNumOne = document.getElementById('firstNumber').value
    let getNumTwo = document.getElementById('secondNumber').value
    let sum = Number(getNumOne) - Number(getNumTwo);
    let getSum = document.getElementById('result');
    getSum.textContent = Math.abs(sum);
};