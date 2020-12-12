import React from "react";
import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <div
      style={{
        padding: "10px",
        marginLeft: "20rem",
        marginTop: "2rem",
        fontSize: "1rem",
        fontFamily: "Armata, sansSerif",
        fontFamily: "Nunito, sans-serif",
        color: "gray",
        letterSpacing: "0.25rem",
      }}
    >
      <h1 style={{ fontSize: "1rem" }}>My Experience</h1>
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
          <h3>Course in microsoft</h3>
        </article>

        <article className={classes.card}>
          <h3>course in Ai</h3>
        </article>
        <article className={classes.card}>
          <h3>final project</h3>
        </article>
      </div>
    </div>
  );
};

export default Experience;
