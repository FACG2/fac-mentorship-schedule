const dbConnection = require('../database/db_connection.js');


 const addCohort = (obj, cb) =>{
 	dbConnection.query(`INSERT INTO cohorts (location ,num,start_date) VALUES ('${obj.location}', ${obj.num}, '${obj.start_date}')`, (err, res)=>{
 		if(err){
 			cb(err)
 		}else{
 			cb(null, res.rows);
 		}
 	});
 };

 const testInsert = (obj,cb) =>{
 	dbConnection.query(`SELECT location, num FROM cohorts WHERE location = '${obj.location}' AND num=${obj.num} AND start_date='${obj.start_date}'`,(err, res)=>{
 		if(err){
 			cb(err)
 		}else{
 			cb(null, res.rows);
 		}
 	})
 }
module.exports = {addCohort, testInsert};
