import React from "react";
import styles from "./About.module.css";
import pfp from "./images/pfp.jpeg";

export default function About() {
  return (
    <div>
      <h2 className={styles.title}>ABOUT ME22</h2>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <div className={styles.square}>
            <img src={pfp} alt={"me!"} className={styles.pic} />
          </div>
          <div className={styles.textField}>
            <p>
              Hi! My name is Eric Ni and I am a 3rd year computer science
              student at the University of California, Davis. I enjoy coding for
              social good and love attending hackathons with my friends. Within
              computer science, my interests are mainly in web devlopment.
            </p>
            <p>
              My other interests include sports, cooking, staying active, and
              playing with my dog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}