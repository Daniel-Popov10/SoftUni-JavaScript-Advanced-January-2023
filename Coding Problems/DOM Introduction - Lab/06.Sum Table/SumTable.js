function sumTable() {

    const table = document.querySelectorAll('table tr');

    let total = 0;

    for (let i = 1; i < table.length; i++) {
        const element = table[i].children;
        let num = element[element.length - 1].textContent;
        total += Number(num);
    }

    document.getElementById('sum').textContent = total;
};