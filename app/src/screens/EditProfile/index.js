import styles from "./EditProfile.module.scss";
import watermelon from "../../media/watermelon logo.jpeg";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
        const history = useHistory();
    const goLogin = () => history.push('/authentication');
    return(
        <div className = {styles.container}>
            <div className = {styles.formInterestBox}>
                <div className = {styles.formInterestForm}>
                    <div className={styles.formEnterBox}>
                        <p>Change Picture</p>
                        <div className = {styles.editProfile}>
                            
                            <input className ={styles.editButton} id='fileid' type='file' name='filename'></input>         
                           
                            
                            
                        </div>
                        <div>
                            <input type="text" alt="username" placeholder="Change Username"></input>
                        </div>
                        <div>
                            <input type="text" alt="email" placeholder="Change Email"></input>
                        </div>
                        <div className = {styles.editProfile}>
                            <button className = {styles.editButton}
                            onClick = {goLogin}
                            >
                            Change Password
                            </button>
                        </div>

                            



                    </div>
                </div>
                <div className = {styles.imageDiv}>
                    <div className = {styles.formCircle}>
                        <img src={watermelon}></img>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default EditProfile;

