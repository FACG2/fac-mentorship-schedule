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

get('/weeks?cohort=2',(response)=>{
  console.log(response);
})
