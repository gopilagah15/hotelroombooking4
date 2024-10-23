import React, { useState } from 'react';
import RoomBookingForm from './component/RoomBookingForm';
import 
Report from './component/RoomBookingForm';
import BookingSummary from './component/BookingSummary';
 

const App = () => {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <div>
      <h1>Hotel Room Booking System</h1>
      <RoomBookingForm onBooking={handleBooking} />
      <BookingSummary bookings={bookings} />
      <Report bookings={bookings} />
    </div>
  );
};

export default App;
