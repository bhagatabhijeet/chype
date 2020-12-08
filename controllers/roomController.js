const { Room, User } = require('../models/index');

module.exports = {
    createRoom: async (req, res) => {
        const {roomName, userId} = req.body;
        try {
            const newRoom = await new Room({text: roomName, creator: userId}).save();
            res.json({newRoom});
        } catch (error) {
            throw error;
        }
    },
    deleteRoomById: async (roomId, userId, cb) => {
        try {
            const roomDelete = await Room.findById(roomId);
            if (userId != roomDelete.creator) {
                cb("Error");
            } else {
                const deletedRoom = await Room.findByIdAndDelete(roomId);
                const rooms = await Room.find().populate("messages");
                if (!rooms) {
                    cb("Error");
                }
                cb(rooms);
            }
        } catch (error) {
            throw error;
        }
    },
    getAllRooms: async (cb) => {
        try {
            const rooms = await Room.find().populate("messages");
            if (!rooms) {
                cb("Error");
            }
            cb(rooms);
        } catch (error) {
            throw error;
        }
    },
    getActiveRoom: async (data, cb) => {
        try {
            const activeRoom = await Room.findById(data.roomId).populate("messages");
            const userName = data.user.firstName.concat(" ", data.user.lastName);
            activeRoom.users.push(userName);
            await activeRoom.save();
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    },
    getActiveRoomAfterDelete: async (data, cb) => {
        try {
            const activeRoom = await Room.findById(data.room._id).populate("messages");
            const userName = data.user.firstName.concat(" ", data.user.lastName);
            activeRoom.users.pull(userName);
            await activeRoom.save();
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    },
};
