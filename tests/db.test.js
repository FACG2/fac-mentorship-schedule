const test = require('tape');
const shot = require('shot');
const fs = require('fs');
const functions = require('../src/queries/db_functions.js');


test('get 16 weeks of selected cohort', (t) => {
  functions.getData(1, (err, res) => {
    if (err) {
      console.log(err);

    } else {
      var actual = res[0];
      var expected = {
        num: 5,
        week_title: 'Node.js 2/2',
        githubuser: 'Zooey'
      };
      // {weeks.num , weeks.week_title ,mentors.githubuser}
      t.deepEqual(actual, expected, 'should return an 16 weeks of selected cohort');
      t.end();
    }
  });
});

test('return sevral mentors in one week', (t) => {
  functions.weeksMentors(2, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      var actual = res;
      var expected = {
        '1': [],
        '2': ['Ali'],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': ['Abdallah', 'Mahmud'],
        '8': [],
        '10': [],
        '11': [],
        '13': [],
        '14': [],
        '15': [],
        '16': []
      };
      t.deepEqual(actual,expected,'should return each week with its mentors');
      t.end();

    }
  })
})



test('Add new cohort', (t) => {

var obj={location:'Gaza',num:2,start_date:'01-01-2010'}

functions.addCohort(obj, (err,res)=>{
	if (err) {
		console.log(err);
	}else{

		functions.testInsert(obj,(err, res)=>{
			if (err) {
				console.log(err);
			}else{
        var actual = res[0];
        var expected =  {'location': 'Gaza', 'num': 2}
				t.deepEqual(actual, expected,'should return the inerted object')
				t.end();
			}
			})

		}
	})
	});


// test('Add new mentors', (t) => {

// var obj = {cohort_id:6, mentor_user:"mahmoudalwadia", week_num:6};
// functions.addMenetor(obj, (err,res)=>{
// 	if (err) {
// 		console.log(err);
// 	}else{

// 		functions.testInsertMentor(obj,(err, res)=>{
// 			if (err) {
// 				console.log(err);
// 			}else{
//         var actual = res[0];
//         var expected =  {cohort_id:6, mentor_user:"mahmoudalwadia", week_num:6}
// 				t.deepEqual(actual, expected,'should return the inerted object')
// 				t.end();
// 			}
// 			})

// 		}
// 	})
// 	});
	test('get all cohorts', (t) => {
		functions.getCohort((err,res)=>{
			if (err) {
				console.log(err);
			}else{
		        var actual = res;
		        var expected =  [ { id: 1, location: 'London', num: 10 }, { id: 2, location: 'Gaza', num: 1 }, { id: 3, location: 'Nazareth', num: 2 }, { id: 4, location: 'Gaza', num: 2 }, { id: 5, location: 'Gaza', num: 2 }]
						t.deepEqual(actual, expected,'should return selected cohort')
						t.end();
					}
					})
				});

      test('get cohort names',(t)=>{
        functions.getCohortNames((err,res)=>{
          if(err){
            console.log(err);
          }else{
            var actual = res;
            var expected = [ 'FAC10', 'FACG1', 'FACN2', 'FACG2', 'FACG2' ];
            t.deepEqual(actual,expected,'names should be in the correct form');
            t.end();
          }
        })
      })
