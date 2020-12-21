const {requireAuth} = require("../../../middlewares/authMiddlewares");
const router = require('express').Router();
const {translateMessage} = require('./../../../controllers/messageController');
const {createMessage,getMessages} = require('./../../../controllers/messageController');

router.post('/', requireAuth, createMessage);
router.post('/translate', requireAuth, translateMessage);
// Gets All messages  from A To B or B To A user
// *** api/messages/userid?from=otherUserId
router.get("/:userId",requireAuth,getMessages)

module.exports = router;
