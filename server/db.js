const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "Devtest33!",
	host: "localhost",
	port: 5432,
	database: "Trackr"

});

module.exports = pool;
