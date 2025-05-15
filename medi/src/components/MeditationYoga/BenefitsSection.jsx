import React from "react";
import "./BenefitsSection.css"; // Import the CSS file for styling

export default function BenefitsSection() {
  return (
    <>
      <div className="benefits-section-container">
        <div className="benefits-section">
          <div className="text-header">
            <div className="heading">
              <h2>Discover the Transformative Power of Yoga and Meditation</h2>
            </div>
          </div>
          <div className="benefits-container">
            <div className="container">
              <div className="left-icon">
                <img alt="Yoga Icon" />
              </div>
              <div className="right-text">
                <div className="title">
                  <span>Unlock Inner Peace</span>
                </div>
                <div className="desc">
                  <span>
                    Yoga and meditation calm your mind, helping you navigate
                    life's challenges with clarity and serenity.
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="left-icon">
                <img alt="Yoga Icon" />
              </div>
              <div className="right-text">
                <div className="title">
                  <span>Boost Mental Clarity</span>
                </div>
                <div className="desc">
                  <span>
                    Feel refreshed and focused with practices that enhance
                    memory, creativity, and decision-making.
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="left-icon">
                <img alt="Yoga Icon" />
              </div>
              <div className="right-text">
                <div className="title">
                  <span>Relieve Stress Naturally</span>
                </div>
                <div className="desc">
                  <span>
                    Let go of tension and embrace tranquility through mindful
                    breathing and movement.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
