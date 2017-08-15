const test = require('tape');
const shot = require('shot');
const fs = require('fs');
const functions = require ('../src/queries/db_functions.js');




test('get 16 weeks of selected cohort', (t) => {
  functions.getData((res)=> {
    var actual = res;
    var expected = ['week1','week2','week3','week4','week5','week6','week7','week8','week10','week11','week12'];


    t.deepEqual(actual, expected, 'should return an 16 weeks of selected cohort');
    t.end();
    });
 });
