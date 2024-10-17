import React from 'react';

function TodoItem({ todo, changeStatus, deleteTodo, editTodo }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        <h5>Name: {todo.taskName}</h5>
        <p>Description: {todo.description}</p>
        <div>
          <label>Status: </label>
          <select
            className="status-dropdown"
            value={todo.status}
            onChange={(e) => changeStatus(todo.id, e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-success mt-2" onClick={() => editTodo(todo.id)}>
          Edit
        </button>
        <button className="btn btn-danger mt-2" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
