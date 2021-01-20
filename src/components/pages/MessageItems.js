import React from 'react'
import classes from './MessageItems.module.css'
import axios from '../../axios/axios'


const MessageItems = (props)=>{
   const {messages,dispatch}=props

   const handleDeleteMessage=(phone)=>{
       try{
        axios.delete(`http://localhost:3000/api/contact/${phone}`).then(
               async(response)=>{
                   await dispatch({type:'DeleteMessage',payload:phone})
                
               } 
            )
       }
       catch(e){
         

       }

   }
 
  
   return(
       <div   >
       <h1>My Inbox</h1>
       <ul  className={classes.cards}>
       {messages.map(msg=>{
          
           return(
               
               <li style={{listStyle:"none"}} className={classes.card} key={msg.phone} > <h3 >My Message</h3> 
               <div className={classes.detailes} ><p>Phone:{msg.phone}</p>Message:{msg.message}
               <div><button className={classes.btnDelete} style={{display:"block"}}
               onClick={()=>handleDeleteMessage(msg.phone)} ><span>Delete</span></button></div>
               </div>
               </li>
               
         

           )
       })
       
        
}
 
</ul>
   
       </div>
   )



}

export default MessageItems