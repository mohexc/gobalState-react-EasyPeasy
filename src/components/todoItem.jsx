import React from 'react'
import { useStoreActions } from 'easy-peasy'

const TodoItem = ({ todo }) => {
  const { remove, toggle } = useStoreActions(act => ({
    remove: act.remove,
    toggle: act.toggle
  }))

  return (
    <div
      className="todo "
      style={ { textDecoration: todo.completed ? "line-through" : 'none' } }
    >
      <span onClick={ () => toggle(todo.id) } style={ { cursor: 'pointer' } }>{ todo.title }</span>
      <button onClick={ () => remove(todo.id) } >
        <i className="fas fa-trash-alt" />
      </button>

    </div>
  );
}

export default TodoItem;
