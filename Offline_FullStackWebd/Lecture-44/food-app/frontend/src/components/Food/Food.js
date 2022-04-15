import React from "react";
import styles from "./Food.module.css";

const Food = (props) => {
  return (
    <li className={styles.foodbox}>
      <div className={styles.foodItem}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.desc}>{props.desc}</div>
        <div className={styles.price}>$ {props.price}</div>
      </div>
    </li>
  );
};

export default Food;
