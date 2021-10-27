const mongoose = require("mongoose");

const Picture = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },

  tag: {
    type: Array,
  },

  country: String,

  region: String,

  city: String,

  lat: Number,

  lng: Number,

  priority: Number,

  createdOn: {
    type: Date,

    default: Date.now,
  },
});

module.exports = mongoose.model("Picture", Picture);
