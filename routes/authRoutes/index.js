const router = require('express').Router();
const { signUp, getUser, signIn } = require('../../controllers/authController');
const { requireSignIn, requireAuth } = require('../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
router.get('/current',  requireAuth, getUser);
router.post('/signIn', requireSignIn, signIn);

module.exports = router;