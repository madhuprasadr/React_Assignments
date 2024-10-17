import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new todo
  const addTodo = () => {
    if (!taskName) {
      alert('Task name is required');
      return;
    }

    const newTodo = {
      id: Date.now(),
      taskName,
      description: description || 'No description provided',
      status: 'not completed' // default status
    };

    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
  };

  // Update the status of a todo
  const changeStatus = (id, newStatus) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Edit a todo
  const editTodo = id => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setTaskName(todoToEdit.taskName);
    setDescription(todoToEdit.description);
    deleteTodo(id);
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div className="container">
      <h1>My Todo</h1>

      {/* Todo Form */}
      <div className="form-group mb-4 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Todo Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          className="form-control me-2"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
      </div>

      {/* Status Filter */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>My Todos</h4>
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>

      {/* Todo List */}
      <div className="row">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
