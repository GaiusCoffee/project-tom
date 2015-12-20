// Initialize Node Server
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    util = require('./util'),
    db = require('./db'),
    app = express();
app.use(compression());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge:86400000 }));
// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
// Set HTTP Timeout
app.use(function(req, res, next) {
  res.setTimeout(30000, function() {
    var r = { status: util.getError("NOERROR") };
    res.status(r.status.code).json(r);
  });
  next();
});
// Routes
var api = require('./routes/api');
app.use('/api', api);
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// Handle Errors
app.use(function(err, req, res, next) {
  var r = { status: util.getError("INTERNAL", err.message) };
  if (err.status){ 
    r.status.code = err.status; 
    r.status.desc = err.message; 
  }
  res.status(err.status).json(r);
});
// Start Server
app.listen(3000, function () {
  console.log('Project TOM Server listening at http://%s:%s', 
              this.address().address, this.address().port);
});
