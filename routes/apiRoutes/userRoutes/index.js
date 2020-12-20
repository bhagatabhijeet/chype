const { requireAuth } = require('../../../middlewares/authMiddlewares');
const {
  getAllOrSearchUsers,  
  getUserByEmail,
  getUserById,
  updateUser,
  getFriends,
  addFriend
} = require('../../../controllers/userController');

const router = require('express').Router();

// /api/user
// Gets All User optional query param ?filterme=true. filterme get all users except the current user
// Search User use query ?q="your search term". 'q' will search for all users wher either firstName, lastName or email
// has match
router.route("/")
.get(requireAuth,getAllOrSearchUsers)


//Get and update a single user using id
router.route("/:id")
.get(requireAuth,getUserById)
.patch(requireAuth, updateUser);

//Get Friends
router.route("/:id/friends")
.get(requireAuth,getFriends)
.post(requireAuth,addFriend)

module.exports = router;