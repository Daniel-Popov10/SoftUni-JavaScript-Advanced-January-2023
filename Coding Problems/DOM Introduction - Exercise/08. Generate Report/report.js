function generateReport() {
    const checkBoxes = Array.from(document.querySelectorAll('thead tr th input'));
    const output = document.querySelector('#output');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];

    rows.forEach((row) => {
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (checkBoxes[i].checked) {
                current[checkBoxes[i].name] = x.textContent;
            }
        });
        result.push(current);
    });
    output.value = JSON.stringify(result)
}