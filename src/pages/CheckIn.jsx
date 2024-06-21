import React from 'react';
// import styles from './CheckIn.module.css';
// import RadioGroupRating from './SatisfactionBar.jsx';
import MenuDrawer from '@/components/menuDrawer';
import { Button, HStack, Text } from '@chakra-ui/react';

const CheckIn = () => {
    return (
        <>
            <MenuDrawer />
            <div className={"CheckIn"}>
                <div className={"header"}>Check In</div>

                <HStack spacing={"10px"} my={"20px"} p={"10px"}>
                    <Button size={"lg"}><Text fontSize={"27"}>😵</Text></Button>
                    <Button size={"lg"}><Text fontSize={"27"}>🙁</Text></Button>
                    <Button size={"lg"}><Text fontSize={"27"}>😑</Text></Button>
                    <Button size={"lg"}><Text fontSize={"27"}>🙂</Text></Button>
                    <Button size={"lg"}><Text fontSize={"27"}>😁</Text></Button>
                </HStack>

                <input type="text" className={"textbox"} placeholder="Tell me about your week" />

                <button className={"buttonSubmit"}>
                    Submit
                </button>

            </div>
        </>
    );
}

export default CheckIn;