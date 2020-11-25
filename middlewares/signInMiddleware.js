const passport = require('passport');

//in order to tell passport that we not using cookies
// we need to tell that session is false
const signInMiddleware = passport.authenticate('local', { session: false });

module.exports = signInMiddleware;
