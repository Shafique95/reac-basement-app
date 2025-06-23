import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register logic here
    // You might want to call API and then:
    localStorage.setItem('token', 'fake-token'); // simulate auth token
    navigate('/dashboard', { replace: true }); // redirect after register
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
            placeholder="Your full name"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
            placeholder="you@example.com"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
            placeholder="At least 6 characters"
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
