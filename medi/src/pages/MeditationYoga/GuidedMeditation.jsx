import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GuidedMeditation.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function GuidedMeditation() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/videos/meditation/"
        );
        const sortedVideos = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setVideos(sortedVideos);
        setSelectedVideo(sortedVideos[0]); // Default to the first video
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="guided-meditation">
      <div className="navbar">
        <NavBar />
      </div>
      <header className="head">
        <p className="tagline">Explore Our</p>
        <h1 className="title">Guided Meditation Sessions</h1>
        <p className="desc">Find your peace, one breath at a time.</p>
      </header>

      {selectedVideo && (
        <section className="featured-video-section">
          <div className="featured-video-container">
            <video
              className="featured-video"
              src={`http://localhost:5000${selectedVideo.filePath}`}
              controls
            />
            <div className="video-details">
              <h2>{selectedVideo.title}</h2>
              <p>
                <strong>Speakers:</strong> {selectedVideo.speaker}
              </p>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </section>
      )}

      <h2 className="grid-title">Featured Meditation Sessions</h2>
      <div className="video-grid">
        {videos
          .filter((video) => video._id !== selectedVideo?._id)
          .map((video) => (
            <div
              className="video-card"
              key={video._id}
              onClick={() => setSelectedVideo(video)}
            >
              <video
                className="grid-video"
                src={`http://localhost:5000${video.filePath}`}
                controls
              />
              <div className="grid-details">
                <h3>{video.title}</h3>
                <p>{video.duration} minutes</p>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
