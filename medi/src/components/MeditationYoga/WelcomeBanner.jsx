import React from "react";
import "./WelcomeBanner.css";
import image1 from "../MeditationYoga/images/image1.jpg";
import image2 from "../MeditationYoga/images/image2.jpg";
import image3 from "../MeditationYoga/images/image3.jpg";

export default function MWelcomeBanner() {
  return (
    <>
      <div className="welcome_banner_container">
        <div className="welcome_banner">
          {/* left side of the welcome banner */}
          <div className="left">
            <div className="content">
              <div className="hero-header">
                <span className="part1">Join Our</span>
                <span className="part2">Meditation & Yoga Sessions</span>
                <span className="part3">Today</span>
                <br></br>
              </div>
              <div className="description">
                <span>
                  Rekindle your inner calm and immerse yourself in the art of
                  mindfulness at the Meditation Monastery. A sanctuary where
                  peace blossoms and the journey to self discovery begins.
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
              <img src={image1} alt="image1" />
            </div>
            <div className="image2">
              <img src={image2} alt="image2" />
            </div>
            <div className="image3">
              <img src={image3} alt="image3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
