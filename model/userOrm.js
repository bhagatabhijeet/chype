const bcrypt = require("bcryptjs");
const {
  findAllUsers,
  findAllUsersInProject,
  findUserByIdQuery,
  findUserAllDetailsByIdQuery,
  findUserByUsername,
  insertUserQuery,
  updateUserQuery,
  deleteUserByIdQuery,
} = require("./userQueries");
const connection = require("../config/connection");

// Util function to compare user provided password with the actual password
const comparePassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Get User by Username
const fetchUserByUsernameFromDb = async (username) => {
  try {
    const [rows] = await connection.query(findUserByUsername, username);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

// Gets All Users
const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

// Gets All Users in a project
const fetchUsersInProject = async (projectId) => {
  try {
    const [rows] = await connection.query(findAllUsersInProject, projectId);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const fetchUserByIdFromDb = async (userId) => {
  try {
    const [rows] = await connection.query(findUserByIdQuery, userId);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

// Insert User
const insertUserToDb = async (
  username,
  password,
  firstname = null,
  lastname = null,
  phone = null
) => {
  // going to generate some random String to add on to our hashed password once we start hashing it
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const [result] = await connection.query(insertUserQuery, [
      username,
      hashedPassword,
      firstname,
      lastname,
      phone,
    ]);
    const [userResult] = await connection.query(
      findUserByIdQuery,
      result.insertId
    );
    return userResult[0];
  } catch (e) {
    throw new Error(e);
  }
};

// *** Update User
const updateUserInDb = async (password, firstname, lastname, phone, id) => {
  try {
    const [userrow] = await connection.query(findUserAllDetailsByIdQuery, id);
    let hashedPassword;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Ternary to compare if user want to update or retain the old password
    const updatedPassword = password ? hashedPassword : userrow[0].password;
    const updatedFirstname = firstname ? firstname : userrow[0].firstname;
    const updatedLastname = lastname ? lastname : userrow[0].lastname;
    const updatedPhone = phone ? phone : userrow[0].phone;

    const [rows] = await connection.query(updateUserQuery, [
      updatedPassword,
      updatedFirstname,
      updatedLastname,
      updatedPhone,
      id,
    ]);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

//Delete User by Id
const deleteUserByIdFromDb = async (userId) => {
  try {
    const [rows] = await connection.query(findUserByIdQuery, userId);
    await connection.query(deleteUserByIdQuery, userId);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

// A Util function to verify if user is admin
const isAdminUser = async (username) => {
  try {
    const [rows] = await connection.query(findUserByUsername, username);
    return rows[0].isadmin ? true : false;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  comparePassword,
  fetchUsers,
  fetchUsersInProject,
  fetchUserByIdFromDb,
  fetchUserByUsernameFromDb,
  insertUserToDb,
  updateUserInDb,
  deleteUserByIdFromDb,
  isAdminUser,
};
