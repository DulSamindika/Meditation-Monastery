import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./MeditationYogaHome.css";
import MWelcomeBanner from "../../components/MeditationYoga/WelcomeBanner";
import BenefitsSection from "../../components/MeditationYoga/BenefitsSection";
import SessionsSection from "../../components/MeditationYoga/SessionsSection";
import EventsSection from "../../components/MeditationYoga/EventsSection";

function MeditationYogaHome() {
  return (
    <>
      <NavBar />
      <MWelcomeBanner />
      <BenefitsSection />
      <SessionsSection />
      <EventsSection />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MeditationYogaHome;
