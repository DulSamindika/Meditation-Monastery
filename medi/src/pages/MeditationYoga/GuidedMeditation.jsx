import React from "react";
import axios from "axios";
import "./GuidedMeditation.css";
import { useState, useEffect } from "react";
import speakerimg from "../../images/speakerimg.jpg"; // Import the speaker image

export default function GuidedMeditation() {
  //store videos in state
  const [videos, setVideos] = useState([]);
  // store the selected video in state
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the selected video

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
      await axios.delete(`http://localhost:5000/api/videos/${id}`);

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

        {/* Display the selected video */}
        {selectedVideo && (
          <div className="selected-video-container">
            <div className="selected-video-box">
              <video
                className="selected-video"
                controls
                width="600"
                height="400"
              >
                <source
                  src={`http://localhost:5000${selectedVideo.filePath}`}
                  type="video/mp4"
                />
              </video>
              <div className="frame">
                <div className="frame-tag">
                  <div className="frame-tag-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M2 4.50004V13.8334C2 14.187 2.14048 14.5261 2.39052 14.7762C2.64057 15.0262 2.97971 15.1667 3.33333 15.1667H12.6667C13.0203 15.1667 13.3594 15.0262 13.6095 14.7762C13.8595 14.5261 14 14.187 14 13.8334V4.50004C14 4.14642 13.8595 3.80728 13.6095 3.55723C13.3594 3.30718 13.0203 3.16671 12.6667 3.16671H11.3333V1.83337H10V3.16671H6V1.83337H4.66667V3.16671H3.33333C2.97971 3.16671 2.64057 3.30718 2.39052 3.55723C2.14048 3.80728 2 4.14642 2 4.50004ZM12.6667 13.8334H3.33333V5.83337H12.6667V13.8334Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="date">
                    <p>{selectedVideo.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="selected-video-details">
              <div className="details-container">
                <div className="heading">
                  <p className="video-title">{selectedVideo.title}</p>
                </div>
                <div className="speakers">
                  <span className="spearker-text">
                    speaker : Kithalelle Shantharathana Thero
                  </span>
                  <img
                    className="speakerimg"
                    src={speakerimg}
                    alt="speakerimg"
                  />
                </div>
                <div className="details-box">
                  <span className="details">Details</span>
                  <p className="video-description">
                    {selectedVideo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <h2>Sub section</h2>
        <div className="sub-cards-container">
          <div className="sub-card-heading">
            <h3>Featured Guided Meditation sessions</h3>
          </div>
          <div className="content-videos">
            <div className="row">
              <ul className="video-card">
                {videos.map((video) => (
                  <li key={video._id} onClick={() => setSelectedVideo(video)}>
                    <video
                      className="sub-video"
                      controls
                      width="200"
                      height="150"
                    >
                      <source
                        src={`http://localhost:5000${video.filePath}`}
                        type="video/mp4"
                      />
                    </video>
                    <div className="details-box">
                      <div className="duration">
                        <div className="duration-item">
                          <div className="duration-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M12 2.80762C6.486 2.80762 2 7.29362 2 12.8076C2 18.3216 6.486 22.8076 12 22.8076C17.514 22.8076 22 18.3216 22 12.8076C22 7.29362 17.514 2.80762 12 2.80762ZM12 20.8076C7.589 20.8076 4 17.2186 4 12.8076C4 8.39662 7.589 4.80762 12 4.80762C16.411 4.80762 20 8.39662 20 12.8076C20 17.2186 16.411 20.8076 12 20.8076Z"
                                fill="black"
                              />
                              <path
                                d="M13 7.80762H11V13.2216L14.293 16.5146L15.707 15.1006L13 12.3936V7.80762Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="duration-time">
                            <span>45 minutes</span>
                          </div>
                        </div>
                      </div>
                      <div className="description-box">
                        <div className="description-heading">
                          <p>{video.title}</p>
                        </div>
                        <div className="description-text">
                          <p>{video.description}</p>
                        </div>
                        <div className="description-speakers">
                          <span className="description-speakers-text">
                            speakers
                          </span>
                          <img
                            className="description-speakers-img"
                            src={speakerimg}
                            alt="speakerimg"
                          />
                        </div>
                        <div className="description-date">
                          <p>{video.date}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* View More Button */}
          <div className="heading-action">
            <button className="heading-action-btn">
              <span className="heading-action-btn-text">View More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
