function solve() {
  const text = document.getElementById('input')
  const getSentences = text.value.split('.').filter((s) => s !== '');
  const output = document.getElementById('output');
  const paragraphs = [];


  while (getSentences.length > 0) {
    let text = getSentences.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    output.appendChild(p);
  }
}