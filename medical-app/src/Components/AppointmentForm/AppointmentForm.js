import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState('');
  const [timeOfAppointment, setTimeOfAppointment] = useState('');

  const handleSlotSelection = (slot) => {
    // Handle slot selection if needed
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber, dateOfAppointment, timeOfAppointment });
    setName('');
    setPhoneNumber('');
    setDateOfAppointment('');
    setTimeOfAppointment('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          pattern="[A-Za-z]+"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          pattern="\+44-\d{3}-\d{3}-\d{5}"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfAppointment">Date of Appointment:</label>
        <input
          type="date"
          id="dateOfAppointment"
          value={dateOfAppointment}
          min={new Date().toISOString().split('T')[0]} // Allow only future dates
          onChange={(e) => setDateOfAppointment(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="timeOfAppointment">Time of Appointment:</label>
        <select
          id="timeOfAppointment"
          value={timeOfAppointment}
          onChange={(e) => setTimeOfAppointment(e.target.value)}
          required
        >
          <option value="" disabled>Select a time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          {/* Add more time options as needed */}
        </select>
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
