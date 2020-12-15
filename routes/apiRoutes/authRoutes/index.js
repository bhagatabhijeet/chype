const router = require('express').Router();
const { signUp, getUser, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
router.get('/current',  requireSignIn, getUser);
router.post('/signIn', requireSignIn, signIn);

module.exports = router;