const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.json({
        msg: 'form empty route'
    })
})
router.get('/login', function (req, res, next) {
    // application logic here
    // application level middleware
    res.json({
        msg: 'Hi from login'
    })
})
router.post('/login', function (req, res, next) {
    // application logic here
    // application level middleware
    res.json({
        msg: 'Hi from login POST'
    })
})

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