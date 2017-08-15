const dbConnection = require('../../database/db_connection.js');

const getData = (cb) => {
  dbConnection.query('SELECT weeks.week_num  from weeks', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
// SELECT cohorts.id ,cohorts.location ,cohorts.num , weeks.num ,weeks.title from cohorts inner join cohorts_mentors on cohorts.id = cohort_mentor.cohort_id inner join weeks on weeks.week_num = cohort_mentor.week_num
