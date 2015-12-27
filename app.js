var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./server/routes/index');
var users = require('./server/routes/users');

var gm = require('./server/game/gm');
var store={}

var app = express();

// app.use("/api",require('cors')())
// app.use(require('cors')())

// view engine setup
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client/public')));
app.use('/node_modules',express.static(__dirname + '/node_modules'))
app.use('/views',express.static(__dirname + '/client/views'))

app.use('/', routes);
app.use('/users', users);

//api
console.log(store)

app.post('/api/room',function (req,res) {
  if(!store[req.body.roomNum]){
    gm.createRoom(store,req.body.roomNum)
  } 
  // console.log(store[req.body.roomNum])
  res.json(store[req.body.roomNum])
})

app.post('/api/player',function (req,res) {
  gm.addPlayer(store,req.body.roomNum,req.body.playerName)
  res.json(store[req.body.roomNum])
})

app.delete('/api/player',function (req,res) {
  console.log(req.body)
  gm.removePlayer(store,req.body.roomNum,req.body.playerName)
  res.json(store[req.body.roomNum])
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
