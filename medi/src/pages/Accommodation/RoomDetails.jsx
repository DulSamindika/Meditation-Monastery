import React, { useState } from 'react';
import './RoomDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import Room1 from '../../images/Accommodation/Room1.jpg';
import Room2 from '../../images/Accommodation/Room2.jpg';
import Room3 from '../../images/Accommodation/Room3.jpg';
import Room4 from '../../images/Accommodation/Room4.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const roomData = {
    1: {
      name: "Double Room with Mountain View",
      description: "Peaceful room with a serene view of the mountains, ideal for meditation and rest.",
      price: 220,
      images: [
        Room1, '/assets/img/room/room2.jpg', '/assets/img/room/room3.jpg',
        '/assets/img/room/room4.jpg', '/assets/img/room/room5.jpg',
        '/assets/img/room/room6.jpg', '/assets/img/room/room7.jpg',
        '/assets/img/room/room8.jpg', '/assets/img/room/room9.jpg',
        '/assets/img/room/room10.jpg',
      ],
    },
    2: {
      name: "Double Room with Mountain View",
      description: "Spacious and elegant, with calming interiors and comfortable amenities.",
      price: 280,
      images: [
        Room2, '/assets/img/room/room12.jpg', '/assets/img/room/room13.jpg',
        '/assets/img/room/room14.jpg', '/assets/img/room/room15.jpg',
        '/assets/img/room/room16.jpg', '/assets/img/room/room17.jpg',
        '/assets/img/room/room18.jpg', '/assets/img/room/room19.jpg',
        '/assets/img/room/room20.jpg',
      ],
    },
    3: {
      name: "Delux Double Room with Mountain View",
      description: "Flexible sleeping arrangements with a beautiful view.",
      price: 240,
      images: [
        Room3, '/assets/img/room/room22.jpg', '/assets/img/room/room23.jpg',
        '/assets/img/room/room24.jpg', '/assets/img/room/room25.jpg',
        '/assets/img/room/room26.jpg', '/assets/img/room/room27.jpg',
        '/assets/img/room/room28.jpg', '/assets/img/room/room29.jpg',
        '/assets/img/room/room30.jpg',
      ],
    },
    4: {
      name: "Double or Twin Room with Mountain View",
      description: "A luxurious suite with full amenities and breathtaking views. Perfect for a complete meditative retreat.",
      price: 320,
      images: [
        Room4, '/assets/img/room/room32.jpg', '/assets/img/room/room33.jpg',
        '/assets/img/room/room34.jpg', '/assets/img/room/room35.jpg',
        '/assets/img/room/room36.jpg', '/assets/img/room/room37.jpg',
        '/assets/img/room/room38.jpg', '/assets/img/room/room39.jpg',
        '/assets/img/room/room40.jpg',
      ],
    }
  };

  const room = roomData[id] || roomData[1];

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const bookedDates = {
    1: [
      { start: new Date('2025-06-10'), end: new Date('2025-06-15') },
      { start: new Date('2025-07-01'), end: new Date('2025-07-05') },
    ],
    2: [
      { start: new Date('2025-06-20'), end: new Date('2025-06-25') },
    ],
    3: [],
    4: [
      { start: new Date('2025-06-12'), end: new Date('2025-06-18') },
    ],
  };

  const isDateBooked = (date) => {
    const bookings = bookedDates[id] || [];
    return bookings.some(({ start, end }) => date >= start && date < end);
  };

  const isCheckOutDateDisabled = (date) => {
    if (!checkInDate) return false;
    return date <= checkInDate || isDateBooked(date);
  };

  const isDateRangeAvailable = (start, end) => {
    const bookings = bookedDates[id] || [];
    return bookings.every(({ start: bStart, end: bEnd }) =>
      end <= bStart || start >= bEnd
    );
  };

  const handleReservation = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    if (checkOutDate <= checkInDate) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    if (!isDateRangeAvailable(checkInDate, checkOutDate)) {
      alert('Selected dates are not available.');
      return;
    }

    setShowConfirmation(true);
  };

  return (
    <div className="room-details-container">
      <h1>{room.name}</h1>

      <div className="room-details-images">
        {room.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Room Image ${idx + 1}`} />
        ))}
      </div>

      <p>{room.description}</p>
      <p className="price">Price per night: ${room.price}</p>

      <div className="reservation-section">
        <h2>Make a Reservation</h2>

        <label htmlFor="checkin">Check-In Date</label>
        <DatePicker
          id="checkin"
          selected={checkInDate}
          onChange={date => {
            setCheckInDate(date);
            setCheckOutDate(null); // Reset check-out when check-in changes
          }}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText="Select check-in date"
          dateFormat="yyyy-MM-dd"
          filterDate={date => !isDateBooked(date)}
        />

        <label htmlFor="checkout">Check-Out Date</label>
        <DatePicker
          id="checkout"
          selected={checkOutDate}
          onChange={date => setCheckOutDate(date)}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate}
          placeholderText="Select check-out date"
          dateFormat="yyyy-MM-dd"
          filterDate={date => !isCheckOutDateDisabled(date)}
        />

        <button className="reserve-button" onClick={handleReservation}>Reserve Now</button>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h3>Reservation Confirmed!</h3>
            <p>Your stay from <strong>{checkInDate?.toLocaleDateString()}</strong> to <strong>{checkOutDate?.toLocaleDateString()}</strong> has been reserved.</p>
            <button onClick={() => setShowConfirmation(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
