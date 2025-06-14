import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header.style.backgroundColor = " #013220";
      } else {
        header.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
        style={{ transition: "background-color 0.3s ease" }}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center">
            <h1 className="sitename">MeditationMonastery</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <NavLink to="/accommodation/">
                  <span> Accommodation</span>{" "}
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/meditation-yoga">
                  <span> Meditation & Yoga</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/guided-meditation">
                      <span>Guided Meditation Sessions</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/guided-yoga">
                      <span>Guided Yoga Sessions</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/chanting-mantra">
                      <span>Pirith and Chanting </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
