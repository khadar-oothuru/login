import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const dispenserDevices = [
  {
    name: 'Smart Tissue Dispenser X200',
    model: 'X200',
    location: 'Building A, Floor 2, Restroom 5',
    status: 'Operational',
    lastRefilled: '2025-06-28',
    capacity: '500 sheets',
    sheetsRemaining: 320,
    batteryLevel: '85%',
    lastMaintenance: '2025-06-15',
    dispenserId: 'TDX200-005',
    connectivity: 'WiFi',
    alerts: 'No alerts',
  },
  {
    name: 'Smart Tissue Dispenser X100',
    model: 'X100',
    location: 'Building B, Floor 1, Restroom 2',
    status: 'Low Battery',
    lastRefilled: '2025-06-25',
    capacity: '400 sheets',
    sheetsRemaining: 50,
    batteryLevel: '15%',
    lastMaintenance: '2025-06-10',
    dispenserId: 'TDX100-002',
    connectivity: 'WiFi',
    alerts: 'Battery low',
  },
  // Add more devices as needed
];

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (device) => {
    navigate(`/device/${device.dispenserId}`, { state: { device } });
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Home Page!</h1>
      <p className="home-subtitle">You have successfully logged in.</p>
      <div className="device-cards-container">
        {dispenserDevices.map((device) => (
          <div
            key={device.dispenserId}
            className="device-card"
            onClick={() => handleCardClick(device)}
            tabIndex={0}
            role="button"
            onKeyPress={(e) => { if (e.key === 'Enter') handleCardClick(device); }}
          >
            <h2 className="device-card-title">{device.name}</h2>
            <p><strong>Model:</strong> {device.model}</p>
            <p><strong>Status:</strong> <span className={`status ${device.status === 'Operational' ? 'ok' : 'alert'}`}>{device.status}</span></p>
            <p><strong>Sheets Remaining:</strong> {device.sheetsRemaining}</p>
            <p><strong>Battery:</strong> <span className={`battery ${parseInt(device.batteryLevel) < 20 ? 'low' : 'good'}`}>{device.batteryLevel}</span></p>
            <p className="device-card-location">{device.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;