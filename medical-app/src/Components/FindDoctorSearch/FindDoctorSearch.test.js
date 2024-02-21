import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FindDoctorSearch from './FindDoctorSearch';

describe('FindDoctorSearch component', () => {
  test('renders FindDoctorSearch correctly', () => {
    render(
      <Router>
        <FindDoctorSearch />
      </Router>
    );

    expect(screen.getByText('Find a doctor and Consult instantly')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search doctors, clinics, hospitals, etc.')).toBeInTheDocument();
  });

});
