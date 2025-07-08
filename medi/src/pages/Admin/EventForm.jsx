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
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isEditMode) fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/events/${id}`);
      const eventDate = new Date(res.data.date).toISOString().split("T")[0];
      setFormData({ ...res.data, date: eventDate });
      setPreviewURL(res.data.imageURL);
      setError(null);
    } catch (err) {
      setError("Failed to load event details.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG or PNG)');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('Image is too large. Maximum size is 5MB.');
      return;
    }

    setImageFile(file);
    
    // Generate preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
    setError('');
  };

  const handleImagePreviewError = () => {
    setPreviewURL("");
    setFormData((prev) => ({ ...prev, imageURL: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([k, v]) => dataToSend.append(k, v));
    if (imageFile) dataToSend.append("image", imageFile);

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/events/${id}`, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccessMessage("Event updated!");
      } else {
        await axios.post(`http://localhost:5000/api/events`, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccessMessage("Event created!");
        setFormData({
          title: "",
          location: "",
          category: "",
          date: "",
          description: "",
          imageURL: ""
        });
        setPreviewURL("");
        setImageFile(null);
      }
      setError(null);
      setTimeout(() => navigate("/admin/events"), 2000);
    } catch (err) {
      console.error(err);
      setError("Failed to save event.");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Meditation",
    "Yoga",
    "Wellness",
    "Workshop",
    "Retreat",
    "Special Event",
  ];

  return (
    <div className="event-form-container">
      <div className="form-header">
        <h2>{isEditMode ? "Edit Event" : "Add New Event"}</h2>
        <button onClick={() => navigate("/admin/events")} className="back-button">
          <i className="bi bi-arrow-left"></i> Back to Events
        </button>
      </div>

      {error && <div className="error-alert">{error}</div>}
      {successMessage && <div className="success-alert">{successMessage}</div>}

      {loading ? (
        <div className="loading-container">
          <div className="spinner" /> <p>Loading...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Title*</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter title"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location*</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="form-group image-upload-group">
            <label>Event Image</label>
            <div className="image-upload-container">
              {previewURL ? (
                <div className="image-preview">
                  <img src={previewURL} alt="Event preview" onError={handleImagePreviewError} />
                  <button type="button" className="remove-image-btn" onClick={() => {
                    setImageFile(null);
                    setPreviewURL("");
                    setFormData((prev) => ({ ...prev, imageURL: "" }));
                  }}>
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="upload-button-container">
                  <label className="upload-button">
                    <i className="bi bi-cloud-upload"></i>
                    Choose Image
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                  {imageFile && (
                    <p className="file-info">
                      Selected: {imageFile.name} ({(imageFile.size / 1024 / 1024).toFixed(1)} MB)
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Description*</label>
            <textarea
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
            ></textarea>
          </div>



          <div className="form-actions">
            <button type="button" onClick={() => navigate("/admin/events")} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button" disabled={loading}>
              {loading ? "Saving..." : isEditMode ? "Update Event" : "Add Event"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
