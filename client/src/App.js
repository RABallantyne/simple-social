import React, { useState, useEffect } from 'react';
import Login from './Login';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const login = user => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(user => {
        localStorage.setItem('token', user.jwt);
        setUser(user.user);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  console.log(user);

  return (
    <>
      <h1>{user ? 'logged in' : 'please log in'}</h1>
      <Login login={login} user={user} />
      <button onClick={() => logout()}>log out</button>
    </>
  );

  // return <div>{showUsers(nameData)}</div>;
}

export default App;
