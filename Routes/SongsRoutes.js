const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const {Songs} = require("../Model/Songs")
const app = express();
app.use(bodyParser.json())
const song = express.Router();


song.route("/add").post(async (req, res) => {
    try {
      console.log(req.body.songData)
      const songData = req.body.songData;
      console.log(songData)
      const song = new Songs(songData)
      await song.save();
      res.json("Success")
      
    } catch (error) {
      res.json({ message: error })
    }
  });

  song.route("/fetch").post(async (req, res) => {
    try {
        const {Email} = req.body;
        console.log(Email)
      const song = await Songs.find({Email});
      console.log(song)
      res.status(200).json(song);
      
    } catch (error) {
      res.json({ message: error })
    }
  });

  song.route("/favourate").post(async (req, res) => {
    try {
        const {id} = req.body;
        console.log(id)
      const song = await Songs.findById(id);
      if (song) {
        song.isFavourate = true;
        await song.save(); // Save the updated song
        res.status(200).json(song);
    } else {
        res.status(404).json({ message: "Song not found" });
    }
      
    } catch (error) {
      res.json({ message: error })
    }
  });

  song.route("/favourate_fetch").post(async (req, res) => {
    try {
        const {Email} = req.body;
        console.log(Email)
      const song = await Songs.find({Email, isFavourate:true});
      console.log(song)
      
        res.status(200).json(song);
   
      
    } catch (error) {
      res.json({ message: error })
    }
  });

  song.route("/remove_favourate").post(async (req, res) => {
    try {
        const {id} = req.body;
        console.log(id)
      const song = await Songs.findById(id);
      if (song) {
        song.isFavourate = false;
        await song.save(); // Save the updated song
        res.status(200).json(song);
    } else {
        res.status(404).json({ message: "Song not found" });
    }
      
    } catch (error) {
      res.json({ message: error })
    }
  });

  module.exports = song;
