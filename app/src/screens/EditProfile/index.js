import styles from "./EditProfile.module.scss";
import watermelon from "../../media/watermelon logo.jpeg";

const editProfile = () => {
    
    return(
        <div className = {styles.container}>
            <div className = {styles.formInterestBox}>
                <div className = {styles.formInterestForm}>
                    <div className={styles.formEnterBox}>
                        <div className = {styles.editProfile}>
                            <button className = {styles.editButton}
                            //onClick = {goLogin}
                            >
                            Change Image          
                            </button>
                            
                        </div>
                        <div>
                            <input type="text" alt="username" placeholder="Change Username"></input>
                        </div>
                        <div>
                            <input type="text" alt="email" placeholder="Change Email"></input>
                        </div>
                        <div className = {styles.editProfile}>
                            <button className = {styles.editButton}
                            //onClick = href = "./authentication"
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

export default editProfile;

