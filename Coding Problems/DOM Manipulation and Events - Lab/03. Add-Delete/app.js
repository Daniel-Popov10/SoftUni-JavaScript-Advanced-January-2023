function addItem() {
    const getInput = document.getElementById('newItemText').value;
    const getList = document.getElementById('items');
    const createEl = document.createElement('li');
    createEl.textContent = getInput;
    const li = getList.appendChild(createEl);

    const deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#')
    deleteBtn.textContent = '[Delete]'
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteEl)

    function deleteEl() {
        li.remove();
    }
};