// const UserRouter = require('./../modules/user/routes/user.route');
const authenticate = require('./../middlewares/authenticate');
const userRoute = require('./../controllers/user.route');
const authRoute = require('./../controllers/auth.route');
// console.log('auth router >>', authRoute);
// module.exports = function (abcd) {
const router = require('express').Router();
console.log('inside api file')
router.use('/auth', authRoute);
router.use('/user', authenticate, userRoute);
router.use('/comment', authenticate, userRoute);
router.use('/notification', authenticate, userRoute);
router.use('/user', authenticate, userRoute);
router.use('/user', authenticate, userRoute);

module.exports = router;
// }