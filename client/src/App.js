import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostMain from './components/posts/PostMain';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const checkLogIn = () => {
    const token = localStorage.token;
    if (token) {
      fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(user => {
          setUser(user.user);
        });
    }
  };

  useEffect(() => {
    checkLogIn();
  }, []);

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

  return (
    <>
      <h1>{user ? 'logged in' : 'please log in'}</h1>
      <Login login={login} user={user} />
      <Register user={user} newUser={newUser} />
      <button onClick={() => logout()}>log out</button>

      {user && <PostMain user={user.name} />}
    </>
  );
}

export default App;
