
import './App.css';
import React from 'react';
import Todo from './Todo';

function App() {

  return (
    <div className="App">
    <h1>To do List</h1>
      <Todo text ='React crush course' />
      <Todo text ='Learn vue.js' />
      <Todo text ='Learn vanilla Js' />
      <Todo text ='Finish up designing project' />
      <Todo text ='learn data structres'/>
        
      </div>
    
  );
}

export default App;
