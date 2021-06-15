import React from "react";
import styles from "./ProjectCard.module.css";

export default function Projectcard(props) {
  const arr = [];
  const renderTechStack = () => {
    props.techArr.forEach(e => {
      arr.push(<li className={styles.techItems}>{e}</li>);
    });
    return arr;
  }
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.name}</h1>
        <h4 className={styles.desc}>{props.shortDesc}</h4>
        <h4 className={styles.date}>{props.date}</h4>
        <h4 className={styles.longDesc}>{props.longDesc}</h4>
        <ul className={styles.techList}>{renderTechStack()}</ul>
      </div>
    </div>
  );
}