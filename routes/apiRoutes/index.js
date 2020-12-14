const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
const roomRoutes = require('./roomRoutes');
const { requireAuth } = require("../../middlewares/authMiddlewares");
const { getUser } = require("../../controllers/authController");


router.use('/user', userRoutes);
router.get("/getuser", requireAuth, getUser);
router.use("/room", roomRoutes);
router.use("/message", messageRoutes);

module.exports = router;

