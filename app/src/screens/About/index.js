import styles from "./About.module.scss";
import { useHistory } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.content}>
      <div>
        <h1>About</h1>
        <p>blah blah blah :)</p>
      </div>
    </div>
  );
};

export default About;
