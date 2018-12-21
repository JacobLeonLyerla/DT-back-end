
// place for user model
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 11;
const ObjectId = mongoose.Schema.Types.ObjectId;

//User Model Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  post: [
    {
      type: ObjectId,
      ref: "Tag"
    }
  ],
  favorites:[
    {
      type: ObjectId,
      ref: "Tag"
    }
  ],
  comments:[
    {
      type:String,
    }
  ],
  notifications:Array,
  membership: {
    type: Boolean,
    default: false
  },
  subscription: String
});
userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});
userSchema.methods.checkPassword = function(plainTextPW, callback) {
  return bcrypt.compare(plainTextPW, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }
    callback(null, isValid);
  });
};
userSchema.methods.addLetter = function(letter_id) {
  this.letters.push(letter_id);
};
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
