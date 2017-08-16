const {Pool} = require('pg');
require('env2')('./config.env');
var data_url;

if (!process.env.DATABASE_URL) {
  throw new Error('No DATABASE_URL provided');
}

if (process.env.NODE_ENV == 'test'){
  data_url = process.env.TEST_URL;
} else {
  data_url = process.env.DATABASE_URL;
}

const pool = new Pool({connectionString: data_url,ssl:true});


module.exports = pool;
