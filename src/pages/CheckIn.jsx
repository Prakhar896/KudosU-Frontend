import React from 'react';
import styles from './CheckIn.module.css';


import RadioGroupRating from './SatisfactionBar.jsx';


console.log('hi');
const CheckIn = () => {
    return (
        <div className={styles.CheckIn}>
            <div className={styles.header}>Check In</div>

            <RadioGroupRating className={styles.SatisfactionBar}/>

            <input type="text" className={styles.textbox} placeholder="Tell me about your week" />

            <button className={styles.buttonSubmit}>
                Submit
            </button>

        </div>
    );
}

export default CheckIn;