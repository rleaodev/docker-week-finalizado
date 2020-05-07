const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

// server config
app.use(methodOverride('X­HTTP­Method'));
app.use(methodOverride('X­HTTP­Method­Override'));
app.use(methodOverride('X­Method­Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.use('/', require('./src/routes'));

// error handling
app.use(function (request, response, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, request, response, next) {
  response.status(err.status || 500).json({ err: err.message });
});

// server listener
module.exports = app;