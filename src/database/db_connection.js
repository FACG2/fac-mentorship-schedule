const {Pool} = require('pg');
require('env2')('./config.env');
var data_url;

if (!process.env.DATABASE_URL) {
  throw new Error('No DATABASE_URL provided');
}
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'test'){
  data_url = process.env.DB_URL;
} else {
  data_url = process.env.DATABASE_URL;
}
console.log(data_url);
const pool = new Pool({connectionString: data_url});

module.exports = pool;
