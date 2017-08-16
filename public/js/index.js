var table = document.querySelector('#weeks-mentor-table');
var cohorts = document.querySelector('.cohort-form-input');
var viewButton = document.querySelector('#view');
var addButton = document.querySelector('#add');
var cohortForm = document.querySelector('.addcohort-container');
var tableDiv = document.querySelector('.table-container');
var addMentorButton = document.querySelector('#add-mentor');
var mentorAccount = document.querySelector('#account')
var weekNumber = document.querySelector('#week-number');


get('/cohorts', (response) => {
  document.getElementById("CohortName").innerHTML = generateOptions(response);
})


function generateOptions(e) {
  let strt = "<option value=''>Select Your Cohort</option>";
  return e.reduce(function(ss, op) {
    return strt += "<option id='" + op.id + "' 'value='" + op.name + "'>" + op.name + "</option>"
  }, "");
}

viewButton.onclick = (e) => {
  var selectedCohort = cohorts.options[cohorts.selectedIndex].value;
  var selectedID = cohorts.options[cohorts.selectedIndex].id;

  var url = `weeks?cohort=${selectedID}`;

  updateTable(url);

  addMentorButton.onclick=(e)=>{
    e.preventDefault();
    var week = weekNumber.options[weekNumber.selectedIndex].value;
    var data =`cohort_id=${selectedID}&mentor_user=${mentorAccount.value}&week_num=${week}`
    mentorAccount.value = '';
    weekNumber.value = '1'
    post('/add-mentor',data,(response)=>{
      updateTable(url);
      console.log('what?');
    })
  }
}

addButton.onclick=(e)=>{
  tableDiv.style = 'display:none';
  cohortForm.style = 'display:block';
}

function updateTable(url){
  get(url, (response) => {
    var weekNumbers = Object.keys(response);
    var rows = table.getElementsByTagName('tr');
    var rowsArray = Array.from(rows);
    if (rowsArray.length > 0) {
      rowsArray.forEach((row, i) => {
        table.deleteRow(row);
      });
    }
    tableDiv.style = 'display:block';
    cohortForm.style = 'display:none';

    var weekTitles= ['Toolkit','Testing','APIs','Node.js 1/2','Node.js 2/2',
    'PostgreSQL','Authentication','Express','self-selected project',
    'self-selected project','self-selected project','self-selected project',
    'self-selected project','self-selected project','self-selected project']


    weekNumbers.forEach((week, i) => {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = `week${week}`;
      cell2.innerHTML = weekTitles[i];
      response[week].mentors.forEach((mentor)=>{
      cell3.innerHTML+= `<a href=https://github.com/${mentor}> ${mentor} </a> <br>`  
      })


    });
  })
}
