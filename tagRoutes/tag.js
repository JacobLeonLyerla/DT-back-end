const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

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
  locationName:String,
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
  comments:[
    {
      type:ObjectId,
      ref:"Comment"
    }
  ],
  unreadComment:{
    type:Number,
    default:0
  },
  unreadLike:
  {
    type:Number,
    default:0
  },
  markers:Array,
  createdOn:{
    type:Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Tag", Tag);
