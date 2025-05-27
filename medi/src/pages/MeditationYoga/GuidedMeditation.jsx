import React from "react";
import "./GuidedMeditation.css"; // Import the CSS file for styling

export default function GuidedMeditation() {
  return (
    <div>
      <h1>Guided Meditation Sessions</h1>
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

        {/*main-videos-container*/}
        <div className="main-videos-container"></div>
      </div>
    </div>
  );
}
