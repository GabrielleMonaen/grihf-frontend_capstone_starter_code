import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingConsultation from './Components/BookingConsultation';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking-consultation" element={<BookingConsultation />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
