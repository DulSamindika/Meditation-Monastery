import React from "react";

export default function MWelcomeBanner() {
  return (
    <>
      <div className="main_container">
        <div className="welcome_banner">
          {/* left side of the welcome banner */}
          <div className="left">
            <div className="content">
              <div className="hero-header">
                <h1 className="part1">Booking Your </h1>
                <h1 className="part2">Meditation & Yoga Sessions </h1>
                <h1 className="part3">Today</h1>
              </div>
              <div className="description">
                <span>
                  Rekindle your inner calm and immerse yourself in the <br></br>
                  art of mindfulness at the Meditation Monastery. A sanctuary
                  where peace blossoms and the journey to<br></br>
                  self-discovery begins.
                </span>
              </div>
            </div>
            <div className="action">
              <button className="explore-button">Explore</button>
            </div>
          </div>

          {/* right side of the welcome banner */}
          <div className="right">
            <div className="image1">
              <img alt="image1" />
            </div>
            <div className="image2">
              <img alt="image2" />
            </div>
            <div className="image3">
              <img alt="image3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
