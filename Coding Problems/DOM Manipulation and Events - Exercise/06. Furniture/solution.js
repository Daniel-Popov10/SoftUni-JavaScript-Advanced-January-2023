function solve() {

  const table = document.querySelector('tbody');
  const generateButton = document.querySelectorAll('#exercise button')[0];
  const buyButton = document.querySelectorAll('#exercise button')[1];

  generateButton.addEventListener('click', extractTable);
  buyButton.addEventListener('click', buy);

  function extractTable() {

    const inputData = JSON.parse(document.querySelector('textarea').value);
    inputData.forEach(element => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const createImg = document.createElement('img');
      createImg.src = element.img;
      td1.appendChild(createImg);
      tr.appendChild(td1);
      const p1 = document.createElement('p');
      const td2 = document.createElement('td');
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      const p2 = document.createElement('p');
      const td3 = document.createElement('td');
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      const p3 = document.createElement('p');
      const td4 = document.createElement('td');
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      const td5 = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      table.appendChild(tr);




    });

  }
  function buy() {
    const input = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);
    let totalPrice = 0;
    let itemList = [];
    let totalFactor = 0;
    input.forEach(item => {
      const data = item.parentElement.parentElement;
      const items = Array.from(data.querySelectorAll('p'));
      itemList.push(items[0].textContent);
      totalPrice += Number(items[1].textContent);
      totalFactor += Number(items[2].textContent);

    });
    const buyOutput = document.querySelectorAll('textarea')[1];
    buyOutput.textContent += `Bought furniture: ${itemList.join(', ')}\r\n`;
    buyOutput.textContent += `Total price: ${(totalPrice.toFixed(2))}\r\n`;
    buyOutput.textContent += `Average decoration factor: ${(totalFactor / input.length)}`
  }

}