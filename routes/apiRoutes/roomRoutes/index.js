const {
    createRoom, deleteRoomById,
    joinRoomAndGetRoom,
    leaveRoomAndGetRoom,
    getAllRooms
} = require("../../../controllers/roomController");
const {requireAuth} = require("../../../middlewares/authMiddlewares");
const router = require('express').Router();

router.get('/', requireAuth, getAllRooms);
router.get('/join/:roomId', requireAuth, joinRoomAndGetRoom);
router.get('/leave/:roomId', requireAuth, leaveRoomAndGetRoom);
router.post('/', requireAuth, createRoom);
router.delete('/:roomId', requireAuth, deleteRoomById);

module.exports = router;