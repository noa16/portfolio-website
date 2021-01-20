import React, { Fragment } from "react";
import About from "./About";
import classes from "./Home.module.css";
import Navbar from "../layout/Navbar";
import Experience from "./Experience";
import Contact from "../pages/Contact";
import Portfolio from './Portfolio'
import data from '../data'


const Home = (props) => {
  const handleClick = () => {};
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar props={props} />
        <div className={classes.backImg}>
          <div
            style={{
              marginLeft: "500px",
              color: "black",
              fontFamily: "Nunito, sans-serif",
              letterSpacing: "var(--spacing)",
            }}
          >
            <h1
              className={classes.title}
              style={{ fontSize: "4rem", fontFamily: "Armata, sans-serif" }}
            >
              Hi!
            </h1>
            <h1 className={classes.title} style={{ fontSize: "4rem" }}>
              My Name is Noa
            </h1>

            <a
              onClick={(e) => handleClick(e)}
              className={classes.btn}
              style={{
                marginTop: "2rem",
                marginLeft: "10rem",
                textDecoration: "none",
              }}
              href="https://drive.google.com/file/d/1FdxWa_CaYT4CKGf0gE8twsl8DG5zyQUq/view?usp=sharing"
            >
              <i className="fas fa-arrow-down"></i>
              view cv
            </a>
          </div>
        </div>
      </div>

      <About />
      <Experience />
        <h1  style={{ marginLeft:"15rem",textAlign:"center"}}>Portfolio</h1>
            <p style={{  marginLeft:"15rem",textAlign:"center", color:"gray"}}>Click on the image to see the project description.</p>
      <div className={classes.containerGallery} style={{marginTop:'3rem'}}>
      {data.map((info,idx)=>{
        return(
          <Portfolio technology={info.technology} img={info.img} images={info.images} link={info.url} text={info.text}  />
        )
      })}
      </div>
      <Contact />
    </Fragment>
  );
};
export default Home;
