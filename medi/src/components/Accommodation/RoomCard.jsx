import React from 'react';
import './RoomCard.css';

function RoomCard({ title, bed, size, facilities, price, images }) {
  return (
    <div className="room-card">
      {images.map((img, idx) => (
        <img key={idx} src={img} alt={`room-${idx}`} className="room-photo" />
      ))}
      <h2>{title}</h2>
      <p><strong>Bed:</strong> {bed}</p>
      <p><strong>Size:</strong> {size} ft²</p>
      <p><strong>Facilities:</strong> {facilities.join(', ')}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default RoomCard;
