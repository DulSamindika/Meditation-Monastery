const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  category: String,
  location: String,
  imageURL: String,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
