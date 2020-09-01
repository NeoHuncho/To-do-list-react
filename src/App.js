import React from 'react';
import './App.css';
import Forms from './components/Forms'
import ToDoList from './components/ToDoList'
function App() {
  return (
    <div className="App">
      <header>
        <h1>Will's Todo List</h1>
      </header>
      <Forms />
      <ToDoList />
    </div>
  );
}

export default App;
