import React from 'react'
import DialogBox from './DialogBox.module.css'
import Modal from "react-modal";
import DialogBoxProjectsModule from './DialogBoxProjects.module.css'
import { useState } from 'react';
import classes from './DialogBox.module.css';

const DialogBoxProjects=({technology,handleClick,images,url,text})=>{
   

   const [modalIsOpen,setModalIsOpen] = useState(true)
   
  const Click=()=>{
    setModalIsOpen(false)
    handleClick(false)
  }
  return (
      <div>
        <Modal  isOpen={modalIsOpen} 
         ariaHideApp={false}>
          <div className={DialogBoxProjectsModule.container}>
            <div className={DialogBoxProjectsModule.item1}>
          <h2>Technologies used to create the project:</h2>
         
          {technology.map((item)=>{
               return(
                 <div style={{marginTop:"1rem"}}>
                  <i  class="fas fa-check-square"> {item}</i>
                 </div>
               )
            
          })}
          <div style={{marginTop:"1rem"}}>{text}</div>
          <p style={{marginTop:'2rem'}}>Click on the image to see the website on the new tab.</p>
          <p style={{marginTop:'2rem'}}>Click here to get the source code from <a href={url}>GitHub</a>.</p>
         <button style={{marginTop:"20rem"}} className={DialogBoxProjectsModule.btnClose} onClick={Click}>Close</button>
         </div>
         <div className={DialogBoxProjectsModule.item2}><img style={{height:'25rem',width:'40rem'}} src={images}/></div>
         
         </div>
        </Modal>
        
         
      </div> 
  )

}

export default DialogBoxProjects