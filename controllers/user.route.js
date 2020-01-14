const router = require('express').Router();

router.route('/')
    .get(function (req, res, next) {
        console.log('directory path >>', __dirname);
        console.log('root path >>', process.cwd());
        // res.sendStatus(500)
        res.json({
            user: []
        })

    })
    .put(function (req, res, next) {

    })
    .post(function (req, res, next) {

    })
    .delete(function (req, res, next) {

    })
router.route('/profile')
    .get(function (req, res, next) {

    })
    .put(function (req, res, next) {

    })
    .post(function (req, res, next) {

    })
    .delete(function (req, res, next) {

    })
router.route('/:id')
    .get(function (req, res, next) {

    })
    .put(function (req, res, next) {

    })
    .post(function (req, res, next) {

    })
    .delete(function (req, res, next) {
        if (req.user.role !== 1) {
            return next({
                msg: 'you dont have permisision'
            })
        }
    })

module.exports = router;

