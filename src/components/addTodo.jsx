import React, { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <form action="">
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