//var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session      = require('express-session')
const dotenv = require("dotenv")
const bodyParser = require('body-parser')

const mongoose = require("mongoose")
const MongoDBStore = require('connect-mongodb-session')(session)


var indexRouter = require('./routes/index');

var app = express();
const store = new MongoDBStore({
  uri :"mongodb+srv://Charity1818:fibreone18@cluster0.jjylv.mongodb.net/sarsmustend?retryWrites=true&w=majority", 
  collection : "sessions"
}) 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.use(session({
	cookie : {
		maxAge : 864e5
	} , 
	secret : process.env.SESSION_SECRET ,   
  resave : false , 
  store : store , 
	saveUninitialized : true , 
	unset : "destroy" , 
	genid : (req) => {
		return uuid.v4()
	}
	
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const CONFIG = { 
	uri : "mongodb+srv://Charity1818:fibreone18@cluster0.jjylv.mongodb.net/sarsmustend?retryWrites=true&w=majority" , 
  OPTIONS : { 
    useNewUrlParser : true , 
    useCreateIndex : true , 
    poolSize : 10 , 
    keepAlive : true , 
    useUnifiedTopology : true , 
    keepAliveInitialDelay : 3e6
  }
}
mongoose.connect(CONFIG.uri, CONFIG.OPTIONS) 
let db = mongoose.connection

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
