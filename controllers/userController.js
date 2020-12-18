const { User } = require("../models/index");

const getUserByEmail = async (req, res) => {
  try {
    const userEmail = await User.findOne({ email: req.query.email });
    return res.status(200).json(userEmail);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

const updateUser = async (req, res) => {
  try {
    const { body, user } = req;
    // await User.findByIdAndUpdate(user.id, body);
    await User.findByIdAndUpdate(user.id, { socketId: body.socketId });
    const updatedUser = await User.findOne({ email: user.email });
    return res.json(updatedUser);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(id).select("-password");
    return res.status(200).json(user);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

const searchUser = async (req, res) => {
  try {
    const { q, filterme } = req.query;
    let users;

    users = await User.find({
      $or: [
        { firstName: { $regex: q, $options: "i" } },
        { lastName: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
      ],
    });
    if (typeof filterme !== undefined) {
      if (filterme.toLowerCase() === "true") {
        users = users.filter((u) => u.id !== req.user.id);
      }
    }

    return res.json(users);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { filterme } = req.query;
    let users;
    if (filterme) {
      users = await User.find({ _id: { $ne: req.user.id } });
    } else {
      users = await User.find({});
    }

    return res.json(users);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

const getAllOrSearchUsers = async (req, res) => {
  const { q } = req.query;
  if (typeof q === "undefined") {
    getAllUsers(req, res);
  } else {
    if (q.trim() === "") {
      return [];
    } else {
      searchUser(req, res);
    }
  }
};

module.exports = {
  getAllOrSearchUsers,
  getUserByEmail,
  getUserById,
  updateUser,
};
