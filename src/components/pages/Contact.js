import React, { useState, Fragment } from "react";
import classes from "./Contact.module.css";
import axios from '../../axios/axios'
import DialogBox from '../layout/DialogBox'
import Validation from '../Validation'
import phoneImg from '../../image/phone.png'
import mail from '../../image/mail.png'


const Contact = () => {
 
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess,setSuccess] = useState(false)
  const [isError,setError] = useState(false)
 
 
  const handleSubmit = async (e) => {
 
   
    e.preventDefault();
    
    
    console.log(message);
    try{
    await axios.post("http://localhost:3000/api/contact/postMessage",{
      phone,
      message
    })
   
     setSuccess(current=>current=true)
     console.log(isSuccess)
    
    

  }
  catch(e){
    console.log(e)
    setError(current=>current=true)

  }
  };
  return (
    <Fragment className={classes.container}>
    <h1 style={{marginLeft:"17rem",marginTop:"10rem",textAlign:"center"}}>Send A Message</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
           
          marginLeft: "30rem",
        }}
      >
        <div style={{marginTop:'10rem',marginRight:"5rem"}}>
          
          <p
            className={classes.titleContact}
            style={{
              fontSize:"1rem",
              padding:"10px",
              marginRight:"5rem",
              width:"25rem",
               color:"gray"
            }}
          >
            I am available on almost every social media. You can message me, I will reply within 24 hours.
          </p>
          <div style={{display:"flex"}}  style={{marginTop:'4rem',display:"flex"}}>
             <img src={phoneImg}/><p style={{color:"gray" ,marginTop:"15px",marginLeft:"20px" }}>0547424004</p>
             
             


             
          
          </div>
          <div style={{display:"flex"}}>
            <img style={{marginTop:"1rem"}} src={mail}/><p style={{color:"gray",marginTop:"35px",marginLeft:"5px"}}>noa199216@gmail.com</p>
          </div>
         
        </div>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop:"10rem",
              marginBottom:"15rem",
              width: "15rem",
             
              fontFamily: "Nunito, sans-serif",
              letterSpacing: "var(--spacing)",
            }}
          >
            <label htmlFor="phone">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="message">Message</label>
            <textarea
              style={{height:"8rem",borderRadius:"3px"}}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
           <Validation msg={message} phone={phone} />
            <button
              className={classes.btnSubmit}
              style={{
                marginTop: "1rem",
                height: "20px",
                borderRadius: "3rem",
                fontFamily: "Armata, sans-serif",
                fontFamily: "Nunito, sans-serif",
                letterSpacing: "var(--spacing)",
                cursor: "pointer",
               
                
              }}
              type="submit"
            >
              Submit
            </button>
           
          </div>
          {isSuccess===true?<div><DialogBox msg={"The message successfully sent"} type={"Success"}/></div>:null}
          {isError===true?<div><DialogBox msg={"Error occure"} type={"Error"}/></div>:null}
        </form>
        
      </div>
    </Fragment>
  );
};

export default Contact;
