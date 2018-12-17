const jwt = require("jsonwebtoken");
const User = require("../tagRoutes/user");
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

const localStrategy = new LocalStrategy((username,password,done)=>{
    User.findOne({username},(err,user)=>{
        if(err)return done(err);
        if(!user) return done(null,false);

        user.checkPassword(password,(err,isMatch)=>{
            if(err) return done(err);
            if(isMatch){
                const{_id,  username, email, membership} =user;
                return done(null, {_id, username, email, membership})
            }
            return done(null,false);
        })
    })
})
const authenticate = passport.authenticate("local",{session:false});

const login = (req,res)=>{
    res.json({roken:makeToken(req.user), user:req.user});
}

module.exports = {login, authenticate, localStrategy}