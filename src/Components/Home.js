import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header1}>Hello, my name is Eric.</h1>
      <h2 className={styles.header2}>I'm an aspiring software engineer and student</h2>
    </div>
  );
}
