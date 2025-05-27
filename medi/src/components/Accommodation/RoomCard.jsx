import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accommodation/${room.id}`, { state: { room } });
  };

  return (
    <div className="room-card" onClick={handleClick}>
      <img src={room.image} alt={room.name} className="room-image" />
      <div className="room-info">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <p><strong>${room.price}</strong> per night</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default RoomCard;
