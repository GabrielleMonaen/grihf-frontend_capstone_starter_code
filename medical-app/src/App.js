import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingConsultation from './Components/BookingConsultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/booking-consultation" element={<BookingConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;
