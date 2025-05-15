import React from "react";
import "./SessionsSection.css";

export default function SessionsSection() {
  return (
    <>
      <div className="sessions-section-container">
        <div className="section-title">
          <div className="tagline-wrapper">Discover</div>
          <div className="content">
            <h2 className="heading">Explore Serenity Through Our Practices</h2>
            <span className="text">
              Unwind, Rejuvenate, and Thrive with Timeless Wisdom.
            </span>
          </div>
        </div>

        <div className="sessions-column1">
          <div className="row">
            {/*category1*/}
            <div className="category1">
              <div className="image"></div>
              <div className="content">
                <div className="content-heading">
                  Guided Meditation Sessions
                </div>
                <div className="text">
                  Connect with tranquility through our expert-led meditation
                  practices.
                </div>
                <div className="action">
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>
            {/*category2*/}
            <div className="category1">
              <div className="image"></div>
              <div className="content">
                <div className="content-heading">Holistic Yoga Classes</div>
                <div className="text">
                  Stretch, strengthen, and balance with tailored yoga sessions.
                </div>
                <div className="action">
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>
            {/*category3*/}
            <div className="category1">
              <div className="image"></div>
              <div className="content">
                <div className="content-heading">Chanting & Mantra Therapy</div>
                <div className="text">
                  Experience the healing vibrations of sacred chants.
                </div>
                <div className="action">
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sessions-column2">
          <div className="row">
            <div className="category1">
              <div className="image"></div>
              <div className="content">
                <div className="content-heading">
                  Personalized Wellness Consultations
                </div>
                <div className="text">
                  Tailor your experience to your unique needs.
                </div>
                <div className="action">
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
