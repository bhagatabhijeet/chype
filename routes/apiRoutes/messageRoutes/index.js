const router = require('express').Router();
const {translateMessage} = require('./../../../controllers/messageController');
const {createMessage} = require('./../../../controllers/messageController');

router.post('/', createMessage);
router.post('/translate', translateMessage);

module.exports = router;
