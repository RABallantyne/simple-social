import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Post from './components/post/Post';
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

  const newUser = user => {
    fetch('http://localhost:3000/users', {
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
      <Register user={user} newUser={newUser} />
      <button onClick={() => logout()}>log out</button>

      <Post />
    </>
  );

  // return <div>{showUsers(nameData)}</div>;
}

export default App;
