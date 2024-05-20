import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SwarmConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, description, swarmTime } = location.state || {};

  if (!name || !description || !swarmTime) {
    return (
      <div className="confirmation-container">
        <h2>No Swarm Data Available</h2>
        <button onClick={() => navigate('/')}>Back to Create Swarm</button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h2>Notification Sent!</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Swarm Time:</strong> {swarmTime.toString()}</p>
      <button onClick={() => navigate('/')}>Create Another Swarm</button>
    </div>
  );
};

export default SwarmConfirmation;
