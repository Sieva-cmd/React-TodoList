import React from 'react'
import {useState} from 'react'
import Modal from './modal';
import Backdrop from './Backdrop';

function Todo(props){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function closeModal(){
    setModalIsOpen(false)
  }
    function deleteHandler(){
      setModalIsOpen(true)

    }
    return (
        <div className="App">

          <div className ='card'>
            <h2> {props.text}</h2>
            <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete </button>
            </div> 
            {modalIsOpen &&  <Modal  onCancel ={closeModal} onConfirm ={closeModal} />}
            {modalIsOpen &&  <Backdrop onClick ={closeModal} />}
           
          </div>
        </div>
      );

}

export default Todo