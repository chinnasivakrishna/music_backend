const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required:true
  },
  type:{
    type: String,
    required: true
  },
  isFavourate:{
    type: Boolean,
    default: false
  }
});
const Songs = mongoose.model("Songs", SongSchema);
module.exports = {Songs}