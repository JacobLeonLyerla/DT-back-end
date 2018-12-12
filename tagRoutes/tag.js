const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
  createdOn:{
    type:Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Tag", Tag);
