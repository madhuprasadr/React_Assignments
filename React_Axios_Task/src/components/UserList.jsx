// src/components/UserList.js
import React from 'react';
import User from './User';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
