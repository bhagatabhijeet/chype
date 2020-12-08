const {
    createRoom, deleteRoomById,
    getActiveRoom,
    getActiveRoomAfterDelete,
    getAllRooms
} = require("../../../controllers/roomController");
const {requireAuth} = require("../../../middlewares/authMiddlewares");
const router = require('express').Router();

router.get('/', requireAuth, getAllRooms);
router.get('/active', requireAuth, getActiveRoom);
router.get('/active-after-delete', requireAuth, getActiveRoomAfterDelete);
router.post('/', requireAuth, createRoom);
router.delete('/:id', requireAuth, deleteRoomById);

module.exports = router;
