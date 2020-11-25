const findAllUsers = "SELECT id, username,firstname,lastname,phone,isadmin FROM user;";

const findAllUsersInProject =
  "SELECT u.id, u.username,u.firstname,u.lastname,u.phone FROM user u INNER JOIN projectusers p ON u.id=p.user_id  WHERE project_id = ?;";

const findUserByIdQuery = "SELECT id, username,isadmin FROM user WHERE id = ?;";
const findUserAllDetailsByIdQuery =
  "SELECT id, username,password,firstname,lastname,phone FROM user WHERE id =?;";

const findUserByUsername =
  "SELECT id, username, password,isadmin FROM user WHERE username = ?;";
  
const insertUserQuery =
  "INSERT INTO user (username, password,firstname,lastname,phone) VALUES (?, ?, ?, ?, ?);";
// Only password, firstname, lastname and phone can be updated
const updateUserQuery =
  "UPDATE user set password=?,firstname=?,lastname=?,phone=? WHERE id = ?;";
const deleteUserByIdQuery = "DELETE FROM user WHERE ID = ?;";

module.exports = {
  findAllUsers,
  findAllUsersInProject,
  findUserByIdQuery,
  findUserAllDetailsByIdQuery,
  findUserByUsername,
  insertUserQuery,
  updateUserQuery,
  deleteUserByIdQuery,
};
