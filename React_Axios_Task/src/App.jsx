// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import useUsers from './hooks/useUsers';

const App = () => {
  const { users, loading, addUser, editUser, removeUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (id) => {
    removeUser(id);
  };

  const handleSubmit = (user) => {
    if (editingUser) {
      editUser(editingUser.id, user);
      setEditingUser(null);
    } else {
      addUser(user);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        onSubmit={handleSubmit}
        userData={editingUser}
        buttonText={editingUser ? 'Update User' : 'Add User'}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
