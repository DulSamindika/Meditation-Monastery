import React, { useState } from "react";
import axios from "axios";
import "./AdminMediYoga.css";

export default function AdminMediYoga() {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    location: "",
    category: "",
    date: "",
    description: "",
    imageURL: "", // Optional field for the event image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send event details to the backend
      const response = await axios.post(
        "http://localhost:5000/events",
        eventDetails
      );
      if (response.status === 201) {
        alert("Event added successfully!");
        // Reset form fields after successful submission
        setEventDetails({
          title: "",
          location: "",
          category: "",
          date: "",
          description: "",
          imageURL: "",
        });
      } else {
        console.error("Failed to add event:", response);
      }
    } catch (error) {
      console.error("Error while adding event:", error);
      alert("An error occurred while adding the event. Please try again.");
    }
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel - Add Event</h2>
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
        <div className="form-group">
          <label>Image URL (optional):</label>
          <input
            type="text"
            name="imageURL"
            value={eventDetails.imageURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Event
        </button>
      </form>
    </div>
  );
}
