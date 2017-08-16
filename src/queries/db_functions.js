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
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    10:[],
    11:[],
    13:[],
    14:[],
    15:[],
    16:[],
  }
  getData(cohort,(err,res)=>{
    if(err){
      console.log(err);
    } else {

       res.map((object,i)=>{
        return weeks[object.num].push(object.githubuser)
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



 const getCohort = (cohort,cb) => {

    var location ='';
    var num ='';
    cohort ='fac';
    var c = cohort.toLowerCase().split('c[1]');
    console.log(c);


   dbConnection.query(`SELECT id ,location ,num from cohorts where  id = '${cohort.id}' and location='${cohort.location}' and num ='${cohort.num}'` ,(err, res)=>{
     if(err){
       cb(err)
     }else{
       cb(null ,res.rows);
     }

   })
 }

module.exports = {getData ,addCohort, testInsert,weeksMentors,getCohort};
