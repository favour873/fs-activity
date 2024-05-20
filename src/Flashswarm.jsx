import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Flashswarm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [swarmTime, setSwarmTime] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const swarmDetails = {
      name,
      description,
      swarmTime,
    };
    // Navigate to the confirmation page with swarm details
    navigate('/confirmation', { state: swarmDetails });
  };

  return (
    <div className="flashswarm-container">
      <h1>Create a Flashswarm</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">What are you working on?</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Swarm Start Time</label>
          <DatePicker
            selected={swarmTime}
            onChange={(date) => setSwarmTime(date)}
            showTimeSelect
            dateFormat="Pp"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Swarm End Time</label>
          <DatePicker
            selected={swarmTime}
            onChange={(date) => setSwarmTime(date)}
            showTimeSelect
            dateFormat="Pp"
            required
          />
        </div>
        <button type="submit">Create Swarm</button>
      </form>
    </div>
  );
};

export default Flashswarm;
