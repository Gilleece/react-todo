import React from 'react';
import './App.css';
//Component imports
import Form from './components/Form'
import List from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>        
      </header>
      <h3 className="text-center">A simple todo list, made with React!</h3>
      <Form />
      <List />
    </div>
  );
}

export default App;
