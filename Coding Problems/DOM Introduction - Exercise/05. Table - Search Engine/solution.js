function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const getRow = Array.from(document.querySelectorAll('tr'));
      const getSearchTerm = document.getElementById('searchField').value;
      for (let i = 2; i < getRow.length; i++) {

         const currentRow = getRow[i];
         if (currentRow.textContent.includes(getSearchTerm)) {
            currentRow.style.backgroundColor = 'yellow';
            currentRow.classList.add('select');
         } else {
            currentRow.style.backgroundColor = '#323C50';
            currentRow.classList.remove('select');
         }

      }
   }
}