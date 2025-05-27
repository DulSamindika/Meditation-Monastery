import React from "react";
import "./MeditationYogaHome.css";
import MWelcomeBanner from "../../components/MeditationYoga/WelcomeBanner";
import BenefitsSection from "../../components/MeditationYoga/BenefitsSection";
import SessionsSection from "../../components/MeditationYoga/SessionsSection";
import EventsSection from "../../components/MeditationYoga/EventsSection";

function MeditationYogaHome() {
  return (
    <>
      <header>Navbar should place here</header>
      <MWelcomeBanner />
      <BenefitsSection />
      <SessionsSection />
      <EventsSection />
      <div>
        <p>
          Explore our yoga and meditation sessions for a peaceful mind and body.
        </p>
      </div>
    </>
  );
}

export default MeditationYogaHome;
