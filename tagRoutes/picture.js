const mongoose = require("mongoose");

const Picture = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: String,
  region: String,
  city: String,
  lat: Number,
  lng: Number,
  createdOn:{
    type:Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Picture", Picture);
