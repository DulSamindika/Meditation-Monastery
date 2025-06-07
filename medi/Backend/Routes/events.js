const express = require("express");
const Event = require("../Database/models/events");

const router = express.Router();

// GET /events - Fetch all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err });
  }
});

// POST /events - Add a new event
router.post("/", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ message: "Error saving event", error: err });
  }
});

module.exports = router;
