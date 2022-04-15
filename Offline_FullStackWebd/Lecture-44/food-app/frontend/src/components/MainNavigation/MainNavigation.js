import React from "react";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.head}>React Food</div>
      <div className={styles.login}>
        <div className={styles.item}>Login</div>
        <div className={styles.item}>Sign Up</div>
      </div>
    </nav>
  );
};

export default MainNavigation;
