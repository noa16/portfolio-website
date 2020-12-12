import React, { useState, Fragment } from "react";
import classes from "./Contact.module.css";
import axios from '../../axios/axios'
const Contact = () => {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    axios.post("http://localhost:3000/api/contact/postMessage",{
      phone,
      message
    })
  };
  return (
    <Fragment>
    <h1 style={{fontFamily: "Armata, sansSerif",
              fontFamily: "Nunito, sans-serif"}}>Send A Message</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
           
          marginLeft: "30rem",
        }}
      >
        <div style={{marginTop:'10rem'}}>
          
          <h3
            style={{
              fontFamily: "Armata, sansSerif",
              fontFamily: "Nunito, sans-serif",
              padding:"27px",
              marginRight:"35px",
              width:"25rem",
               letterSpacing: "var(--spacing)",
              
            }}
          >
            I am available on almost every social media. You can message me, I will reply within 24 hours.
          </h3>
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
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
