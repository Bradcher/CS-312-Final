import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <HomePage user={user} setUser={setUser} />
    </>
  );
}

export default App;

