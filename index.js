const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// load routing level middleware
// whereever express router is used inside app.use block it is routing level middleware

const API_ROUTE = require('./routes/api.routes');
// third party middleware
app.use(morgan('dev'));

// inbuilt middleware
// parse incoming data
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

app.use(cors()); // allow everything 
// app.use(express.static('files')); // internally request serve
app.use('/file', express.static(path.join(__dirname, 'files')));

// routing party middleware here
app.use('/api', API_ROUTE);

// application level middleware as 404 error handler
app.use(function (req, res, next) {
  // res.end('you are blocked at middleware');
  next({
    status: 404,
    msg: 'Not Found'
  });
})
// error handling middleware
app.use(function (err, req, res, next) {
  console.log('i am error handling middleware');
  res.status(err.status || 400).json({
    msg: 'from error handling middleware',
    err: err
  })
})
app.listen(9090, function () {
  console.log('server listeing at port 9090');
})

// middleware
// middleware is a function  which has access to http request object http response object and next middleware function
// middleware will came into action between request response cycle
// middleware functions order is very important

// syntax
// function(req,res,next){
  // req http request object
  // res http response object
  // next next middeleware function
// }

// app.use() app.use is configuration block for middlewares
// types of middleware
// 1 application level middleware 
// 2 routing level middleware 
// 3 thirdparty middleware
// 4 inbuilt nmiddleware
// 5 error handling middelware



