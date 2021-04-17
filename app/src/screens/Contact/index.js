import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.content}>
      <div>
        <h3>HELP AND SUPPORT</h3>
        <h1>Contact</h1>
        <p>
          We’re here to help you with any problems on your journey. Simply call,
          email, or message us through social media.
        </p>
        <p>
          Call <a href="ph:0415000111">0415000111</a>
          from overseas 24 hours a day, seven days a week and we can help you
          get back online.
        </p>
        <p>
          If you like to email us, Please raise an equiry through
          asdfasdfasdf@gmail.com
        </p>
        <p>Thank you for your time and enjoying our service</p>
      </div>
    </div>
  );
};

export default Contact;
