// src/hooks/useUsers.js
import { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    loadUsers();
  }, []);

  const addUser = async (user) => {
    const newUser = await createUser(user);
    setUsers((prev) => [...prev, newUser]);
  };

  const editUser = async (id, user) => {
    const updatedUser = await updateUser(id, user);
    setUsers((prev) => prev.map((u) => (u.id === id ? updatedUser : u)));
  };

  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return { users, loading, addUser, editUser, removeUser };
};

export default useUsers;
