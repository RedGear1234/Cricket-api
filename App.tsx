import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Fixtures from './Components/Fixtures';
import Results from './Components/Results';
import Scorecard from './Components/Scorecard';
import Series from './Components/Series';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Series" element={<Series/>}/>
          <Route path="/Fixtures" element={<Fixtures/>}/>
          <Route path="/Results" element={<Results/>}/>
          <Route path="/Scorecard" element={<Scorecard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
