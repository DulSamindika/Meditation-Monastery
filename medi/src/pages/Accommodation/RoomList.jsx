import React from "react";
import RoomCard from "../components/RoomCard";
import "./RoomList.css";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 220,
    description: "A calm and spacious room for meditation and rest.",
    images: [require("../assets/images/room1.jpg"), require("../assets/images/room1-bath.jpg")],
  },
  {
    id: 2,
    name: "Single Room",
    price: 180,
    description: "Perfect for solo retreat visitors.",
    images: [require("../assets/images/room2.jpg"), require("../assets/images/room2-bath.jpg")],
  },
  {
    id: 3,
    name: "Couple Room",
    price: 250,
    description: "Ideal for couples seeking a peaceful stay.",
    images: [require("../assets/images/room3.jpg"), require("../assets/images/room3-bath.jpg")],
  },
  {
    id: 4,
    name: "Standard Room",
    price: 200,
    description: "Comfortable space with peaceful views.",
    images: [require("../assets/images/room4.jpg"), require("../assets/images/room4-bath.jpg")],
  },
];

const RoomList = () => {
  return (
    <div className="room-list-container">
      <h1>Meditation Monastery Accommodation</h1>
      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
