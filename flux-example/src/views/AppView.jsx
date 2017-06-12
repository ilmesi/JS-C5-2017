import React from 'react';
import TodoList from './TodoList';
import CreateForm from './CreateForm';

export default function AppView(props) {
  return (
    <div className="container">
      <div className="header">
        <h2>TODO List</h2>
        <CreateForm {...props} />
        <TodoList {...props} />
      </div>
    </div>
  )
}
