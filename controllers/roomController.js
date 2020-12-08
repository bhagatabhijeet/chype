const { Room, User } = require('../models/index');

module.exports = {
    createRoom: async (req, res) => {
        const {roomName} = req.body;
        const currentUserID  = req.user.id;
        try {
            const newRoom = await new Room({text: roomName, creator: currentUserID}).save();
            res.json({newRoom});
        } catch (error) {
            res.json({error: "Encountered error"});
        }
    },
    deleteRoomById: async (req, res) => {
        const {roomId} = req.params;
        try {
            const roomDelete = await Room.findById(roomId);
            const currentUserID  = req.user.id;
            if (currentUserID !== roomDelete.creator.toString()) {
                res.json("Error");
            } else {
                const deletedRoom = await Room.findByIdAndDelete(roomId);
                const rooms = await Room.find().populate("messages");
                if (!rooms) {
                    res.json("Error");
                }
                res.json(rooms);
            }
        } catch (error) {
            res.json({error: "Encountered error"});
        }
    },
    getAllRooms: async (req, res) => {
        try {
            const rooms = await Room.find().populate("messages");
            if (!rooms) {
                res("Error");
            }
            res.json(rooms);
        } catch (error) {
            res.json({error: "Encountered error"});
        }
    },
    joinRoomAndGetRoom: async (req, res) => {
        try {
            const activeRoom = await Room.findById(req.params.roomId).populate("messages");
            const userName = req.user.firstName.concat(" ", req.user.lastName);
            activeRoom.users.push(userName);
            await activeRoom.save();
            res.json(activeRoom);
        } catch (error) {
            res.json({error: "Encountered error"});
        }
    },
    leaveRoomAndGetRoom: async (req, res) => {
        try {
            const activeRoom = await Room.findById(req.params.roomId).populate("messages");
            const userName = req.user.firstName.concat(" ", req.user.lastName);
            activeRoom.users.pull(userName);
            await activeRoom.save();
            res.json(activeRoom);
        } catch (error) {
            res.json({error: "Encountered error"});
        }
    },
};