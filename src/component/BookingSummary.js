import React from 'react';

const BookingSummary = ({ bookings }) => {
  return (
    <div>
      <h2>Booking Summary</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.guestName} - {booking.roomType} - Total: ${booking.totalPrice} (Check-in: {booking.checkInDate}, Check-out: {booking.checkOutDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSummary;
