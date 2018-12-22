const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Comment = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  replyTo:[{
      type:ObjectId,
      ref:"User"
  }],
  username:{
      type:String,
      required:true
  },
  createdOn:{
    type:Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Comment", Comment);
