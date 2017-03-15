var db = {};
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '115.29.161.138',
    port: '3306',
    user: 'root',
    password: 'qzuser123456',
    database: 'chunse'
});

db.query = function(sql, callback) {
    if (!sql) {
        callback();
        return;
    }

    pool.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }

        callback(null, rows, fields);
    })
}

module.exports = db;