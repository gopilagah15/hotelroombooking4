import React, { useState } from 'react';

const RoomBookingForm = ({ onBooking }) => {
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('Standard');
  const [services, setServices] = useState({
    meals: false,
    spa: false,
  });

  const roomRates = {
    Standard: 100,
    Deluxe: 150,
    Suite: 250,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomPrice = roomRates[roomType];
    const extraServices = (services.meals ? 20 : 0) + (services.spa ? 50 : 0);
    const totalPrice = roomPrice + extraServices;

    const booking = {
      guestName,
      checkInDate,
      checkOutDate,
      roomType,
      totalPrice,
    };

    onBooking(booking);
    // Reset form
    setGuestName('');
    setCheckInDate('');
    setCheckOutDate('');
    setRoomType('Standard');
    setServices({ meals: false, spa: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Guest Name:</label>
      <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} required />

      <label>Check-in Date:</label>
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />

      <label>Check-out Date:</label>
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />

      <label>Room Type:</label>
      <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
        <option value="Standard">Standard - $100</option>
        <option value="Deluxe">Deluxe - $150</option>
        <option value="Suite">Suite - $250</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={services.meals}
          onChange={(e) => setServices({ ...services, meals: e.target.checked })}
        />
        Meals - $20
      </label>

      <label>
        <input
          type="checkbox"
          checked={services.spa}
          onChange={(e) => setServices({ ...services, spa: e.target.checked })}
        />
        Spa - $50
      </label>

      <button type="submit">Book Room</button>
    </form>
  );
};

export default RoomBookingForm;
