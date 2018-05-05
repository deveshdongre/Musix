var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsmediatags = require('jsmediatags');
// Requrie Routes:
var index = require('./routes/index');
var users = require('./routes/users');
var player = require('./routes/player');
var newview = require('./routes/newview');
var view = require('./routes/view');
var contact = require('./routes/contact');
var login = require('./routes/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes:
app.use('/', index);
app.use('/users', users);
app.use('/player', player);
app.use('/newview',newview);
app.use('/view',view);
app.use('/contact',contact);
app.use('/login',login);



app.get('/info', function(req, res) {
  jsmediatags.read("./public/musics/London.mp3", {
    onSuccess: function(tag) {
      console.log(tag);
    },
    onError: function(error) {
      console.log(':(', error.type, error.info);
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
