import React from 'react';
import styles from './Profile.module.css';
import profilePic from './profilepic.jpeg';
// FullName Component
const Profile = ({ name }) => {
    return (
        <div className={styles.Profile}>

            <div className={styles.ProfilePic}>
            <img src={profilePic} alt="Profile" className={styles.ProfilePic} />
            </div>

            <div className={styles.info}>
                <b>Full Name:</b> Chun Ho
            </div>

            <div className={styles.info}>
                <b>Email:</b> ChunHo@gmail.com
            </div>
            
            <div className={styles.info}>
                <b>School:</b> Singapore Poly
            </div>

            <div className={styles.info}>
                <b>About:</b> I like fish soup noodles 
            </div>

        </div>
    );
};

export default Profile;

