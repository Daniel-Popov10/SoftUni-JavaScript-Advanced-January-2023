function search() {

   let matches = 0;
   const cities = document.querySelectorAll('#towns li');
   const input = document.getElementById('searchText').value;
   const arr = Array.from(cities);
   const result = document.getElementById('result');

   for (let i = 0; i < arr.length; i++) {

      const city = arr[i];
      if (city.textContent.includes(input)) {
         matches++;
         result.textContent = `${matches} matches found`;
         cities[i].style.fontWeight = 'bold';
         cities[i].style.textDecoration = 'underline'
      } else {
         cities[i].style.fontWeight = 'normal';
         cities[i].style.textDecoration = 'none';
      }
   }

};
