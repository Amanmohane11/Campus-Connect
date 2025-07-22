import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import RoomServices from './roomServices.jsx';
import MessServices from './messServices.jsx';
import Suggestions from './suggestions.jsx';
import StdContactus from './Stdcontactus.jsx';
import StdUpdateDetails from './StdUpdateDetails.jsx';

import './profilepage.css'

const ProfilePage = () => {
  return (
    <div className='profile-container'>
      <Navbar />
      <div className="profile-body">
        <Sidebar />
        {/* Right-side content comes here */}
        <div className="content-section">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room-services" element={<RoomServices />} />
            <Route path="/mess-services" element={<MessServices />} />
            <Route path="/suggestions" element={<Suggestions/>} />
            <Route path="/studentcontactus" element={<StdContactus/>} />
            <Route path="/update-details" element={<StdUpdateDetails/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

