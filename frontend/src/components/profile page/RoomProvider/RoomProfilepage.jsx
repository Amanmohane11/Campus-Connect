import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoomNavbar from './RoomNavbar.jsx';
import RoomSidebar from './RoomSidebar.jsx';
import RoomDashboard from './RoomDashboard.jsx';
import Roomcontactus from './Roomcontactus.jsx';
import RoomUpdates from './RoomUpdates.jsx';
import RoomRequest from './RoomRequest.jsx';
import RoomConnectedPeople from './ConnectedRoomPeople.jsx';
import RoomUpdateDetails from './RoomUpdateDetails.jsx';

import './RoomProfilePage.css'

const RoomProfilePage = () => {
  return (
    <div className='profile-container'>
      <RoomNavbar />
      <div className="profile-body">
        <RoomSidebar />
        {/* Right-side content comes here */}
        <div className="content-section">
          <Routes>
            <Route path="/room-dashboard" element={<RoomDashboard />} />
            <Route path="/room-updates" element={<RoomUpdates />} />
            <Route path="/room-connected-people" element={<RoomConnectedPeople/>} />
            <Route path="/room-requests" element={<RoomRequest/>} /> 
            <Route path="/roomcontactus" element={<Roomcontactus/>} /> 
            <Route path="/update-details" element={<RoomUpdateDetails/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RoomProfilePage;

