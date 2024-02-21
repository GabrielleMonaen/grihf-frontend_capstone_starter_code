import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DoctorCard from './DoctorCard';

test('renders DoctorCard correctly', () => {
  const mockData = {
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    experience: 10,
    ratings: 4.5,
    profilePic: 'doctor.jpg', // Add your image path or use a placeholder
  };

  render(<DoctorCard {...mockData} />);
  
  expect(screen.getByText(/Dr. John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Cardiologist/i)).toBeInTheDocument();
  expect(screen.getByText(/10 years experience/i)).toBeInTheDocument();
  expect(screen.getByText(/Ratings: 4.5/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Appointment/i)).toBeInTheDocument();
});

test('shows modal when "Book Appointment" button is clicked', () => {
  const mockData = {
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    experience: 10,
    ratings: 4.5,
    profilePic: 'doctor.jpg', // Add your image path or use a placeholder
  };

  render(<DoctorCard {...mockData} />);
  
  const bookAppointmentBtn = screen.getByText(/Book Appointment/i);
  fireEvent.click(bookAppointmentBtn);

  expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone Number:/i)).toBeInTheDocument();
  expect(screen.getByText(/Date of Appointment:/i)).toBeInTheDocument();
  expect(screen.getByText(/Time of Appointment:/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Now/i)).toBeInTheDocument();
});

// Add more tests as needed
