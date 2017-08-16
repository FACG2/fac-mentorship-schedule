var table = document.querySelector('#weeks-mentor-table');
get('/weeks?cohort=2', (response) => {
  var weekNumbers = Object.keys(response);
  weekNumbers.forEach((week,i) => {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = `week${week}`;
    cell2.innerHTML = response[week].title;
    cell3.innerHTML = response[week].mentors.toString();

  });
})









