const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Nanhua99.",
  host: "localhost",
  port: 5432,
  database: "BANK",
});
module.exports = pool;
