import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
  let modalOpen = props.open;
  return (
    <div>
      {modalOpen ? 
        <div className={styles.container}>
          <div className={styles.modalMain}>
            <button onClick={() => !modalOpen}>Close</button>
          </div>
        </div> 
        : <div></div>}
    </div>
  );
}