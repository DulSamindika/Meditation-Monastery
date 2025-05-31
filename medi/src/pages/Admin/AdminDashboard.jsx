import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("events");

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Meditation Monastery</h2>
          <p>Admin Panel</p>
        </div>
        <nav className="admin-nav">
          <ul>
            <li 
              className={activeSection === "dashboard" ? "active" : ""}
              onClick={() => setActiveSection("dashboard")}
            >
              <i className="bi bi-speedometer2"></i> Dashboard
            </li>
            <li 
              className={activeSection === "events" ? "active" : ""}
              onClick={() => setActiveSection("events")}
            >
              <i className="bi bi-calendar-event"></i> Events
            </li>
            <li 
              className={activeSection === "rooms" ? "active" : ""}
              onClick={() => setActiveSection("rooms")}
            >
              <i className="bi bi-house-door"></i> Rooms
            </li>
            <li 
              className={activeSection === "bookings" ? "active" : ""}
              onClick={() => setActiveSection("bookings")}
            >
              <i className="bi bi-journal-bookmark"></i> Bookings
            </li>
            <li 
              className={activeSection === "users" ? "active" : ""}
              onClick={() => setActiveSection("users")}
            >
              <i className="bi bi-people"></i> Users
            </li>
            <li 
              className={activeSection === "settings" ? "active" : ""}
              onClick={() => setActiveSection("settings")}
            >
              <i className="bi bi-gear"></i> Settings
            </li>
          </ul>
        </nav>
        <div className="admin-logout">
          <button className="logout-btn">
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
      
      <div className="admin-content">
        <div className="admin-header">
          <h1>
            {activeSection === "dashboard" && "Dashboard Overview"}
            {activeSection === "events" && "Event Management"}
            {activeSection === "rooms" && "Room Management"}
            {activeSection === "bookings" && "Booking Management"}
            {activeSection === "users" && "User Management"}
            {activeSection === "settings" && "System Settings"}
          </h1>
          <div className="admin-user">
            <span>Admin User</span>
            <img src="/assets/img/admin-avatar.png" alt="Admin" />
          </div>
        </div>
        
        <div className="admin-main-content">
          {activeSection === "dashboard" && (
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Total Events</h3>
                <p className="stat-number">24</p>
                <p className="stat-info">5 new this week</p>
              </div>
              <div className="stat-card">
                <h3>Room Bookings</h3>
                <p className="stat-number">156</p>
                <p className="stat-info">23 pending</p>
              </div>
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-number">1,245</p>
                <p className="stat-info">12% increase</p>
              </div>
              <div className="stat-card">
                <h3>Revenue</h3>
                <p className="stat-number">$12,456</p>
                <p className="stat-info">+8% this month</p>
              </div>
            </div>
          )}
          
          {activeSection === "events" && (
            <div className="admin-events">
              <div className="action-buttons">
                <Link to="/admin/events/add" className="action-btn add-btn">
                  <i className="bi bi-plus-circle"></i> Add New Event
                </Link>
              </div>
              
              <EventsManagement />
            </div>
          )}
          
          {activeSection === "rooms" && (
            <div className="admin-rooms">
              <h3>Room Management Coming Soon</h3>
              <p>This feature is under development</p>
            </div>
          )}
          
          {activeSection === "bookings" && (
            <div className="admin-bookings">
              <h3>Booking Management Coming Soon</h3>
              <p>This feature is under development</p>
            </div>
          )}
          
          {activeSection === "users" && (
            <div className="admin-users">
              <h3>User Management Coming Soon</h3>
              <p>This feature is under development</p>
            </div>
          )}
          
          {activeSection === "settings" && (
            <div className="admin-settings">
              <h3>Settings Coming Soon</h3>
              <p>This feature is under development</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Events Management Component
function EventsManagement() {
  return (
    <div className="events-management">
      <Link to="/admin/events" className="event-tab active">All Events</Link>
      <Link to="/admin/events/upcoming" className="event-tab">Upcoming</Link>
      <Link to="/admin/events/past" className="event-tab">Past Events</Link>
      
      <EventsList />
    </div>
  );
}

// Events List Component (Placeholder)
function EventsList() {
  // This will be replaced with actual data fetching in the next step
  return (
    <div className="events-table-container">
      <p>Loading events...</p>
    </div>
  );
}
