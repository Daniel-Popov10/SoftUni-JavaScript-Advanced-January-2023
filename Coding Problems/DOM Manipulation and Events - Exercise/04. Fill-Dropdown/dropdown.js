function addItem() {
    const menu = document.getElementById('menu');
    const textBox = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue')
    const option = document.createElement('option');
    option.textContent = textBox.value;
    option.value = value.value;
    menu.add(option);
    textBox.value = '';
    value.value = '';

};