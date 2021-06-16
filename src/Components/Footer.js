import React from "react";
import styles from "./Footer.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillIdcard} from "react-icons/ai";
import resume from "./files/Resume.pdf";

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <a onClick={() => window.open("https://www.linkedin.com/in/ecni")}><AiFillLinkedin className={styles.icon}/></a>
        <a onClick={() => window.open("https://www.github.com/ecni19")}><AiFillGithub className={styles.icon}/></a>
        <a onClick={() => window.open('mailto:ericni2000@gmail.com')}><AiFillMail className={styles.icon}/></a>
        <a onClick={() => window.open(resume)}><AiFillIdcard className={styles.icon}/></a>
      </div>
      <p className={styles.copyright}>&#169; Eric Ni 2021</p>
    </div>
  )
}