import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the jest-dom library

import AppointmentForm from './AppointmentForm';

test('renders AppointmentForm correctly', () => {
  const mockOnSubmit = jest.fn();

  render(<AppointmentForm doctorName="Dr. John" doctorSpeciality="Dentist" onSubmit={mockOnSubmit} />);

  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date of Appointment/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time of Appointment/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Now/i)).toBeInTheDocument();
});

test('calls onSubmit with the correct data when form is submitted', () => {
  const mockOnSubmit = jest.fn();

  render(<AppointmentForm doctorName="Dr. John" doctorSpeciality="Dentist" onSubmit={mockOnSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+44-123-456-7890' } });
  fireEvent.change(screen.getByLabelText(/Date of Appointment/i), { target: { value: '2023-01-01' } });
  fireEvent.change(screen.getByLabelText(/Time of Appointment/i), { target: { value: '9:00 AM' } });

  fireEvent.submit(screen.getByRole('button', { name: /Book Now/i }));

  expect(mockOnSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    phoneNumber: '+44-123-456-7890',
    dateOfAppointment: '2023-01-01',
    timeOfAppointment: '9:00 AM',
  });
});
