import React from 'react';
// import styles from './CheckIn.module.css';
// import RadioGroupRating from './SatisfactionBar.jsx';
import MenuDrawer from '@/components/menuDrawer';
import { Button, HStack, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CheckIn = () => {
    const toast = useToast();
    const navigate = useNavigate()

    const showToast = (title, description, duration = 5000, isClosable = true, status = 'info', icon = null) => {
        if (!["success", "warning", "error", "info"].includes(status)) {
            status = "info"
        }

        const toastConfig = {
            title: title,
            description: description,
            duration: duration,
            isClosable: isClosable,
            status: status
        }
        if (icon != null) {
            toastConfig.icon = icon
        }

        toast(toastConfig)
    }

    const checkedIn = () => {
        navigate("/")
        showToast("Success", "Thanks for checking in! Come back next week!", 5000, true, "success")
    }

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

                <button className={"buttonSubmit"} onClick={checkedIn}>
                    Submit
                </button>

            </div>
        </>
    );
}

export default CheckIn;