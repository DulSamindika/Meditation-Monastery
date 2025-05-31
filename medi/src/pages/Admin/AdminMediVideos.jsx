import React, { useState } from "react";
import axios from "axios";
import "./AdminMediVideos.css";

export default function AdminMediVideos() {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  // Handle video upload
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedVideo) {
      alert("Please select a video to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedVideo);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/videos/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Add the uploaded video to the list
      const newVideo = {
        id: Date.now(),
        title: selectedVideo.name,
        url: `http://localhost:5000/api/videos${response.data.filePath}`,
      };

      setUploadedVideos([...uploadedVideos, newVideo]);

      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload video.");
    }
  };

  return (
    <div className="admin-form-container">
      <h1>Admin Video Upload</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="upload-form">
        <label htmlFor="videoInput">Choose a video:</label>
        <input
          type="file"
          id="videoInput"
          accept="video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload Video</button>
      </form>

      {/* Uploaded Videos */}
      <div className="uploaded-videos">
        <h2>Uploaded Videos</h2>
        {uploadedVideos.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          <ul>
            {uploadedVideos.map((video) => (
              <li key={video.id}>
                <video controls className="uploaded-video-player">
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{video.title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
