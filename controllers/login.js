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

const localstategy = new LocalStrategy((username,password,done)=>{
    User.findOne({username},(err,user)=>{
        if(err)return done(err);
        if(!user) return done(null,false);

        user.checkPassword(password,(err,isMatch)=>{
            if(err) return done(err);
            if(isMatch){
                const{_id,  username email, membership} =user;
                return done(null, {_id, username, email, membership})
            }
            return done(null,false);
        })
    })
})