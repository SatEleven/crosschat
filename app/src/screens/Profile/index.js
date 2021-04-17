import styles from "./Profile.module.scss";
import { useHistory } from "react-router-dom";

//import { Redirect } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  const goLogin = () => history.push('/');

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
            <div className={styles.editProfile}>
              <button
              className = {styles.editButton}
              onClick = {goLogin}
              >
                edit profile
              </button>
            </div>
          </div>
          

        </div>
        <div className={styles.formInterest}>
          <div className={styles.formInterestBox}>
            <div className={styles.formInterestForm}>
              <div className={styles.dropdown}>
                <button type="button" className={styles.plus}></button>
                <div className={styles.dropdownContent}>
                  <input type="text" id="interest" placeholder="Enter New Interest"></input>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Profile;