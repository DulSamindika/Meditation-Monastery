import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EventsSection.css";
import med01 from "../../images/med01.jpeg";
import med02 from "../../images/med02.jpg";
import med03 from "../../images/med03.jpg";
import med04 from "../../images/yoga02.jpg";

export default function EventsSection() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Morning Meditation Session",
      date: "2025-07-15",
      category: "Meditation",
      location: "Central Park, New York",
      description:
        "Start your day with peaceful meditation in nature's embrace.",
      imageURL: med01,
    },
    {
      id: 2,
      title: "Mindfulness Workshop",
      date: "2025-07-20",
      category: "Workshop",
      location: "Community Center, Los Angeles",
      description: "Learn practical mindfulness techniques for daily life.",
      imageURL: med01,
    },
    {
      id: 3,
      title: "Sunset Yoga & Meditation",
      date: "2025-07-25",
      category: "Yoga",
      location: "Beach House, Miami",
      description: "Combine yoga flow with meditation as the sun sets.",
      imageURL: med01,
    },
    {
      id: 4,
      title: "Deep Relaxation Retreat",
      date: "2025-08-01",
      category: "Retreat",
      location: "Mountain Lodge, Colorado",
      description: "A full day retreat focused on deep relaxation and healing.",
      imageURL: med01,
    },
  ]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Fetch events from backend
    axios
      .get("http://localhost:5000/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const firstRow = events.slice(0, 4); // Assuming a rows contains 3 events
  const otherRows = events.slice(4); // Remaining events

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
      </div>

      <div className="main-container">
        {/* First Row */}
        <div className="rows">
          {firstRow.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>

        {/* Other Rows */}
        {showMore && (
          <div className="rows">
            {otherRows.map((event, index) => (
              <EventCard event={event} key={index} />
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="heading-action">
          <button className="heading-action-btn" onClick={toggleShowMore}>
            <span className="heading-action-btn-text">
              {showMore ? "View Less" : "View More"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className="card">
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
  );
}
