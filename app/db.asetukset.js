const mysql = require('mysql2');
const util = require('util');
const db = require('./db.private');

const conn = mysql.createConnection({
  host: db.HOST,
  user: db.USER,
  password: db.PASSWORD,
  database: db.DB,
  //charset: 'utf8mb4',
  //dateStrings: true
});

const dbQuery = util.promisify(conn.query).bind(conn);

module.exports = { dbQuery };