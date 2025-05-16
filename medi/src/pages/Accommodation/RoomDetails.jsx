import React, { useState, useEffect } from "react";
import "./RoomDetails.css";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Expanded room data for 4 rooms
const roomData = {
  1: {
    name: "Double Room with Mountain View",
    beds: "2 extra-large double beds",
    size: "301 ft²",
    amenities: ["Balcony", "Mountain view", "Private bathroom", "Flat-screen TV", "Coffee machine"],
    pricePerAdult: 45,
    pricePer2Adults: 75,
    discountPercent: 11,
    originalPrice: 50,
    breakfastIncluded: true,
    creditCardNeeded: false,
    prepaymentNeeded: false,
    images: [
      require("../../images/Accommodation/Room1a.jpg"),
      require("../../images/Accommodation/Room1b.jpg"),
      require("../../images/Accommodation/Room1c.jpg"),
    ],
  },
  2: {
    name: "Deluxe Double Room",
    beds: "1 king size bed",
    size: "350 ft²",
    amenities: ["Mountain view", "Private bathroom", "Flat-screen TV", "Mini fridge"],
    pricePerAdult: 60,
    pricePer2Adults: 110,
    discountPercent: 10,
    originalPrice: 67,
    breakfastIncluded: true,
    creditCardNeeded: false,
    prepaymentNeeded: true,
    images: [
      require("../../images/Accommodation/Room2a.jpg"),
      require("../../images/Accommodation/Room2b.jpg"),
      require("../../images/Accommodation/Room2c.jpg"),
    ],
  },
  3: {
    name: "Twin Room with Garden View",
    beds: "2 single beds",
    size: "280 ft²",
    amenities: ["Garden view", "Private bathroom", "Flat-screen TV", "Coffee machine"],
    pricePerAdult: 40,
    pricePer2Adults: 70,
    discountPercent: 8,
    originalPrice: 44,
    breakfastIncluded: false,
    creditCardNeeded: true,
    prepaymentNeeded: false,
    images: [
      require("../../images/Accommodation/Room3a.jpg"),
      require("../../images/Accommodation/Room3b.jpg"),
      require("../../images/Accommodation/Room3c.jpg"),
    ],
  },
  4: {
    name: "Single Room with Mountain View",
    beds: "1 single bed",
    size: "200 ft²",
    amenities: ["Mountain view", "Private bathroom", "Flat-screen TV"],
    pricePerAdult: 30,
    pricePer2Adults: null,
    discountPercent: 5,
    originalPrice: 32,
    breakfastIncluded: true,
    creditCardNeeded: false,
    prepaymentNeeded: false,
    images: [
      require("../../images/Accommodation/Room4a.jpg"),
      require("../../images/Accommodation/Room4b.jpg"),
    ],
  },
};

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomData[id];
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let timer;
    if (showConfirmation) {
      timer = setTimeout(() => setShowConfirmation(false), 4000);
    }
    return () => clearTimeout(timer);
  }, [showConfirmation]);

  if (!room) return <p>Room not found.</p>;

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (!isBooked) {
      setIsBooked(true);
      setShowConfirmation(true);
    } else {
      alert("Sorry, this room is already booked for the selected dates.");
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`room-details-container ${theme}`}>
      <div className="theme-toggle-container text-right p-4">
        <button onClick={toggleTheme} className="theme-toggle-btn px-3 py-1 bg-gray-200 rounded">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4 rounded shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-1">🛏️ {room.beds}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">📏 Size: {room.size}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {room.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Room view ${index + 1}`}
              className="rounded-lg h-48 object-cover w-full"
            />
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Amenities:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
            {room.amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-4 mb-4 bg-gray-50 dark:bg-gray-800">
          <p className="font-medium">💲 Price Details:</p>
          <p>Price for 1 adult: ${room.pricePerAdult}</p>
          {room.pricePer2Adults && <p>Price for 2 adults: ${room.pricePer2Adults}</p>}

          <ul className="mt-3 space-y-1 text-green-700 dark:text-green-400">
            {!room.prepaymentNeeded && <li>✔️ No prepayment needed – pay at the property</li>}
            {!room.creditCardNeeded && <li>✔️ No credit card needed</li>}
            {room.breakfastIncluded && <li>✔️ Breakfast included</li>}
          </ul>

          <div className="mt-4 p-3 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900">
            <p className="font-semibold">🎉 {room.discountPercent}% Genius discount!</p>
            <p className="text-sm">Applied before taxes and charges</p>
            <p className="mt-2 text-xl font-bold">
              <span className="line-through text-red-600">${room.originalPrice}</span> → ${room.pricePerAdult}
            </p>
            <p className="text-sm">+ taxes and charges may apply</p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1 font-medium text-sm">Check-in Date:</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={new Date()}
                className="border p-2 rounded w-full"
                placeholderText="Select check-in"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 font-medium text-sm">Check-out Date:</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn || new Date()}
                className="border p-2 rounded w-full"
                placeholderText="Select check-out"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            {!isBooked ? (
              <button
                onClick={handleBooking}
                className="px-6 py-2 bg-brown-600 text-white font-semibold rounded hover:bg-brown-700 transition"
                style={{ backgroundColor: "#8B4513" }} // brown color inline style fallback
              >
                Make Reservation
              </button>
            ) : (
              <p className="text-green-600 font-semibold">✅ Room is already booked</p>
            )}
          </div>

          {showConfirmation && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded shadow text-center">
              🎉 Your reservation from <strong>{checkIn?.toLocaleDateString()}</strong> to{" "}
              <strong>{checkOut?.toLocaleDateString()}</strong> has been confirmed!
            </div>
          )}
        </div>

        <div className="room-location mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">📍 Location</h3>
          <p>Meditation Monastery Stay</p>
          <p>Sri Sumanaramaya Kithal Ella - Ella, Ella, Sri Lanka</p>
          <div className="map-links mt-2">
            <a
              href="https://maps.google.com/maps?q=6.87074824549525,81.043953779644"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              🌍 View on Google Maps
            </a>
            <a
              href="https://www.google.com/maps/place/6.87074824549525,81.043953779644"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              🌍 Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetails;