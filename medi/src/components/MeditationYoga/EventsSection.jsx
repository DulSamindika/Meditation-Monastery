import React, { useState, useEffect } from "react";
import axios from "axios";

import "./EventsSection.css"; // Assuming you have a CSS file for styling

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend
    axios
      .get("http://localhost:5000/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="events-section">
      <div className="heading-part">
        <div className="heading-title">
          <div className="tagline-wrapper">
            <span className="tagline-text">Explore</span>
          </div>
          <div className="heading-content">
            <div className="main-heading">
              <span className="main-heading-text">Upcoming Events</span>
            </div>
            <span className="main-heading-desc">
              Discover tranquility with our upcoming meditation events,
            </span>
          </div>
        </div>
        <div className="heading-action">
          <button className="heading-action-btn">
            <span className="heading-action-btn-text">View All</span>
          </button>
        </div>
      </div>

      <div className="main-container">
        <div className="row">
          {events.map((event, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img
                  className="placeholder-image"
                  alt={event.title}
                  src={event.imageURL || "default-image.png"}
                />
                <div className="date">
                  <div className="day">
                    <span>
                      {new Date(event.date).toLocaleString("en", {
                        weekday: "long",
                      })}
                    </span>
                  </div>
                  <div className="day-num">
                    <span>{new Date(event.date).getDate()}</span>
                  </div>
                  <div className="year">
                    <span>
                      {new Date(event.date).toLocaleString("en", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <div className="content">
                  <div className="event-details">
                    <div className="tag">
                      <span className="text">{event.category}</span>
                    </div>
                  </div>
                  <div className="main-box">
                    <div className="title">
                      <div className="heading">
                        <span>{event.title}</span>
                      </div>
                      <div className="location">
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="desc">
                      <span>{event.description}</span>
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button className="btn">View Event</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
