const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvd-rental",
  port: 5432,
  password: "postgres",
});

module.exports = pool;
