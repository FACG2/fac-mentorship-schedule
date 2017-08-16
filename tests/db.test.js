const test = require('tape');
const shot = require('shot');
const fs = require('fs');
const functions = require ('../src/queries/db_functions.js');


test('get 16 weeks of selected cohort', (t) => {
  functions.getData(1,(err,res)=> {
    if (err){
      console.log(err);
    }else{
    var actual = res[0];
    var expected = { num: 5, week_title: 'Node.js 2/2', githubuser: 'Zooey' };
// {weeks.num , weeks.week_title ,mentors.githubuser}
    t.deepEqual(actual, expected, 'should return an 16 weeks of selected cohort');
    t.end();
  }
    });
 });



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


test('Add new mentors', (t) => {

var obj = {cohort_id:6, mentor_user:"mahmoudalwadia", week_num:6};
functions.addMenetor(obj, (err,res)=>{
	if (err) {
		console.log(err);
	}else{

		functions.testInsertMentor(obj,(err, res)=>{
			if (err) {
				console.log(err);
			}else{
        var actual = res[0];
        var expected =  {cohort_id:6, mentor_user:"mahmoudalwadia", week_num:6}
				t.deepEqual(actual, expected,'should return the inerted object')
				t.end();
			}
			})

		}
	})
	});