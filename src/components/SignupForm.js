import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function SignupForm({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(''); // clear previous messages

    try {
      const res = await axios.post(
        'http://localhost:5000/signup',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      onSignup({ email, id: res.data.id });
      setMsg('Signup successful!');
    } catch (err) {
      console.error('Signup error:', err.response ? err.response.data : err.message);
      setMsg('Signup failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5>Create an Account</h5>
      {msg && <Alert variant={msg.startsWith('Signup successful') ? 'success' : 'danger'}>{msg}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">Sign Up</Button>
    </Form>
  );
}
