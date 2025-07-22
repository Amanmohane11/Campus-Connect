import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MessNavbar from './MessNavbar.jsx';
import MessSidebar from './MessSidebar.jsx';
import MessDashboard from './MessDashboard.jsx';
import Messcontactus from './Messcontactus.jsx';
import MessUpdates from './MessUpdates.jsx';
import MessRequest from './MessRequest.jsx';
import ConnectedPeople from './ConnectedPeople.jsx';
import MessUpdateDetails from './MessUpdateDetails.jsx';

import './MessProfilePage.css'

const MessProfilePage = () => {
  return (
    <div className='profile-container'>
      <MessNavbar />
      <div className="profile-body">
        <MessSidebar />
        {/* Right-side content comes here */}
        <div className="content-section">
          <Routes>
            <Route path="/mess-dashboard" element={<MessDashboard />} />
            <Route path="/mess-updates" element={<MessUpdates />} />
            <Route path="/mess-connected-people" element={<ConnectedPeople/>} />
            <Route path="/mess-requests" element={<MessRequest/>} /> 
            <Route path="/messcontactus" element={<Messcontactus/>} /> 
            <Route path="/update-details" element={<MessUpdateDetails/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MessProfilePage;

