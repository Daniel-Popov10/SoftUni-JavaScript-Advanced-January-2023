function create(words) {

   const result = document.getElementById('content');

   words.forEach(word => {

      const createDiv = document.createElement('div');

      document.body.appendChild(createDiv);

      const p = document.createElement('p');

      createDiv.appendChild(p);

      p.textContent = word;

      p.style.display = 'none';

      createDiv.addEventListener('click', () => {
         p.style.display = '';
      })

      result.appendChild(createDiv);
   });
}

