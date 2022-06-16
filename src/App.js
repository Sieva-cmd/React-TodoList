
import './App.css';
import React from 'react';
import Todo from './Todo';


function App() {

  return (
    <div className="App">
    <h1>To do List</h1>
      <Todo text ='React crush course' />
      <br />
      <Todo text ='Learn vue.js' />
      <br />
      <Todo text ='Learn vanilla Js' />
      <br />
      <Todo text ='Finish up designing project' />
      <br />
      <Todo text ='learn data structres'/>

     
        
      </div>
    
  );
}

export default App;
