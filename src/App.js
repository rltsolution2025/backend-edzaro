import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import InsideProgram from './pages/InsideProgram';
import ReferFriend from './pages/ReferFriend';
import Career from './pages/Career';
import HireEdzaro from './pages/HireEdzaro';
import Platform from './pages/Platform';
import AboutUs from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/inside-program" element={<InsideProgram />} />
          <Route path="/refer-friend" element={<ReferFriend />} />
          <Route path="/career" element={<Career />} />
          <Route path="/hire-edzaro" element={<HireEdzaro />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;