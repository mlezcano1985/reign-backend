var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const db = require('./db');
const routes = require('./api/routes');
const task = require('./api/tasks/update_node_articles.task');
const cors = require('cors');

var app = express();

// configurations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//security
app.use(helmet());

//performance
app.use(compression());

//database
connect();

//cors
app.use(cors());

//routes
routes(app);

async function connect() {
	await db.connect();
	task();
}

module.exports = app;