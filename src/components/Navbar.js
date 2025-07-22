import React from 'react';
import { Button } from 'react-bootstrap';

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="/">MarketPlace</a>
      <div className="ms-auto">
        {user ? (
          <>
            <span className="me-3">Hello, {user.email}</span>
            <Button variant="outline-danger" onClick={onLogout}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button variant="outline-primary" className="me-2">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </>
        )}
      </div>
    </nav>
  );
}

