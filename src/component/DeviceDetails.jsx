import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/home.css';

const DeviceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const device = state?.device;

  if (!device) {
    return <div className="home-container"><p>Device not found.</p></div>;
  }

  return (
    <div className="home-container">
      <button onClick={() => navigate(-1)} style={{ marginBottom: 24 }}>← Back</button>
      <div className="device-card" style={{ margin: '0 auto', maxWidth: 400 }}>
        <h2 className="device-card-title">{device.name}</h2>
        <ul className="dispenser-list">
          <li><strong>Model:</strong> {device.model}</li>
          <li><strong>Dispenser ID:</strong> {device.dispenserId}</li>
          <li><strong>Location:</strong> {device.location}</li>
          <li><strong>Status:</strong> {device.status}</li>
          <li><strong>Last Refilled:</strong> {device.lastRefilled}</li>
          <li><strong>Capacity:</strong> {device.capacity}</li>
          <li><strong>Sheets Remaining:</strong> {device.sheetsRemaining}</li>
          <li><strong>Battery Level:</strong> {device.batteryLevel}</li>
          <li><strong>Last Maintenance:</strong> {device.lastMaintenance}</li>
          <li><strong>Connectivity:</strong> {device.connectivity}</li>
          <li><strong>Alerts:</strong> {device.alerts}</li>
        </ul>
      </div>
    </div>
  );
};

export default DeviceDetails;