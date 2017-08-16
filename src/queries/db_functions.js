const dbConnection = require('../database/db_connection.js');


const getData = (cohort,cb) => {

  dbConnection.query(`SELECT weeks.num , weeks.week_title , mentors.githubuser from weeks inner join cohort_mentor on weeks.num = cohort_mentor.week_num inner join mentors on mentors.githubuser = cohort_mentor.mentor_user  where  cohort_mentor.cohort_id  = ${cohort}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const weeksMentors = (cohort,cb) =>{
  var weeks = {
    1:{mentors:[]},
    2:{mentors:[]},
    3:{mentors:[]},
    4:{mentors:[]},
    5:{mentors:[]},
    6:{mentors:[]},
    7:{mentors:[]},
    8:{mentors:[]},
    10:{mentors:[]},
    11:{mentors:[]},
    13:{mentors:[]},
    14:{mentors:[]},
    15:{mentors:[]},
    16:{mentors:[]},
  }
  getData(cohort,(err,res)=>{
    if(err){
      console.log(err);
    } else {

       res.map((object,i)=>{
        weeks[object.num].mentors.push(object.githubuser);
        weeks[object.num]['title'] = object.week_title
      })
      cb(null,weeks);
    }
  })
}

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



 const getCohort = (cb) => {

   dbConnection.query(`SELECT id ,location ,num from cohorts` ,(err, res)=>{
     if(err){
       cb(err)
     }else{
       cb(null ,res.rows);
     }

   })
 }

 const getCohortNames = (cb)=>{
   getCohort((err,res)=>{
     if(err){
       cb(err);
     } else{
       var arr=[];
       res.map((object)=>{
         if(object.location==='Gaza'){
           arr.push('FACG'+object.num);
         } else if(object.location==='Nazareth'){
           arr.push('FACN'+object.num);
         } else{
           arr.push('FAC'+object.num);
         }
       })
        cb(null,arr);
     }
   })
 }

module.exports = {getData ,addCohort, testInsert,
  weeksMentors,getCohort,getCohortNames};
