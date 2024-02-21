import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;
