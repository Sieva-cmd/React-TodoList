import React from 'react'


function Todo(props){
    function deleteHandler(){

    }
    return (
        <div className="App">

          <div className ='card'>
            <h2> {props.text}</h2>
            <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete </button>
            </div>
            
          </div>
        </div>
      );

}

export default Todo