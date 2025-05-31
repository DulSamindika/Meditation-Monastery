import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EventsManagement.css";

export default function EventsManagement() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Extract unique categories from events
  useEffect(() => {
    if (events.length > 0) {
      const uniqueCategories = [...new Set(events.map(event => event.category))];
      setCategories(uniqueCategories);
    }
  }, [events]);

  // Fetch all events
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/events");
      setEvents(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete an event
  const deleteEvent = async () => {
    if (!eventToDelete) return;
    
    try {
      await axios.delete(`http://localhost:5000/events/${eventToDelete._id}`);
      setEvents(events.filter(event => event._id !== eventToDelete._id));
      setShowDeleteModal(false);
      setEventToDelete(null);
    } catch (err) {
      console.error("Error deleting event:", err);
      setError("Failed to delete event. Please try again.");
    }
  };

  // Handle delete button click
  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };

  // Format date for display
  const formatEventDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Filter events based on search term and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === "" || event.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="events-management-container">
      {/* Search and Filter */}
      <div className="events-filters">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search events..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button onClick={() => {setSearchTerm(""); setFilterCategory("")}} className="clear-filter-btn">
            Clear Filters
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="events-actions">
        <Link to="/admin/events/add" className="add-event-btn">
          <i className="bi bi-plus-circle"></i> Add New Event
        </Link>
        <button onClick={fetchEvents} className="refresh-btn">
          <i className="bi bi-arrow-clockwise"></i> Refresh
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <i className="bi bi-exclamation-triangle"></i> {error}
        </div>
      )}

      {/* Events Table */}
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading events...</p>
        </div>
      ) : (
        <>
          {filteredEvents.length === 0 ? (
            <div className="no-events-message">
              <i className="bi bi-calendar-x"></i>
              <p>No events found</p>
              {(searchTerm || filterCategory) && (
                <span>Try adjusting your search or filter criteria</span>
              )}
            </div>
          ) : (
            <div className="events-table-container">
              <table className="events-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event._id}>
                      <td>
                        {event.imageURL ? (
                          <img 
                            src={event.imageURL} 
                            alt={event.title} 
                            className="event-image" 
                          />
                        ) : (
                          <div className="event-no-image">
                            <i className="bi bi-image"></i>
                          </div>
                        )}
                      </td>
                      <td>{event.title}</td>
                      <td>{formatEventDate(event.date)}</td>
                      <td><span className="event-category">{event.category}</span></td>
                      <td>{event.location}</td>
                      <td>
                        <div className="event-actions">
                          <Link to={`/admin/events/view/${event._id}`} className="view-btn event-action-btn" title="View Event">
                            <i className="bi bi-eye"></i>
                          </Link>
                          <Link to={`/admin/events/edit/${event._id}`} className="edit-btn event-action-btn" title="Edit Event">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button 
                            onClick={() => handleDeleteClick(event)} 
                            className="delete-btn event-action-btn"
                            title="Delete Event"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete the event: <strong>{eventToDelete?.title}</strong>?</p>
            <p className="warning-text">This action cannot be undone.</p>
            <div className="modal-actions">
              <button 
                onClick={() => setShowDeleteModal(false)} 
                className="cancel-btn"
              >
                Cancel
              </button>
              <button 
                onClick={deleteEvent} 
                className="delete-confirm-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
