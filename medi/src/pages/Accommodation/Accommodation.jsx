import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RoomCard from '../../components/Accommodation/RoomCard';
import RoomDetails from './RoomDetails';
import './Accommodation.css';
import Room1 from '../../images/Accommodation/Room1.jpg'
import Room2 from '../../images/Accommodation/Room2.jpg'
import Room3 from '../../images/Accommodation/Room3.jpg'
import Room4 from '../../images/Accommodation/Room4.jpg'


const roomData = [
  {
    id: 1,
    name: "Double Room With Mountain View",
    description: "Spacious room with serene views and meditation space.",
    price: 220,
    image: Room1,
    bathroom: "../../images/Accommodation/Room1.jpg",
    insideImages: [
      Room1,
      Room1,
      "https://images.unsplash.com/photo-1616627789317-e96f88db9d02?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Double Room with Mountain View",
    description: "Elegant room with premium features and calming design.",
    price: 250,
    image: Room2,
    bathroom: "https://images.unsplash.com/photo-1588854337122-cfda5b2e962a?auto=format&fit=crop&w=800&q=80",
    insideImages: [
      "https://images.unsplash.com/photo-1588854337104-42f0c3033516?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337133-1fdb484660f8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624902454009-8b1c38a57c63?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788385-0ea26ae7d4d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788489-4d0ec9982016?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788611-5c233f82684d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627789025-0e5d3d8c74cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788662-5e5fbc1fd870?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627789317-e96f88db9d02?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Delux Double Room with Mountain View",
    description: "Peaceful and flexible room setup with stunning mountain scenery.",
    price: 200,
    image: Room3,
    bathroom: "https://images.unsplash.com/photo-1616627789407-8aa30bb6b1fd?auto=format&fit=crop&w=800&q=80",
    insideImages: [
      "https://images.unsplash.com/photo-1600585154105-7c05bd7cf6f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788489-4d0ec9982016?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578898884309-882429a15234?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788662-5e5fbc1fd870?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624902454009-8b1c38a57c63?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627789025-0e5d3d8c74cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578898884424-9c0349d202d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788611-5c233f82684d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627788385-0ea26ae7d4d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627789317-e96f88db9d02?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "Double or Twin Room with Mountain View",
    description: "Minimalist single room designed for deep personal meditation practice.",
    price: 180,
    image: Room4,
    bathroom: "https://images.unsplash.com/photo-1588854337115-7ba9f408b739?auto=format&fit=crop&w=800&q=80",
    insideImages: [
      "https://images.unsplash.com/photo-1560347876-e44d25b5b78c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627789001-c0f71d034c59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560347877-981b3c61d3a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337133-1fdb484660f8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560347878-b9d1b4cb1f36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337134-d54a9a2727eb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337109-4eec2d460f74?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337091-54f6b1a6cbcc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337021-ef7f476f33fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560347877-bb27d0e34f5f?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const Accommodation = () => {
  const navigate = useNavigate();

  return (
    <div className="accommodation-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="title">Meditation Monastery Accommodation</h1>
              <div className="room-list">
                {roomData.map((room) => (
                  <RoomCard key={room.id} room={room} onClick={() => navigate(`/accommodation/${room.id}`)} />
                ))}
              </div>
            </>
          }
        />
        <Route path=":roomId" element={<RoomDetails roomData={roomData} />} />
      </Routes>
    </div>
  );
};

export default Accommodation;
