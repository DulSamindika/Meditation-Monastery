import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';
import "./AdminMediVideos.css";
import "./EventsManagement.css";

const VideoManagement = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [previewThumbnail, setPreviewThumbnail] = useState("");
  
  // Video types for filtering
  const videoTypes = ["meditation", "yoga", "chanting"];
  
  // New video form state
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split('T')[0],
    type: "meditation"
  });
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  // Fetch videos from all categories
  const fetchVideos = async () => {
    setLoading(true);
    try {
      // Fetch from all video categories
      const [meditationRes, yogaRes, chantingRes] = await Promise.all([
        axios.get("http://localhost:5000/api/meditation/videos"),
        axios.get("http://localhost:5000/api/yoga/videos"),
        axios.get("http://localhost:5000/api/chanting/videos")
      ]);
      
      // Combine all videos with their types
      const allVideos = [
        ...meditationRes.data.map(v => ({ ...v, type: 'meditation' })),
        ...yogaRes.data.map(v => ({ ...v, type: 'yoga' })),
        ...chantingRes.data.map(v => ({ ...v, type: 'chanting' }))
      ];
      
      setVideos(allVideos);
      setError("");
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Failed to load videos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  // Handle video file selection with validation
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid video file (MP4, WebM, or MOV)');
      return;
    }

    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('Video file is too large. Maximum size is 100MB.');
      return;
    }

    setVideoFile(file);
    setError('');
  };

  // Handle thumbnail file selection with validation
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG or PNG) for thumbnail');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('Thumbnail image is too large. Maximum size is 5MB.');
      return;
    }

    setThumbnailFile(file);
    
    // Generate preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewThumbnail(reader.result);
    };
    reader.readAsDataURL(file);
    setError('');
  };

  // Handle form submission for video upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!videoFile) {
      setError('Please select a video file to upload');
      return;
    }
    
    if (!newVideo.title.trim()) {
      setError('Please enter a title for the video');
      return;
    }
    
    setLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('video', videoFile);
    if (thumbnailFile) formData.append('thumbnail', thumbnailFile);
    formData.append('title', newVideo.title.trim());
    formData.append('description', newVideo.description.trim());
    formData.append('date', newVideo.date);
    formData.append('type', newVideo.type);
    
    try {
      // Determine the correct upload endpoint based on video type
      const uploadEndpoint = `http://localhost:5000/api/${newVideo.type}/videos/upload`;
      
      const response = await axios.post(uploadEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 300000 // 5 minutes timeout for large uploads
      });
      
      // Add the new video to the list with its type
      setVideos(prevVideos => [
        { ...response.data, type: newVideo.type },
        ...prevVideos
      ]);
      
      // Show success message
      setSuccessMessage('Video uploaded successfully!');
      
      // Reset form and close modal after a short delay
      setTimeout(() => {
        setNewVideo({
          title: '',
          description: '',
          date: new Date().toISOString().split('T')[0],
          type: 'meditation'
        });
        setVideoFile(null);
        setThumbnailFile(null);
        setPreviewThumbnail('');
        setShowUploadForm(false);
        setSuccessMessage('');
      }, 1500);
      
    } catch (err) {
      console.error('Error uploading video:', err);
      
      // Handle specific error cases
      if (err.code === 'ECONNABORTED') {
        setError('Upload timed out. Please try again with a smaller file or check your connection.');
      } else if (err.response?.status === 413) {
        setError('File is too large. Maximum video size is 100MB.');
      } else {
        setError(err.response?.data?.message || 'Failed to upload video. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle video deletion
  const handleDelete = async () => {
    if (!videoToDelete) return;
    
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/videos/${videoToDelete._id}`);
      
      // Remove the deleted video from the list
      setVideos(prevVideos => prevVideos.filter(video => video._id !== videoToDelete._id));
      
      // Show success message
      setSuccessMessage('Video deleted successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Close the modal
      setShowDeleteModal(false);
      setVideoToDelete(null);
      
    } catch (err) {
      console.error("Error deleting video:", err);
      
      // Handle specific error cases
      if (err.response?.status === 404) {
        setError('Video not found. It may have already been deleted.');
      } else if (err.response?.status === 403) {
        setError('You do not have permission to delete this video.');
      } else {
        setError(err.response?.data?.message || 'Failed to delete video. Please try again.');
      }
      
      // Close the modal on error
      setShowDeleteModal(false);
    } finally {
      setLoading(false);
    }
  };

  // Filter and search videos
  const filteredVideos = videos
    .filter(video => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        video.title?.toLowerCase().includes(searchLower) ||
        video.description?.toLowerCase().includes(searchLower);
      const matchesType = !filterType || video.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Manage Videos</h1>
        <div className="admin-actions">
          <button 
            className="add-btn"
            onClick={() => setShowUploadForm(true)}
            disabled={loading}
          >
            <i className="bi bi-plus-lg"></i> Add New Video
          </button>
        </div>
      </div>
      
      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          <i className="bi bi-check-circle"></i> {successMessage}
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="error-message">
          <i className="bi bi-exclamation-triangle"></i> {error}
        </div>
      )}
      
      {/* Search and Filter */}
      <div className="search-filter">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search videos by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <div className="filter-dropdown">
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-select"
            disabled={loading}
          >
            <option value="">All Types</option>
            {videoTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Loading State */}
      {loading && !showUploadForm ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading videos...</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="videos-table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Type</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVideos.length > 0 ? (
                filteredVideos.map(video => (
                  <tr key={video._id}>
                    <td>
                      {video.thumbnailUrl ? (
                        <img 
                          src={`http://localhost:5000${video.thumbnailUrl}`} 
                          alt={video.title}
                          className="event-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-video.jpg';
                          }}
                        />
                      ) : (
                        <div className="event-image-placeholder">
                          <i className="bi bi-film"></i>
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="event-title">{video.title}</div>
                      {video.description && (
                        <div className="event-description">
                          {video.description.length > 100 
                            ? `${video.description.substring(0, 100)}...` 
                            : video.description}
                        </div>
                      )}
                    </td>
                    <td>
                      <span className={`type-badge ${video.type}`}>
                        {video.type.charAt(0).toUpperCase() + video.type.slice(1)}
                      </span>
                    </td>
                    <td>{format(new Date(video.date), 'MMM dd, yyyy')}</td>
                    <td>
                      <div className="event-actions">
                        <a 
                          href={`http://localhost:5000${video.videoUrl}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-btn view-btn"
                          title="Play Video"
                        >
                          <i className="bi bi-play-circle"></i>
                        </a>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => {
                            setVideoToDelete(video);
                            setShowDeleteModal(true);
                          }}
                          title="Delete Video"
                          disabled={loading}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-results">
                    <i className="bi bi-film"></i>
                    <p>No videos found</p>
                    {!loading && (
                      <button 
                        className="add-btn"
                        onClick={() => setShowUploadForm(true)}
                      >
                        <i className="bi bi-plus-lg"></i> Add Your First Video
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Upload Video Modal */}
      {showUploadForm && (
        <div className="modal-overlay">
          <div className="admin-modal">
            <div className="modal-header">
              <h3>Upload New Video</h3>
              <button 
                className="close-btn"
                onClick={() => !loading && setShowUploadForm(false)}
                disabled={loading}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title*</label>
                <input
                  type="text"
                  name="title"
                  value={newVideo.title}
                  onChange={handleInputChange}
                  placeholder="Enter video title"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newVideo.description}
                  onChange={handleInputChange}
                  placeholder="Enter video description"
                  rows="3"
                  disabled={loading}
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={newVideo.date}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label>Type*</label>
                  <select
                    name="type"
                    value={newVideo.type}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  >
                    {videoTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label className="file-upload-label">
                  <div className={`file-upload-container ${loading ? 'disabled' : ''}`}>
                    <i className="bi bi-upload"></i>
                    <span>{videoFile ? videoFile.name : 'Select Video File*'}</span>
                    <span className="file-upload-hint">MP4, WebM, or MOV (max 100MB)</span>
                  </div>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="file-upload-input"
                    required
                    disabled={loading}
                  />
                </label>
              </div>
              
              <div className="form-group">
                <label className="file-upload-label">
                  <div className={`file-upload-container ${loading ? 'disabled' : ''}`}>
                    <i className="bi bi-image"></i>
                    <span>{thumbnailFile ? thumbnailFile.name : 'Select Thumbnail (Optional)'}</span>
                    <span className="file-upload-hint">JPG or PNG (max 5MB)</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="file-upload-input"
                    disabled={loading}
                  />
                </label>
                
                {previewThumbnail && (
                  <div className="image-preview">
                    <h4>Thumbnail Preview</h4>
                    <img 
                      src={previewThumbnail} 
                      alt="Thumbnail preview" 
                      style={{ maxWidth: '200px' }} 
                    />
                  </div>
                )}
              </div>
              
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => !loading && setShowUploadForm(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="save-button"
                  disabled={loading || !videoFile || !newVideo.title.trim()}
                >
                  {loading ? (
                    <>
                      <span className="spinner-small"></span> Uploading...
                    </>
                  ) : (
                    'Upload Video'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="admin-modal">
            <div className="modal-header">
              <h3>Confirm Deletion</h3>
              <button 
                className="close-btn"
                onClick={() => !loading && setShowDeleteModal(false)}
                disabled={loading}
              >
                &times;
              </button>
            </div>
            
            <div className="modal-body">
              <p>Are you sure you want to delete "{videoToDelete?.title}"? This action cannot be undone.</p>
            </div>
            
            <div className="modal-actions">
              <button
                className="cancel-button"
                onClick={() => !loading && setShowDeleteModal(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="delete-button"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-small"></span> Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoManagement;
