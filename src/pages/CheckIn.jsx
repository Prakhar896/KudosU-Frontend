import React from 'react';
// import styles from './CheckIn.module.css';
import RadioGroupRating from './SatisfactionBar.jsx';
import MenuDrawer from '@/components/menuDrawer';

const CheckIn = () => {
    return (
        <>
            <MenuDrawer />
            <div className={"CheckIn"}>
                <div className={"header"}>Check In</div>

                {/* <RadioGroupRating className={"SatisfactionBar"} /> */}

                <input type="text" className={"textbox"} placeholder="Tell me about your week" />

                <button className={"buttonSubmit"}>
                    Submit
                </button>

            </div>
        </>
    );
}

export default CheckIn;