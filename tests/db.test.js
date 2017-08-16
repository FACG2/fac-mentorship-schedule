const test = require('tape');
const shot = require('shot');
const fs = require('fs');
const functions = require ('../src/queries/db_functions.js');

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
				// console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%',res)
				// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', obj)
				t.deepEqual(res, obj,'should return the inerted object')
				t.end();
			}
		})

		// var actual = res;
		// var expected = testInsert
		// t.deepEqual(actual, expected, 'should return an 16 weeks of selected cohort');
		// t.end();
	}
})
});
