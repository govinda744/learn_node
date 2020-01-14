const UserCtrl = require('./../controllers/user.controller');

const router = require('express').Router();

router.route('/')
  .get(UserCtrl.findAll)
  .post(UserCtrl.insert)

router.route('/search')
  .get(UserCtrl.search)
  .post(UserCtrl.search);

router.router('/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.update)
  .delete(UserCtrl.remove)

module.exports = router;
