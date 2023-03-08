function deleteByEmail() {
    const getRow = document.querySelectorAll('tbody tr td');
    const getInput = document.querySelector('input[name = "email"]').value;
    const output = document.getElementById('result');
    const arr = Array.from(getRow)
    for (const row of arr) {
        if (row.textContent === getInput) {
            output.textContent = 'Deleted.'
            let remove = row.parentNode;
            remove.parentNode.removeChild(remove);
        } else {
            output.textContent = 'Not found.'
        }
    }
}