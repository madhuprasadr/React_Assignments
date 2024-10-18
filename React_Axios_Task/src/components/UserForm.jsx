// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, userData, buttonText }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default UserForm;
