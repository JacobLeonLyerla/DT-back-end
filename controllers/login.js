const jwt = require("jsonwebtoken");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const makeToken = user => {
  const payload = {
    sub: user._id,
    user: user.username,
    email: user.email,
    membership: user.membership
  };
  const options = { expiresIn: "2h" };
  return jwt.sign(payload, process.env.SECRETKEY, options);
};
