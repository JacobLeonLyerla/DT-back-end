const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      tag: {
        type: Array,
        required: true,
            },
    latStart:Number,
    lngStart:Number,
    latEnd:Number,
    lngEnd:Number,
    zoom:Number,
});

module.exports = mongoose.model("Tag", Tag);
