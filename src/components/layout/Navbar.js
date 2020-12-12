import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import NOAH from "../../image/noah.jpeg";

import Login from "../pages/Login";
const Navbar = (props) => {
  return (
    <div className={classes.container} id="introduction">
      <nav className={classes.navbar}>
        <img src={NOAH} className={classes.imgNoa} />
        <h1>Noa Aslanov</h1>
        <i style={{ marginRight: "4px" }} class="far fa-envelope"></i>

        <h7
          style={{
            fontSize: "11px",
            fontFamily: "Quicksand Arial, sans-serif",
          }}
        >
          noa199216@gmail.com
        </h7>
        <a
          href="#introduction"
          style={{ display: "block", marginTop: "10px", color: "GrayText" }}
        >
          Introduction
        </a>
        <a
          href="#about"
          style={{
            display: "block",
            marginTop: "10px",
            textDecoration: "none",
            color: "GrayText",
          }}
        >
          About
        </a>
        <a
          href="#TimeLine"
          style={{
            display: "block",
            marginTop: "10px",
            textDecoration: "none",
            color: "GrayText",
          }}
        >
          TimeLine
        </a>
        <i className="fab fa-linkedin" style={{ marginTop: "10px" }}></i>
        <i
          className="fab fa-facebook-f"
          style={{ display: "block", marginTop: "10px" }}
        ></i>
        <i className="fab fa-github" style={{ marginTop: "10px" }}></i>
        <div style={{ marginLeft: "2rem" }}>
          <Login props={props} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
