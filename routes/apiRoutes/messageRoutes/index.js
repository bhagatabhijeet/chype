const {requireAuth} = require("../../../middlewares/authMiddlewares");
const router = require('express').Router();
const {translateMessage} = require('./../../../controllers/messageController');
const {createMessage} = require('./../../../controllers/messageController');

router.post('/', requireAuth, createMessage);
router.post('/translate', requireAuth, translateMessage);

module.exports = router;
