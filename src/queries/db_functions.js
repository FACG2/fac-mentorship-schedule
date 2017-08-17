const dbConnection = require('../database/db_connection.js');


const getData = (cohort, cb) => {

  dbConnection.query(`SELECT weeks.num , weeks.week_title , mentors.githubuser from weeks inner join cohort_mentor on weeks.num = cohort_mentor.week_num inner join mentors on mentors.githubuser = cohort_mentor.mentor_user  where  cohort_mentor.cohort_id  = ${cohort}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const weeksMentors = (cohort, cb) => {
  var weeks = {
    1: {
      mentors: []
    },
    2: {
      mentors: []
    },
    3: {
      mentors: []
    },
    4: {
      mentors: []
    },
    5: {
      mentors: []
    },
    6: {
      mentors: []
    },
    7: {
      mentors: []
    },
    8: {
      mentors: []
    },
    10: {
      mentors: []
    },
    11: {
      mentors: []
    },
    12: {
      mentors: []
    },
    13: {
      mentors: []
    },
    14: {
      mentors: []
    },
    15: {
      mentors: []
    },
    16: {
      mentors: []
    },
  }
  getData(cohort, (err, res) => {
    if (err) {
      console.log(err);
    } else {

      res.map((object, i) => {
        weeks[object.num].mentors.push(object.githubuser);
        weeks[object.num]['title'] = object.week_title
      })
      cb(null, weeks);
    }
  })
}

const addCohort = (obj, cb) => {
  dbConnection.query(`INSERT INTO cohorts (location ,num,start_date) VALUES ('${obj.location}', ${obj.num}, '${obj.start_date}')`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows);
    }
  });
};

const testInsert = (obj, cb) => {
  dbConnection.query(`SELECT location, num FROM cohorts WHERE location = '${obj.location}' AND num=${obj.num} AND start_date='${obj.start_date}'`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows);
    }
  })
}



const getCohort = (cb) => {

  dbConnection.query(`SELECT id ,location ,num from cohorts`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows);
    }

  })
}

const getCohortNames = (cb) => {
  getCohort((err, res) => {
    if (err) {
      cb(err);
    } else {
      var arr = [];
      res.map((object) => {
        if (object.location === 'Gaza') {
          arr.push({
            name: 'FACG' + object.num,
            id: object.id
          });
        } else if (object.location === 'Nazareth') {
          arr.push({
            name: 'FACN' + object.num,
            id: object.id
          });
        } else {
          arr.push({
            name: 'FAC' + object.num,
            id: object.id
          });
        }
      })
      cb(null, arr);
    }
  })
}

const addMenetor = (obj,cb)=>{
    dbConnection.query(`INSERT INTO mentors(githubuser) VALUES('${obj.mentor_user}')`,(err,res)=>{
        if(err){
             cohortMentor(obj,cb);
         }else{
             cohortMentor(obj,cb);
         }
    })
}


const cohortMentor = (obj,cb)=>{
    dbConnection.query(`INSERT INTO cohort_mentor(cohort_id,mentor_user,week_num) VALUES (${obj.cohort_id},'${obj.mentor_user}',${obj.week_num})`,(err,res)=>{
        if(err){
             cb(err)
         }else{
             cb(null, res.rows);
         }
    })
}

module.exports = {
  getData,
  addCohort,
  testInsert,
  weeksMentors,
  getCohort,
  getCohortNames,
  addMenetor
};
