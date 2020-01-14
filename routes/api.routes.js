// const UserRouter = require('./../modules/user/routes/user.route');
const authenticate = require('./../middlewares/authenticate');
const userRoute = require('./../controllers/user.route');
// module.exports = function (abcd) {
const router = require('express').Router();

router.use('/auth', require('./../controllers/auth.route'));
router.use('/user', authenticate, userRoute);
router.use('/comment', authenticate, userRoute);
router.use('/notification', authenticate, userRoute);
router.use('/user', authenticate, userRoute);
router.use('/user', authenticate, userRoute);

module.exports = router;
// }