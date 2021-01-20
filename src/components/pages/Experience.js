import React from "react";
import classes from "./Experience.module.css";
import Css from '../../image/css.png'
import Html from '../../image/html5.png'
import Mongodb from '../../image/mongodb.png'
import Reactjs from '../../image/React.png'
import Redux from '../../image/redux.png'
import Nodejs from '../../image/node.png'
const Experience = () => {
  return (
    <div
      style={{
        padding: "10px",
        marginLeft: "20rem",
        marginTop: "8rem",
        marginBottom: "8rem",
        fontSize: "1rem",
        color:"gray"
        
        
      }}
    >
      <h1 style={{ fontSize: "2rem" ,padding:"10px",textAlign:"center",color:"black" }}>My Experience</h1>
      <div
        className={classes.cards}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <article className={classes.card}>
          <h3>Web Development</h3>
          <p style={{maxWidth: "20rem",marginTop:"2rem"}}>I have experience building websites  using React.js,Redux architecture
          Working with React Router for SPA’s application </p>
        </article>

        <article className={classes.card}>
          <h3>Automation Development</h3>
          <p style={{maxWidth: "18rem",marginTop:"2rem",marginLeft:"2rem"}}>experience in developing selenium automation framework from scratch; hands-on experience with Jenkins, and Maven</p>
        </article>
        <article className={classes.card}>
          <h3>Backend Development</h3>
          <p style={{maxWidth: "15rem",marginTop:"2rem",marginLeft:"2rem"}}>Have experience with using Node.js,express to interact with MongoDB</p>
        </article>


      </div>
      <div className={classes.container} style={{marginTop:'7rem'}}>
      <img className={classes.item} style={{height:"4rem"}} src={Css}/>
      <img style={{height:"4rem"}} src={Html}/>
      <img style={{height:"4rem"}} src={Mongodb}></img>
       <img style={{height:"4rem"}} src={Reactjs}></img>
       <img  style={{height:"4rem"}} src={Nodejs}></img>
       <img style={{height:"4rem"}} src={Redux}></img>
       </div>
    </div>
  );
};

export default Experience;
