const {updateUser} = require("../../../controllers/userController");
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const {
  getUserByEmail,
} = require('../../../controllers/userController');

const router = require('express').Router();

// /api/user/emails
router.get('/emails', getUserByEmail);
router.put('/', requireAuth, updateUser);

module.exports = router;