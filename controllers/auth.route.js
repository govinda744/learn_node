const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./../configs');
function generateToken(data) {
    let token = jwt.sign({ id: data.id }, config.jwtSecret);
    return token;
}

console.log('i am called')
router.get('/', function (req, res, next) {
    res.json({
        msg: 'form empty route'
    })
})
router.post('/', function (req, res, next) {
    console.log('req.body >>>>', req.body);
    let token = generateToken({ id: 2, name: 'rkjl' });
    res.json({
        user: req.body,
        token: token
    });
})

// router.post('/login', function (req, res, next) {
//     // application logic here
//     // application level middleware
//     // validation() joi express-validator
//     // password encryption // bcrypt(not recommended for windows)
//     // db_stuff()
//     // result
//     conosle.log('req.body in server >>', req.body);
//     res.end('hello')
//     // let token = generateToken({ id: 2, name: 'rkjl' });
//     // res.json({
//     //     user: req.body,
//     //     token: token
//     // });
// })

router.get('/register', function (req, res, next) {
    // application logic here
    // application level middleware
    console.log('req.body >>', req.body);

    //db stuff
    // insert

    res.json({
        msg: 'Hi from register',
        body: req.body
    })

})
router.post('/register', function (req, res, next) {
    // application logic here
    // application level middleware
    console.log('req.body >>', req.body);
    res.json({
        msg: 'Hi from register post',
        body: req.body
    })
})



module.exports = router;