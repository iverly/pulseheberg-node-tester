const mysql = require('mysql');
const Bluebird = require('bluebird');

let db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const connect = async () => {
    db = Bluebird.promisifyAll(db);
    return db.connectAsync
}

module.exports = { db, connect };