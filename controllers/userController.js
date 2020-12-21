const { User } = require("../models/index");

const getUserByEmail = async (req, res) => {
  try {
    const userEmail = await User.findOne({ email: req.query.email });
    return res.status(200).json(userEmail);
  } catch (e) {
    return res.status(403).json({ e });
  }
};

async function setSocketId(userId,socketId){
  await User.findByIdAndUpdate(userId, {socketId});
}

async function getSocketId(userId){
  const soc=await User.findById(userId).select("socketId -_id").exec();
  return soc;
}

const updateUser = async (req, res) => {
  try {
    const { body, user } = req;
    await User.findByIdAndUpdate(user.id, body);
    // await User.findByIdAndUpdate(user.id, { socketId: body.socketId });
    const updatedUser = await User.findById(user.id);
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

// Util funtion to get friends Array
async function getFriendsArray(id){
  const friends = await User.findById(id).select("friends").exec();
  return friends._doc.friends.toObject();
}

//Function to be used inside getFriends route method
async function getFriendsForUser(id){
    // const friends = await User.findById(id).select("friends").exec();
    const friends = await getFriendsArray(id);
    // const friendIdsArray = friends._doc.friends.toObject()//friends._doc.friends;
    const friendDetailsArray = await User.find().where('_id').in(friends).exec();
    return friendDetailsArray;
}

//Here friends mean users with whom you have already had a chat
const getFriends = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const friendDetailsArray=await getFriendsForUser(id);
    return res.status(200).json(friendDetailsArray);
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
    },"-password",{lean:true});
    if (typeof filterme !== undefined) {
      if (filterme.toLowerCase() === "true") {
        users = users.filter((u) => u._id.toString() !== req.user.id);
      }
    }
    // Check if user is already in friend list and update the users list before sending the response
    // const friendDetailsArray=await getFriendsForUser(req.user.id);
    const friends = await getFriendsArray(req.user.id);
    // users= users.toObject();
    // users= users.map(u=>u._doc.toObject({ getters: true }));
    users =users.map(u=>({...u,isFriend:friends.includes(u._id.toString())?true:false }));

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

const addFriend = async(req,res) =>{
  const { id } = req.params;
  const {friendId} = req.body;
  try{

    const updtUser = await User.findByIdAndUpdate(id,{$addToSet:{friends:friendId}}).exec();
    const friends= await getFriendsForUser(id);
    // console.log(done);
    return res.status(200).json(friends);    

  }
  catch(err){
    console.log(err);
  }

}

const removeFriend = async(req,res) =>{
  const { id } = req.params;
  const {friendId} = req.body;
  try{

    const updtUser = await User.findByIdAndUpdate(id,{$pull:{friends:friendId}}).exec();
    const friends= await getFriendsForUser(id);
    // console.log(done);
    return res.status(200).json(friends);    

  }
  catch(err){
    console.log(err);
  }

}

module.exports = {
  getAllOrSearchUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  getFriends,
  setSocketId,
  getSocketId,
  addFriend,
  removeFriend
};
