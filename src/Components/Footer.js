import React from "react";
import styles from "./Footer.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.container}>
      <a onClick={() => window.open("https://www.linkedin.com/in/ecni")}><AiFillLinkedin className={styles.icon}/></a>
      <a onClick={() => window.open("https://www.github.com/ecni19")}><AiFillGithub className={styles.icon}/></a>
      <a onClick={() => window.open('mailto:ericni2000@gmail.com')}><AiFillMail className={styles.icon}/></a>
    </div>
  )
}