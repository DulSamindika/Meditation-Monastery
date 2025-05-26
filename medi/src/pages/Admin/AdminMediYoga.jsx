import React, { useState } from "react";
import "./AdminMediYoga.css"; // Add CSS for styling

export default function AdminPage({ onAddEvent }) {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    location: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventDetails);
    setEventDetails({
      title: "",
      location: "",
      category: "",
      date: "",
      description: "",
    });
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel - Manage Events</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title:</label>
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={eventDetails.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Add Event
        </button>
      </form>
    </div>
  );
}
