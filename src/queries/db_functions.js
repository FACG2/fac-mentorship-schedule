const dbConnection = require('../database/db_connection.js');


const getData = (cohort,cb) => {
  // var location ='';
  // var num ='';
  // var c = cohort.toLowerCase().split('c');
  // if(c[1]= startsWith('g') ){
  //   var g = cohort.toLowerCase().split('g');
  //   return { location : 'Gaza' ,  num : g[1]}
  // }

  dbConnection.query(`SELECT weeks.num , weeks.week_title , mentors.githubuser from weeks inner join cohort_mentor on weeks.num = cohort_mentor.week_num inner join mentors on mentors.githubuser = cohort_mentor.mentor_user  where  cohort_mentor.cohort_id  = ${cohort}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

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


const addMenetor = (obj,cb)=>{
	dbConnection.query(`INSERT INTO mentors(githubuser) VALUES('${obj.mentor_user}')`,(err,res)=>{
		if(err){
 			cohort_mentor(obj,cb);
 		}else{
 			cohort_mentor(obj,cb);
 		}
	})
}


const cohort_mentor = (obj,cb)=>{
	dbConnection.query(`INSERT INTO cohort_mentor(cohort_id,mentor_user,week_num) VALUES (${obj.cohort_id},'${obj.mentor_user}',${obj.week_num})`,(err,res)=>{
		if(err){
 			cb(err)
 		}else{
 			cb(null, res.rows);
 		}
	})
}

 const testInsertMentor = (obj,cb) =>{
 	dbConnection.query(`SELECT cohort_id,mentor_user,week_num WHERE cohort_id = ${obj.cohort_id} AND mentor_user='${obj.mentor_user}' AND week_num=${obj.week_num}`,(err, res)=>{
 		if(err){
 			cb(err)
 		}else{
 			cb(null, res.rows);
 		}
 	})
 }
var obj = {cohort_id:1, mentor_user:"mahmoudalwadia", week_num:7};
addMenetor(obj,(err, res)=>{
	if (err) {
		console.log('mentor is already mentor on this week');
	}else{
		console.log("heeeee")
	}

})

module.exports = {getData ,addCohort, testInsert, addMenetor, testInsertMentor};
