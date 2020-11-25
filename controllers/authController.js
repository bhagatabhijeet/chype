const jwt = require("jsonwebtoken");

const tokenForUser = (id) => {
  return jwt.sign(
    {
      sub: id,
      iat: new Date().getTime(),
    },
    process.env.JWT_SECRET
  );
};

module.exports = {
  signInApi: (req, res) => {
    res.json({
      token: tokenForUser(req.user.id),
      isadmin: req.user.isadmin,
      id:req.user.id,
      username:req.user.username
    });
  },
};
