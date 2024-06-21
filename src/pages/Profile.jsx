import React from 'react';
import profilePic from '../assets/profilepic.png';
import MenuDrawer from '@/components/menuDrawer';

// FullName Component
const Profile = () => {
    return (
        <>
            <MenuDrawer />
            <div className={"ProfilePic"}>

                <div className={"ProfilePic"}>
                    <img src={profilePic} alt="Profile" className={"ProfilePic"} />
                </div>

                <div className={"info"}>
                    <b>Full Name:</b> John Doe
                </div>

                <div className={"info"}>
                    <b>Email:</b> johndoe@gmail.com
                </div>

                <div className={"info"}>
                    <b>School:</b> Singapore Poly
                </div>

                <div className={"info"}>
                    <b>About:</b> I like fish soup noodles
                </div>

            </div>
        </>
    );
};

export default Profile;

