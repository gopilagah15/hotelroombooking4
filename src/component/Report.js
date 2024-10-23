import React from 'react';

const Report = ({ bookings }) => {
  const totalRooms = 10; // Let's assume there are 10 rooms in the hotel.

  const occupiedRooms = bookings.length;
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(2);
  const totalIncome = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

  return (
    <div>
      <h2>Daily Report</h2>
      <p>Occupied Rooms: {occupiedRooms} / {totalRooms}</p>
      <p>Occupancy Rate: {occupancyRate}%</p>
      <p>Total Income: ${totalIncome}</p>
    </div>
  );
};

export default Report;
