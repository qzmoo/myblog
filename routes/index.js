var express = require('express');
var route = express.Router();
var db = require('../models/conn');

db.query('select * from market_goods', function(err, rows, fields) {
    if (err) throw err;
    route.get('/', function(req, res) {
        res.render('index', {
            obj: rows
        });
    });
});

module.exports = route;