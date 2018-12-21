const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  likes:String,
  dislikes:String,
  country: String,
  region: String,
  city: String,
  language: Array,
  tag: {
    type: Array,
    required: true
  },
  latStart: Number,
  lngStart: Number,
  latEnd: Number,
  lngEnd: Number,
  zoom: Number,
  description:String,
  comments:Array,

  createdOn:{
    type:Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Tag", Tag);
