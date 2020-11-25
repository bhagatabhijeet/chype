const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const {
  comparePassword,
  fetchUserByUsernameFromDb,
  fetchUserByIdFromDb,
} = require("../model/userOrm");
// Done is similar
// takes 2 parameters
// the 1st is an error or an error object
// the 2nd is the user you found or null if you dont find one
const localStrategy = new LocalStrategy(async (username, password, done) => {
  //  Find a user with some given criteria
  //   if an error happened when you tried to find that user
  //   call done like this done(err, null);
  let user;
  try {
    user = await fetchUserByUsernameFromDb(username);
  } catch (e) {
    return done(e, null);
  }
  //   if you do find a user, check the users credentials
  //   if the users credentials match, call done like this done(null, userWeFound);
  //   What passport will do if we pass a user as the 2nd param to done
  //   on the next request that the middleware applied
  if (user) {
    const doesPasswordMatch = await comparePassword(password, user.password);
    if (doesPasswordMatch) {
      console.log(doesPasswordMatch);
      return done(null, user);
    }
    console.log("happening");
    return done(null, false);
  } else {
    console.log("happening");
    return done(null, false);
  }
  //   if no user was found call done like return done(null, false);
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtToken, done) => {
  console.log(jwtToken);
  // { sub: idOfTheUser, iat: timeThatThisTokenWasCreated }
  let user;

  try {
    user = await fetchUserByIdFromDb(jwtToken.sub);
  } catch (e) {
    return done(e, null);
  }

  if (!user) {
    return done(null, false);
  } else {
    // take the user that is being passed as the 2nd parameter
    // and attach it to req.user on the next request
    return done(null, user);
  }
});

// All of the tokens will be coming in from the header

// Hey passport we have declare a strategy named 'local'
// if we tell you to authenticate using 'local'
// run the localStrategy function that we gave to you
passport.use("local", localStrategy);
// passport.use("local-admin",localAdminStrategy);
passport.use(jwtStrategy);
