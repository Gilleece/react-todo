import React, { useState, useEffect } from 'react';
import './App.css';
//Component imports
import Form from './components/Form'
import List from './components/TodoList'

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // App Start (Only runs once)
  useEffect(() => {
    getLocalTodos();
  }, [])
  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>        
      </header>
      <h3 className="text-center">A simple todo list, made with React!</h3>
      <Form 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <List 
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
