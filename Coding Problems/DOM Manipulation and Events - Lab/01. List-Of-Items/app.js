function addItem() {
    const getInput = document.getElementById('newItemText').value;
    const getList = document.getElementById('items');
    const createEl = document.createElement('li');
    createEl.textContent = getInput;
    getList.appendChild(createEl);

};