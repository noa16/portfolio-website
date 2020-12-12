import React, { Fragment } from "react";
import About from "./About";
import classes from "./Home.module.css";
import Navbar from "../layout/Navbar";
import Experience from "./Experience";
import Timeline from "./Timeline";
import Contact from "../pages/Contact";

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
      <Timeline />
      <Contact />
    </Fragment>
  );
};
export default Home;
