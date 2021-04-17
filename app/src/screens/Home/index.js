import React from "react";
import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.dividerLeft}>
        <h1 className={styles.title}>Connect. Exchange. Learn.</h1>
        <h2 className={styles.subtitle}>
          Connect with people from different background,
        </h2>
        <h2 className={styles.subtitle}>
          Share your culture, Learn new languages.
        </h2>
        <button className={styles.button}>Get started</button>
      </div>
      <div className={styles.dividerRight}></div>
    </div>
  </div>
);
export default Home;
