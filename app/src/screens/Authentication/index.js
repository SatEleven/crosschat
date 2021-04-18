import styles from "./Authentication.module.scss";
import { useHistory } from "react-router-dom";

const Authentication = () => {
    const history = useHistory();
    const goLogin = () => history.push('/authentication');
    const goNext = () => history.push('/forgotPassword')

    return(
        <div className = {styles.container}>
            <div className={styles.formInterestBox}>
                <div className = {styles.formInterestForm}>
                    <div className={styles.formEnterBox}>
                        <p>Please enter authentication code sent to email</p>
                        <div></div>
                        <button className = {styles.editButton} onClick = {goNext}>Next</button>
                        <a href = {goLogin}>Click if code was not received</a>


                    </div>

                </div>
                    
            </div>
        </div>


    );
};

export default Authentication;