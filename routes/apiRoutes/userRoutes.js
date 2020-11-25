const {
  getUserByUserIdAPI,
  getAllUsersAPI,
  insertUserAPI,
  updateUserAPI,
  deleteUserAPI,
} = require("../../controllers/usersController");

const authMiddleWare = require("../../middlewares/authorizationMiddleware");

const router = require("express").Router();

router.use(authMiddleWare);

/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Gets list of **All Users** **REQUIRES ADMIN PREVILEGE**
 *    summary: Get list of all users. **REQUIRES ADMIN PREVILEGE**
 *    tags:
 *      - Users
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type:string
 *        required: true
 *    responses:
 *      200:
 *        description: Status Ok
 *      403:
 *        description: admin previlege is required
 *
 *  post:
 *    description: Create a new *USER*. **REQUIRES ADMIN PREVILEGE**
 *    summary: Create a new USER. **REQUIRES ADMIN PREVILEGE**
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    tags:
 *      - Users
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type:string
 *        required: true
 *      - name: username
 *        in: formData
 *        type: string
 *        required: true
 *        description: username String
 *      - name: password
 *        in: formData
 *        type: string
 *        required: true
 *        format: password
 *        description: User password
 *      - name: firstname
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Firstname
 *      - name: lastname
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Lastname
 *      - name: phone
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Phone number
 *    responses:
 *      200:
 *        description: Status Ok
 *
 * /api/users?projectid={projectid}:
 *  get:
 *    description: Gets All **Users** In a **Project** By Id. **REQUIRES ADMIN PREVILEGE**
 *    summary: Get All Users In a Project By Id. **REQUIRES ADMIN PREVILEGE**
 *    tags:
 *      - Users
 *    parameters:
 *      - in: query
 *        name: projectid
 *        schema:
 *          type:integer
 *      - in: header
 *        name: authorization
 *        schema:
 *          type:string
 *        required: true
 *    responses:
 *      200:
 *        description: Status Ok
 *      403:
 *        description: admin previlege is required
 */
router.route("/").get(getAllUsersAPI).post(insertUserAPI);

/**
 * @swagger
 * /api/users/{userid}:
 *  patch:
 *    description: update user. user can update only his own user. To update other user admin previleges are required.
 *    summary: update USER. ** MAY REQUIRES ADMIN PREVILEGE**
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    tags:
 *      - Users
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type:string
 *        required: true
 *      - in: path
 *        name: userid
 *        schema:
 *          type: integer
 *        required: true
 *        description: user Id
 *      - name: password
 *        in: formData
 *        type: string
 *        required: false
 *        format: password
 *        description: User password
 *      - name: firstname
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Firstname
 *      - name: lastname
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Lastname
 *      - name: phone
 *        in: formData
 *        type: string
 *        required: false
 *        description: User's Phone number
 *    responses:
 *      200:
 *        description: Status Ok
 *  delete:
 *    description: delete user. **REQUIRES ADMIN PREVILEGE**
 *    summary: delete USER. **REQUIRES ADMIN PREVILEGE**
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    tags:
 *      - Users
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type:string
 *        required: true
 *      - in: path
 *        name: userid
 *        schema:
 *          type: integer
 *        required: true
 *        description: user Id
 *    responses:
 *      200:
 *        description: Status Ok
 *      403:
 *        description: admin previlege is required
 */
router.route("/:userid")
.get(getUserByUserIdAPI)
.patch(updateUserAPI)
.delete(deleteUserAPI);

module.exports = router;
