import React from "react";
import axios from "axios";
import "./GuidedMeditation.css";
import { useState, useEffect } from "react";

export default function GuidedMeditation() {
  //store videos in state
  const [videos, setVideos] = useState([]);

  // Fetch videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/videos");
      console.log(response.data); // Check the fetched data
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/videos/${id}");
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.log("Error deleting video:", error);
    }
  };

  return (
    <div className="guided-meditation">
      <div className="main-container">
        {/*main-header-container*/}
        <div className="main-header-container">
          <div className="tagline-wrapper">
            <div className="tagline">
              <span>Explore our</span>
            </div>
          </div>
          <div className="header-content">
            <div className="title">
              <span className="title-text">Guided Meditation Sessions</span>
            </div>
            <div className="sub-title">
              <span className="sub-title-text">
                Find your peace, one breath at a time.
              </span>
            </div>
          </div>
        </div>

        <h2>GuidedMeditation</h2>
        <h2>Uploaded videos</h2>
        <ul>
          {videos.map((video) => (
            <li key={video._id}>
              <video controls width="200" height="300">
                <source
                  src={`http://localhost:5000${video.filePath}`}
                  type="video/mp4"
                />
              </video>
              <p>{video.title}</p>
              <p>{video.description}</p>
              <p>{video.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
