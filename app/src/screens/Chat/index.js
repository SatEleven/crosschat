import styles from "./Chat.module.scss";
import img from "../../media/hackathonlogo.png";
import ChatBubble from "react-chat-bubble";
import { useState } from "react";

const Chat = (props) => {
  const [messages, setMessages] = useState([
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 1,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
    {
      type: 0,
      image: "cat.jpg",
      text: "Hello, good morning!!!!",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.flex1}>
        <div className={styles.groupProfile}>
          {/* <img className={styles.profile} src={img} alt="alt"/>
              <img className={styles.profile} src={img} alt="alt"/>
              <img className={styles.profile} src={img} alt="alt"/>
              <img className={styles.profile} src={img} alt="alt"/> */}
        </div>
        <div className={styles.members}>
          <div className={styles.membersLabel}>Chat members</div>
          <ul>
            <li>
              <div className={styles.puf}>
                <div className={styles.profile} />
                <div className={styles.username}>Nathan Jauhari</div>
                <div className={styles.flag} />
              </div>
            </li>
            <li>
              <div className={styles.puf}>
                <div className={styles.profile} />
                <div className={styles.username}>Junhee Chen</div>
                <div className={styles.flag} />
              </div>
            </li>
            <li>
              <div className={styles.puf}>
                <div className={styles.profile} />
                <div className={styles.username}>Sooyoung Han</div>
                <div className={styles.flag} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.flex2}>
        <div className={styles.topic}>Topic 1</div>
        <ChatBubble messages={messages} />
        {/* // <div className={styles.bubbleRight}>
        //   <div>Message 2</div>
        // </div>
        // <div className={styles.bubbleLeft}>
        //   <div>Message 1</div>
        // </div> */}
      </div>
      <div className={styles.flex3}>
        <div className={styles.buttons}>
          <button className={styles.loginButton}>Exit</button>
          <button className={styles.loginButton}>Exit</button>
          <button className={styles.loginButton}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
