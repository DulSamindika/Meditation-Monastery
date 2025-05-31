import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EventForm.css";

export default function EventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    date: "",
    description: "",
    imageURL: ""
  });
  
  const [loading, setLoading] = useState(isEditMode);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  
  // Fetch event details if in edit mode
  useEffect(() => {
    if (isEditMode) {
      fetchEventDetails();
    }
  }, [id]);
  
  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/events/${id}`);
      // Format date for input field (YYYY-MM-DD)
      const eventDate = new Date(response.data.date);
      const formattedDate = eventDate.toISOString().split('T')[0];
      
      setFormData({
        ...response.data,
        date: formattedDate
      });
      setError(null);
    } catch (err) {
      console.error("Error fetching event details:", err);
      setError("Failed to load event details. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImagePreviewError = () => {
    setFormData(prev => ({
      ...prev,
      imageURL: ""
    }));
    setError("Invalid image URL. Please provide a valid URL.");
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isEditMode) {
        // Update existing event
        await axios.put(`http://localhost:5000/events/${id}`, formData);
        setSuccessMessage("Event updated successfully!");
      } else {
        // Create new event
        await axios.post("http://localhost:5000/events", formData);
        setSuccessMessage("Event added successfully!");
        
        // Clear form after successful creation
        setFormData({
          title: "",
          location: "",
          category: "",
          date: "",
          description: "",
          imageURL: ""
        });
      }
      
      setError(null);
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/admin/events");
      }, 2000);
      
    } catch (err) {
      console.error("Error saving event:", err);
      setError("Failed to save event. Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  };
  
  // Predefined categories for dropdown
  const categories = [
    "Meditation",
    "Yoga",
    "Wellness",
    "Workshop",
    "Retreat",
    "Special Event"
  ];
  
  return (
    <div className="event-form-container">
      <div className="form-header">
        <h2>{isEditMode ? "Edit Event" : "Add New Event"}</h2>
        <button 
          onClick={() => navigate("/admin/events")} 
          className="back-button"
        >
          <i className="bi bi-arrow-left"></i> Back to Events
        </button>
      </div>
      
      {error && (
        <div className="error-alert">
          <i className="bi bi-exclamation-triangle"></i> {error}
        </div>
      )}
      
      {successMessage && (
        <div className="success-alert">
          <i className="bi bi-check-circle"></i> {successMessage}
        </div>
      )}
      
      {loading && !error ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-layout">
            <div className="form-main">
              <div className="form-group">
                <label htmlFor="title">Event Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category*</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Event Date*</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location*</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter event location"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description*</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter event description"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="form-sidebar">
              <div className="form-group">
                <label htmlFor="imageURL">Image URL</label>
                <input
                  type="url"
                  id="imageURL"
                  name="imageURL"
                  value={formData.imageURL}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
                
                {formData.imageURL && (
                  <div className="image-preview">
                    <h4>Image Preview</h4>
                    <img
                      src={formData.imageURL}
                      alt="Event preview"
                      onError={handleImagePreviewError}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              className="cancel-button"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="save-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-small"></span> Saving...
                </>
              ) : (
                <>{isEditMode ? "Update Event" : "Add Event"}</>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
