import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
  };

  return (
    <div className="container">
      <h1>Smart Hostel Complaint System</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Complaint:</label>
        <textarea
          placeholder="Enter your complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default App;