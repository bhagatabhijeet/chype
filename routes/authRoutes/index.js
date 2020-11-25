const router = require('express')
  .Router();

const {
  signInApi,
  signUpApi,
} = require('../../controllers/authController');

// *** auth middleware prepended to everything
const signInMiddleware = require('../../middlewares/signInMiddleware');


/**
 * @swagger 
 * /auth/signin:
 *  post:
 *    description: signin to *IssUse*
 *    summary: user signin
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    tags:
 *      - Auth
 *    parameters:
 *      - name: username
 *        in: formData        
 *        type: string
 *      - name: password
 *        in: formData        
 *        type: string
 *        format: password
 *    responses:
 *      200:
 *        description: authentication token      
 */
router.post('/signin', signInMiddleware, signInApi);

module.exports = router;
