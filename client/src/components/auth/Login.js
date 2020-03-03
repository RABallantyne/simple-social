import React, { useState } from 'react';

export default function Login({ login }) {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const { name, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(formData);
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
        <input type='submit' value='Login' />
      </form>
    </>
  );
}
