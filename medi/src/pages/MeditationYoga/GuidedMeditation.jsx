import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GuidedMeditation.css";
import speakerimg from "../../images/speakerimg.jpg";
import NavBar from "../../components/NavBar"; // Import NavBar component
import Footer from "../../components/Footer"; // Import Footer component

export default function GuidedMeditation() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Fetch videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/videos");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handlePlayVideo = (videoRef) => {
    if (currentVideo && currentVideo !== videoRef) {
      currentVideo.pause();
    }
    videoRef.play();
    setCurrentVideo(videoRef);
  };

  return (
    <div className="guided-meditation-container">
      <NavBar />
      <div className="guided-meditation">
        <div className="main-header">
          <h1>Guided Meditation Sessions</h1>
          <p>Find your peace, one breath at a time.</p>
        </div>
        <div className="video-list">
          {videos.map((video) => (
            <div className="video-card" key={video._id}>
              <video
                className="video-player"
                src={`http://localhost:5000${video.filePath}`}
                controls
                onPlay={(e) => handlePlayVideo(e.target)}
              />
              <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <div className="speaker-info">
                  <img src={speakerimg} alt="Speaker" className="speaker-img" />
                  <p>Kithalelle Shantharathana Thero</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
