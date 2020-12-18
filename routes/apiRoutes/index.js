const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
const roomRoutes = require('./roomRoutes');
const { requireAuth } = require("../../middlewares/authMiddlewares");
const { getUser } = require("../../controllers/authController");


/**
 * get Single User use - /user/id
 * get All users use - /user optionally you can pass query param ?filterme=true  this will filter out current user
 * serch user use -  user?q="your_search"&filtemer=true
 */
router.use('/user', userRoutes);
router.use("/room", roomRoutes);
router.use("/message", messageRoutes);

module.exports = router;

