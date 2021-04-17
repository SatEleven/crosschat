import styles from "./PasswordReset.module.scss";

const PasswordReset = () => {

    return(
        <div className = {styles.container}>
            <div className={styles.formInterestBox}>
                <div className = {styles.formInterestForm}>
                    <div className={styles.formEnterBox}>
                        <p>New Password</p>
                        <div>
                            <input type="text" alt="newPassword" placeholder="New Password"></input>
                        </div>
                        <p>Confirm New Password</p>
                        <div>
                            <input type="text" placeholder="Confirm New Password"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PasswordReset;