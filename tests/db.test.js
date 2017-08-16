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
        var actual = res[0];
        var expected =  {'location': 'Gaza', 'num': 2}
				t.deepEqual(actual, expected,'should return the inerted object')
				t.end();
			}
		})

	}
})
});
