// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/john">John's Profile</Link>
            </li>
            <li>
              <Link to="/user/jane">Jane's Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
