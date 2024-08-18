import React from "react";
import styles from "../styles/Snowflakes.module.css";

const Snowflakes = () => {
  return (
    <div className={styles.snowflakes} aria-hidden="true">
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
    </div>
  );
};

export default Snowflakes;
