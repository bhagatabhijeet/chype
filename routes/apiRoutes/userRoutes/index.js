const {updateUser} = require("../../../controllers/userController");
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const {
  getAllUserEmails,
} = require('../../../controllers/userController');

const router = require('express').Router();

// /api/user/emails
router.get('/emails', getAllUserEmails);
router.put('/', requireAuth, updateUser);

module.exports = router;