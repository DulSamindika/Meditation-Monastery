import React from "react";
import "./SessionsSection.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function SessionsSection() {
  const categoriesColumn1 = [
    {
      heading: "Guided Meditation Sessions",
      text: "Connect with tranquility through our expert-led meditation practices.",
      url: "/guided-meditation",
    },
    {
      heading: "Guided Yoga Sessions",
      text: "Stretch, strengthen, and balance with tailored yoga sessions.",
      url: "/yoga-sessions",
    },
    {
      heading: "Chanting & Mantra Therapy",
      text: "Experience healing vibrations through the power of sacred chants.",
      url: "/chanting-mantra",
    },
  ];

  const categoriesColumn2 = [
    {
      heading: "Personalized Wellness Consultations",
      text: "Tailor your experience to your unique needs.",
      url: "/personalized-consultation",
    },
  ];

  return (
    <div className="sessions-section-container">
      <div className="section-title">
        <div className="tagline-wrapper">
          <span className="tagline-text">Uncover Serenity</span>
        </div>
        <div className="content">
          <span className="heading">Explore Peace Through Our Practices</span>
          <span className="text">
            Unwind, Rejuvenate, and Thrive with Timeless Wisdom.
          </span>
        </div>
      </div>

      <div className="sessions-column1">
        <div className="row">
          {categoriesColumn1.map((category, index) => (
            <div key={index} className="category">
              <div className="content">
                <div className="content-heading">{category.heading}</div>
                <div className="text">{category.text}</div>
                <div className="action">
                  <a href={category.url} className="btn">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sessions-column2">
        <div className="row">
          {categoriesColumn2.map((category, index) => (
            <div key={index} className="category">
              <div className="content">
                <div className="content-heading">{category.heading}</div>
                <div className="text">{category.text}</div>
                <div className="action">
                  <a href={category.url} className="btn">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
