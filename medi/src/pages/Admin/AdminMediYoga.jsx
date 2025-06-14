import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminMediVideos.css";

export default function AdminMediVideos() {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    title: "",
    duration: "",
    description: "",
    date: "",
    speaker: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/videos/meditation"
      );
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts
  }, []);

  // Handle File Change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle Upload
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("title", newVideo.title);
    formData.append("duration", newVideo.duration);
    formData.append("description", newVideo.description);
    formData.append("date", newVideo.date);
    formData.append("speaker", newVideo.speaker);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/videos/meditation/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setVideos([...videos, response.data]);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/videos/meditation/${id}`);
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="admin-form-container">
      <h1>Manage Meditation Videos</h1>
      <form onSubmit={handleUpload}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Title"
          value={newVideo.title}
          onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration"
          value={newVideo.duration}
          onChange={(e) =>
            setNewVideo({ ...newVideo, duration: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newVideo.description}
          onChange={(e) =>
            setNewVideo({ ...newVideo, description: e.target.value })
          }
        />
        <input
          type="date"
          value={newVideo.date}
          onChange={(e) => setNewVideo({ ...newVideo, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Speaker"
          value={newVideo.speaker}
          onChange={(e) =>
            setNewVideo({ ...newVideo, speaker: e.target.value })
          }
        />
        <button type="submit">Upload</button>
      </form>

      <h2>Uploaded Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <video controls>
              <source
                src={`http://localhost:5000${video.filePath}`}
                type="video/mp4"
              />
            </video>
            <p>{video.title}</p>
            <p>{video.duration}</p>
            <p>{video.description}</p>
            <p>{video.date}</p>
            <p>{video.speaker}</p>
            <button onClick={() => handleDelete(video._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
