const router = require('express').Router();

const {translateMessage} = require('./../../../controllers/messageController');
const {createMessage} = require('./../../../controllers/messageController');

router.post('/message', createMessage);
router.post('/message/translate', translateMessage);

module.exports = router;
