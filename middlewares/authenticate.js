const jwt = require('jsonwebtoken');
const config = require('./../configs/index');

module.exports = function (req, res, next) {
  let token;

  if (req.headers['x-acces-token']) {
    token = req.headers['x-access-token'];
  }
  if (req.headers['authorization']) {
    token = req.headers['authorization'];
  }
  if (req.headers['token']) {
    token = req.headers['token'];
  }
  if (req.query['token']) {
    token = req.query['token'];
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, function (err, decoded) {
      if (err) {
        return next(err);
      }
      console.log('decoded value >>', decoded);
      // TODO set session
      // req.user = db_user();
      return next();
    })

  }
  else {
    next({
      msg: "Token not provided"
    })
  }
}