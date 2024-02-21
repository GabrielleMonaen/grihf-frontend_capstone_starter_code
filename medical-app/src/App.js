import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingConsultation from './Components/BookingConsultation';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Sign_Up />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
