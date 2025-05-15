import React, { useState } from 'react';
import RoomCard from '../../components/Accommodation/RoomCard.jsx';
import '../../pages/Accommodation/Accommodation.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const rooms = [
  {
    title: 'Double Room with Mountain View (1)',
    bed: 'One extra-large double bed',
    size: 269,
    facilities: ['Balcony', 'Patio', 'Private Bathroom', 'Minibar', 'Fan', 'Coffee Machine'],
    price: '$40 (1 person), $60 (2 persons)',
    images: Array.from({ length: 10 }, (_, i) => `/images/room1_photo${i + 1}.jpg`)
  },
  {
    title: 'Double Room with Mountain View (2)',
    bed: 'One extra-large double bed',
    size: 269,
    facilities: ['Balcony', 'Patio', 'Private Bathroom', 'Minibar', 'Fan', 'Coffee Machine'],
    price: '$40 (1 person), $60 (2 persons)',
    images: Array.from({ length: 10 }, (_, i) => `/images/room2_photo${i + 1}.jpg`)
  },
  {
    title: 'Deluxe Double Room',
    bed: 'One extra-large double bed',
    size: 269,
    facilities: ['Balcony', 'Patio', 'Private Bathroom', 'Minibar', 'Fan', 'Coffee Machine'],
    price: '$50 (1 person), $75 (2 persons)',
    images: Array.from({ length: 10 }, (_, i) => `/images/room3_photo${i + 1}.jpg`)
  },
  {
    title: 'Double or Twin Room with Mountain View',
    bed: 'Two extra-large double beds',
    size: 269,
    facilities: ['Balcony', 'Patio', 'Private Bathroom', 'Minibar', 'Fan', 'Coffee Machine'],
    price: '$40 (1 person), $60 (2 persons), $70 (3 persons), $80 (4 persons)',
    images: Array.from({ length: 10 }, (_, i) => `/images/room4_photo${i + 1}.jpg`)
  }
];

function Accommodation() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="accommodation-container">
      <h1>Accommodation</h1>
      <div className="calendar-container">
        <p>Select Booking Date:</p>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
}

export default Accommodation;
