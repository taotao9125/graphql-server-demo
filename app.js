var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes/index');
var apis = require('./apis/index');

//var graphqlHttp = require('express-graphql');

var { ApolloServer } = require('apollo-server-express');
var gqlTypeDefs = require('./graphql/typedefs/index');
var gqlResovers = require('./graphql/resolvers/index');


var gqlServer = new ApolloServer({
  cors: false,
  typeDefs: gqlTypeDefs,
  resolvers: gqlResovers
});

var app = express();

gqlServer.applyMiddleware({app});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router);
app.use('/api', apis);

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
