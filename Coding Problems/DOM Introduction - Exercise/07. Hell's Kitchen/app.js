function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestRestaurant = '';
      let bestWorkers = ''
      let resultObj = {};

      for (const line of input) {
         const info = line.split(' - ');
         const restaurant = info[0];
         const workersInfo = info[1].split(', ')

         for (const worker of workersInfo) {
            let [name, salary] = worker.split(' ');

            if (!resultObj.hasOwnProperty(restaurant)) {
               resultObj[restaurant] = {};
            }

            if (resultObj.hasOwnProperty(restaurant)) {
               resultObj[restaurant][name] = Number(salary);
            }

         }
      }
      let entries = Object.entries(resultObj);

      for (const restaurant of entries) {

         let key = restaurant[0];
         let values = Object.entries(restaurant[1]);


         for (let [name, salary] of values) {

            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestRestaurant = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(resultObj[bestRestaurant]).sort((a, b) => b[1] - a[1]);

      result.forEach((w) => bestWorkers += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${(avgSalary).toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`
      document.querySelector('#workers p').textContent = bestWorkers;

   }

}