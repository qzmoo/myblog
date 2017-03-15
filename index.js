var path = require('path');
var express = require('express');
var app = express();

var indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.locals.blog = {
    title: 'this is title',
    description: 'des'
};

app.use('/', indexRouter);

app.listen(3000);