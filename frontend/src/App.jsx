import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landing page/Landing.jsx';
import SignupPage from './components/signup page/Signup.jsx';
import ContactUs from './components/landing page/ContactUs.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // Import
import LoginPage from "./components/login page/LoginPage.jsx";
import ForgotPassword from "./components/login page/ForgotPassword.jsx";
import ProfilePage from "./components/profile page/student/Profilepage.jsx";
import MessProfilePage from "./components/profile page/messProvider/MessProfilePage.jsx";
import MessForgotPassword from "./components/login page/MessForgotpass.jsx";
import RoomForgotPassword from "./components/login page/RoomForgotpass.jsx";
import RoomProfilePage from "./components/profile page/RoomProvider/RoomProfilepage.jsx";
// import Dashboard from "./components/profile page/student/ProfilePage.jsx"; // ✅

<Route path="/landing" element={<LandingPage />} />

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      
      {/* ✅ Added LandingPage route */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} /> {/* ✅ added */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/student-forgot-password" element={<ForgotPassword/>}/>
        <Route path="/mess-forgot-password" element={<MessForgotPassword/>}/>
        <Route path="/room-forgot-password" element={<RoomForgotPassword/>}/>
        <Route path="/mess-profilepage/*" element={<MessProfilePage/>}/>
        <Route path="/*" element={<ProfilePage/>}/>
        <Route path="/room-profilepage/*" element={<RoomProfilePage/>}/> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
