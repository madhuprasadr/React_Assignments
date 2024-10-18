// src/components/User.js
import React from 'react';

const User = ({ user, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default User;
