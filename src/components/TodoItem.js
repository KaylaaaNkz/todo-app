import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
