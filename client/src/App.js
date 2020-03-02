import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nameData, setNameData] = useState({
    users: []
  });

  const loadUsers = () => {
    fetch('http://localhost:3000/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setNameData(data);
      });
  };
  // console.log(nameData);
  useEffect(() => {
    loadUsers();
  }, []);

  const showUsers = () => {
    let users =
      nameData.length > 0 &&
      nameData.map(data => {
        console.log(data);
        return <div key={data.id}>{data.name}</div>;
      });
    return users;

    // }
  };
  return <div>{showUsers()}</div>;

  // return <div>{showUsers(nameData)}</div>;
}

export default App;
