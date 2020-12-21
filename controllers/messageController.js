const { Room, Message,User } = require("../models/index");
const axios = require("axios");

module.exports = {
  createMessage: async (req, res) => {
    try {
      let { message, room } = req.body;
      const newMessage = await new Message({
        text: message,
        userId: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
      }).save();
      const currentRoom = await Room.findById(room._id);
      currentRoom.messages.push(newMessage._id);
      await currentRoom.save();
      const activeRoom = await Room.findById(room._id).populate("messages");
      res.json(activeRoom);
    } catch (error) {
      res.json({ error: "Encountered error" });
    }
  },
  translateMessage: async (message, language) => {
    // const {message, language} = req.body;
    try {
      const apiRes = await axios.get(
        `https://translation.googleapis.com/language/translate/v2?target=${language}&q=${encodeURIComponent(
          message
        )}&key=${process.env.REACT_APP_API_KEY}`
      );
      const translation = apiRes.data.data.translations[0].translatedText;
      const newMessage = { originalMessage: message };
      newMessage.translatedMessage = translation;
      newMessage.originLanguage =
        apiRes.data.data.translations[0].detectedSourceLanguage;
      newMessage.targetLanguage = language;
      // return res.json(newMessage);
      return newMessage;
    } catch (error) {
      throw error;
    }
  },
  deleteMessage: async (data, cb) => {
    try {
      const currentRoom = await Room.findById(data.roomId);
      currentRoom.messages.pull(data.message);
      await currentRoom.save();
      const activeRoom = await Room.findById(data.roomId).populate("messages");
      cb(activeRoom);
    } catch (error) {
      throw error;
    }
  },
  getMessages: async(req,res) =>{
      const { userId } = req.params;
      const {from} = req.query;
    try {
      let messages = await User.findById(userId).select("messages");
      // currentRoom.messages.pull(data.message);
      // await currentRoom.save();
      // const activeRoom = await Room.findById(data.roomId).populate("messages");
      // cb(activeRoom);
      messages = messages._doc.messages.toObject();
      messages = messages.filter(m=>(m.from===from && m.to === userId) || (m.to===from && m.from === userId) );
      messages = messages.slice(messages.length - 50);
      return res.status(200).json(messages);   
    } catch (error) {
      throw error;
    }
  },

  storeMessage: async (fromId, toId, messagePayload) => {
    try {
      const updFromUser = await User.findByIdAndUpdate(fromId, {
        $push: {
          messages: {
            from: fromId,
            to: toId,
            message: messagePayload.message,
            translatedMessage: messagePayload.translatedMessage,
          },
        },
      }).exec();

      const updToUser = await User.findByIdAndUpdate(toId, {
        $push: {
          messages: {
            from: fromId,
            to: toId,
            message: messagePayload.message,
            translatedMessage: messagePayload.translatedMessage,
          },
        },
      }).exec();
    } catch (err) {
      console.log(err);
    }
  },
};
