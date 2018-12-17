const { ExtractJwt } = require("passport-jwt");
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const User = require("../tagRoutes/user");
const jwtOptions ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret212312"
};
const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub)
    .select("-password")
    .then(user=>{
        if(user){
            done(null,user);
        }else{
            done(null,false);
        }
        })
        .catch(err=>
            done(err,false)
        )
    });

    const protected = passport.authenticate("jwt", { session: false });

    module.exports = { jwtStrategy, protected };
    