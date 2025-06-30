import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/SignUp';
import Home from './pages/Home';
import DeviceDetails from './component/DeviceDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;