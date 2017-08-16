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









// function weekmentorDOM (err, data) {
//   if (err) {
//   } else {
//     var mentors = JSON.parse(data);
//     var table = document.getElementById("weeks-mentor-table");
//     // create a row in the table for each week input returned from the Database
//      weeks.forEach(function(week) {
//       var row = document.createElement("tr");
//
//       // create the value for the week of the inputter
//       var mentor = document.createElement("td");
//       mentor.className = 'td-mentor';
//       mentor.innerHTML = week.mentor;
//       row.appendChild(mentor);
//       //  table.appendChild(row);
//     });
//   }
// }?
//
// request('/mentors', weekmentorDOM);
