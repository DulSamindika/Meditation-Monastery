import React from "react";
import "./BenefitsSection.css"; // Import the CSS file for styling
import meditationimg from "./images/icons-meditation.png";
import mentalimg from "./images/icons-mental.png";
import peaceimg from "./images/icons-peace.png";
import relaximg from "./images/icons-relax.png";
import sleepimg from "./images/icons-night.png";
import healthimg from "./images/icons-health.png";
import strengthimg from "./images/icons-strength.png";
import selfawarenessimg from "./images/icons-selfawareness.png";
import holisticimg from "./images/icons-holistic.png";

// Benefits data
const benefits = [
  {
    img: meditationimg,
    title: "Unlock Inner Peace",
    description:
      "Yoga and meditation calm your mind, helping you navigate life's challenges with clarity and serenity.",
  },
  {
    img: mentalimg,
    title: "Boost Mental Clarity",
    description:
      "Feel refreshed and focused with practices that enhance memory, creativity, and decision-making.",
  },
  {
    img: peaceimg,
    title: "Relieve Stress Naturally",
    description:
      "Let go of tension and embrace tranquility through mindful breathing and movement.",
  },
  {
    img: sleepimg,
    title: "Enhance Sleep Quality",
    description:
      "Experience deeper, more restorative sleep with relaxation techniques tailored to unwind the mind.",
  },
  {
    img: healthimg,
    title: "Improve Emotional Well-being",
    description:
      "Reduce stress and anxiety, boost self-esteem, and cultivate positivity in your daily life.",
  },
  {
    img: strengthimg,
    title: "Strengthen Your Body",
    description:
      "Yoga isn’t just about flexibility—build strength, balance, and endurance while nurturing your body.",
  },
  {
    img: selfawarenessimg,
    title: "Discover Self-Awareness",
    description:
      "Connect with your inner self to better understand your goals, passions, and true potential.",
  },
  {
    img: holisticimg,
    title: "Promote Holistic Health",
    description:
      "Align your body, mind, and soul for a complete sense of well-being and vitality.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="benefits-section-container">
      <div className="benefits-section">
        <div className="text-header">
          <h2>Discover the Transformative Power of Yoga and Meditation</h2>
        </div>

        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div className="container" key={index}>
              <div className="left-icon">
                <img src={benefit.img} alt={`${benefit.title} Icon`} />
              </div>
              <div className="right-text">
                <div className="title">
                  <span>{benefit.title}</span>
                </div>
                <div className="desc">
                  <span>{benefit.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
