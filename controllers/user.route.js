const router = require('express').Router();

router.route('/')
    .get(function (req, res, next) {
        console.log('directory path >>',__dirname);
        console.log('root path >>',process.cwd());
        res.sendStatus(500)

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

    })

module.exports = router;

