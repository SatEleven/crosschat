import styles from "./About.module.scss";
import { useHistory } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.content}>
      <div>
        <h2>Connect. Exchange. Learn.</h2>
        <h1>About</h1>

        <p>
          CrossChat is a great way to meet new international friends and
          exchange each other's culture and language.
        </p>
        <p>
          This service provides features to fix each other's sentences and have
          translation service in case you don't understand it properly.{" "}
        </p>
        <p>
          If you enjoy meeting awesome people, and like to learn their culture.
        </p>
        <p>You have came to the right place!</p>
        <p> Sign up and start CrossChating!</p>
      </div>
    </div>
  );
};

export default About;
