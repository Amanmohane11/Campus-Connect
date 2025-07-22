import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import LoginNavbar from './LoginNavbar.jsx';
import StudentLoginForm from './StudentLoginform.jsx';
import MessLoginForm from './MessLoginform.jsx';
import RoomLoginForm from './RoomLoginform.jsx';
import Footer from '../landing page/Footer.jsx';
import './Loginpage.css'; // You can reuse signup.css if layout is similar

const LoginPage = () => {
  const [loginType, setLoginType] = useState('student');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get('role');

    if (role === 'student' || role === 'mess' || role === 'room') {
      setLoginType(role);
    }
  }, [location.search]);

  const renderForm = () => {
    switch (loginType) {
      case 'mess':
        return <MessLoginForm/>;
      case 'room':
        return <RoomLoginForm />;
      case 'student':
      default:
        return <StudentLoginForm/>;
    }
  };

  const getLoginTitle = () => {
    switch (loginType) {
      case 'mess':
        return 'Mess Provider';
      case 'room':
        return 'Room Provider';
      case 'student':
      default:
        return 'Student';
    }
  };

  return (
    <div className="login-page">
      <LoginNavbar />

      <div className="login-container">
        <div className="login-form-box highlighted-box shadowed-box">
          <h2 className="login-title">LOGIN</h2>

          <div
            className="dropdown-button center-dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <button className="select-login-button">
              {getLoginTitle()}
            </button>

            {dropdownVisible && (
              <div className="dropdown-options">
                <div onClick={() => setLoginType('student')}>Student</div>
                <div onClick={() => setLoginType('mess')}>Mess Provider</div>
                <div onClick={() => setLoginType('room')}>Room Provider</div>
              </div>
            )}
          </div>

          {renderForm()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
