import styles from "./Profile.module.scss";

//import { link } from "react-router-dom";
const Profile = () => {
    return (
      <div className = {styles.container}>
        <div className = {styles.content}>
          <div className = {styles.formCircle}>
            <div className = {styles.formBox}>
              <div className = {styles.formBlueSmallBox}>
              Interests
              </div>
            </div>
            <div className = {styles.smallContainer} />
          </div>
        </div>
      </div>
    );
}

export default Profile;