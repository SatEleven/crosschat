import styles from "./Profile.module.scss";

//import { link } from "react-router-dom";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formAbout}>
          <div className={styles.imageDiv}>
            <div className={styles.formCircle}></div>
          </div>
          <div className={styles.formEnterBox}>
            <div>Username</div>
            <div>Firstname</div>
            <div>Last name</div>
            <div>Email Address</div>
            <div className={styles.editProfile}> Edit Profile</div>
          </div>
        </div>
        <div className={styles.formInterest}>
          <div className={styles.formInterestBox}>
            <div className={styles.formInterestForm}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
