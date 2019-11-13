import React, { Fragment } from 'react'
import TodoItem from './todoItem';

const Todos = () => {
  const todos = [
    { id: 1, title: 'Take out trash', completed: true },
    { id: 2, title: 'Pickup kids from school', completed: false },
    { id: 3, title: 'Dinner with boss', completed: true },
  ]

  return (
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      { todos.map(todo => (
        <TodoItem todo={ todo } key={ todo.id } />
      )) }
    </Fragment>
  );
}

export default Todos;