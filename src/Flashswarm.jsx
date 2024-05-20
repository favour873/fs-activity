import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Flashswarm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [swarmTime, setSwarmTime] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const swarmDetails = {
      name,
      description,
      swarmTime,
    };
    console.log('Swarm Created:', swarmDetails);
    // Here you can add the code to send the swarmDetails to your backend or perform any other action
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
