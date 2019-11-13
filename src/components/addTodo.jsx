import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const AddTodo = () => {
  const [title, setTitle] = useState('')

  const add = useStoreActions(action => action.add)

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        add({ title, completed: false })
        setTitle('')
      } }>
        <input
          type="text"
          value={ title }
          onChange={ e => setTitle(e.target.value) }
          placeholder="Add todo title"
        />
        <button className="btn btn-dark">AddTod</button>
      </form>
    </div>
  );
}

export default AddTodo;