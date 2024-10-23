const saveBooking = async (bookingData) => {
    // Example API call
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
  
    return await response.json();
  };
  
  export { saveBooking };
  