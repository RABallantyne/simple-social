import React, { useState } from 'react';

export default function Register({ newUser }) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    password2: ''
  });

  const { name, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('passwords do not match');
    } else {
      newUser(formData);
    }
  };

  return (
    <>
      {/* <h1>please log in </h1> */}
      <form onSubmit={e => onSubmit(e)}>
        <input
          type='name'
          placeholder='user name'
          name='name'
          value={name}
          onChange={e => onChange(e)}
          required
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <input
          type='password2'
          placeholder='password2'
          name='password2'
          value={password2}
          onChange={e => onChange(e)}
          required
        />
        <input type='submit' value='Login' />
      </form>
    </>
  );
}
