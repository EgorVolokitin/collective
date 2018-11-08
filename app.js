const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ect = require('ect');

const routes = require('./routes/index');

const app = express();

// view engine setup
const ectRender = ect({
    watch: true,
    root: `${__dirname}/views`,
    ext: '.html'
});

// set view engine html
app.set('view engine', 'html');
app.engine('html', ectRender.render);

app.use(favicon());
// set dev logging
app.use(logger('dev'));
// json-parser for body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// parse cooke to req.cookie
app.use(cookieParser());

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
