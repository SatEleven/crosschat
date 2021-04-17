import styles from "./Chat.module.scss";
import img from "../../media/hackathonlogo.png";
import ChatBubble from "react-chat-bubble";
import { useState } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {useRef} from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyASYTfURMzxjr6G-bhNxlDAwh1Oz112o_w",
  authDomain: "crosschat-e1721.firebaseapp.com",
  projectId: "crosschat-e1721",
  storageBucket: "crosschat-e1721.appspot.com",
  messagingSenderId: "257343244836",
  appId: "1:257343244836:web:7144900a612e607f76a6b1",
  measurementId: "G-ZXGMYMD70S",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = (props) => {
  const [user] = useAuthState(auth);
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
  ]);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

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
        {user ? <ChatRoom /> : <SignIn/>}
        {/* <ChatBubble messages={messages} /> */}
        {/* // <div className={styles.bubbleRight}>
        //   <div>Message 2</div>
        // </div>
        // <div className={styles.bubbleLeft}>
        //   <div>Message 1</div>
        // </div> */}
      </div>
      <div className={styles.flex3}>
        <div className={styles.buttons}>
          <button className={styles.button}>Random topic</button>
          <button className={styles.button}>Exit</button>
          <button className={styles.connectButton} onClick={signInWithGoogle}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

// const SignOut = () => {
//   return (
//     auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
//   );
// };

// const ChatRoom = () => {
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdBy").limit(25);
//   const [messages] = UseCollectionData(query, { idField: "id" });

//   return (
//     <>
//       <div>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       </div>
//     </>
//   );
// };

// const ChatMessage = (props) => {
//   const { text, uid } = props.message;
//   return <p>{text}</p>;
// };

export default Chat;
