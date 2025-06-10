const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload"); // The upload.js you provided earlier
const Video = require("../Database/models/chantingvideo"); // Assuming this is the correct path to your video model

// Create Video
router.post("/chanting/upload", upload.single("video"), async (req, res) => {
  try {
    const { title, duration, description, date, speaker } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No video file uploaded." });
    }

    if (!title || !duration || !description || !date || !speaker) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newVideo = new Video({
      title,
      duration,
      description,
      date,
      speaker,
      filePath: `/uploads/videos/${req.file.filename}`,
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ message: "Failed to upload video." });
  }
});
// Read All Videos
router.get("/chanting/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch videos." });
  }
});

// Update Video
router.put("/chanting/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, duration, description, date, speaker } = req.body;

    const updatedVideo = await Video.findByIdAndUpdate(
      id,
      { title, duration, description, date, speaker },
      { new: true }
    );

    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update video." });
  }
});
// Delete Video
router.delete("/chanting/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    res.status(200).json({ message: "Video deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete video." });
  }
});

module.exports = router;
