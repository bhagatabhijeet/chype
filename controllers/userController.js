const { User } = require('../models/index');

module.exports = {
  getUserByEmail: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email });
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateUser: async (req, res) => {
    try {
      const {body, user} = req;
      // await User.findByIdAndUpdate(user.id, body);
      await User.findByIdAndUpdate(user.id, {socketId: body.socketId});
      const updatedUser = await User.findOne({email: user.email});
      return res.json(updatedUser);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};