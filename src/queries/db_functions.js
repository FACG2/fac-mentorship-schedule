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

module.exports = {getData};
// SELECT cohorts.id ,cohorts.location ,cohorts.num , weeks.num ,weeks.title from cohorts inner join cohorts_mentors on cohorts.id = cohort_mentor.cohort_id inner join weeks on weeks.week_num = cohort_mentor.week_num
