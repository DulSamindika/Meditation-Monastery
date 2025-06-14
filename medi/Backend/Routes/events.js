const express = require("express");
const Event = require("../Database/models/events");
const adminAuth = require("../Middleware/adminAuth");

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

// GET /events/:id - Fetch a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event", error: err });
  }
});

// POST /events - Add a new event (Admin only)
router.post("/", adminAuth, async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ message: "Error saving event", error: err });
  }
});

// PUT /events/:id - Update an existing event (Admin only)
router.put("/:id", adminAuth, async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json({ message: "Error updating event", error: err });
  }
});

// DELETE /events/:id - Delete an event (Admin only)
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting event", error: err });
  }
});

module.exports = router;
