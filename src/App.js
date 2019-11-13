import React from 'react';
import AddTodo from './components/addTodo';
import Todos from './components/todos';
import './App.css';

function App() {
  return (
    <div className="container">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
