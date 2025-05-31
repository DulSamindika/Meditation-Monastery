const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload"); // The upload.js you provided earlier

router.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded!" });
  }

  const filePath = `/uploads/videos/${req.file.filename}`;
  res.status(200).send({ message: "Video uploaded successfully!", filePath });
});

module.exports = router;
