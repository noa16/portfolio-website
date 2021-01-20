
import React, { useState } from "react";
import classes from './DialogBox.module.css'


import Modal from "react-modal";


const DialogBox = (props)=>{
    console.log(props.msg)
  
       const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
     

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
       
      >
        <p style={{fontFamily: "Armata, sans-serif"}}>{props.msg}</p>
        <button className={classes.btn} onClick={toggleModal}>Close </button>
      </Modal>
    </div>)
}

export default React.memo(DialogBox)