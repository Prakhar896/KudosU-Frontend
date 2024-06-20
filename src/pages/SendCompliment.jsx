import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Spacer, Switch, Text, Textarea, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import server from '../networking'

function SendCompliment() {
    const toast = useToast()
    const navigate = useNavigate()

    const [note, setNote] = useState("")
    const [to, setTo] = useState("")
    const [remainAnon, setAnon] = useState(false)

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

    const handleNoteValueChange = (e) => setNote(e.target.value)
    const handleToValueChange = (e) => setTo(e.target.value)
    const handleAnonValueChange = (e) => setAnon(e.target.checked)

    function sendCompliment() {
        server.post("/api/sendCompliment", {
            "email": import.meta.env.VITE_STATIC_EMAIL,
            "password": import.meta.env.VITE_STATIC_PASSWORD,
            "to": to,
            "text": note,
            "isAnonymous": remainAnon ? "True": "False"
        })
        .then(res => {
            if (res.status == 200) {
                if (res.data.startsWith("SUCCESS")) {
                    showToast("Success", "Compliment sent!", 5000, true, "success")
                    navigate("/")
                    return
                } else if (res.data == "ERROR: Recipient does not exist.") {
                    showToast("Error", "Recipient does not exist.", 5000, true, "error")
                    return
                } else {
                    console.log("ERROR: Unknown response when sending compliment; response: " + res.data)
                    showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
                    return
                }
            } else {
                console.log("ERROR: Non-200 response when sending compliment; response: " + res.data)
                showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
                return
            }
        })
        .catch(err => {
            console.log("ERROR: Failed to send compliment; error: " + err)
            showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
            return
        })
    }

    function checkSentimentAndSend() {
        if (!to || to.length == "0") {
            showToast("Error", "Please enter a recipient to send to.", 5000, true, "error")
            return
        }
        if (!note || note.length == "0") {
            showToast("Error", "Please enter a note to send.", 5000, true, "error")
            return
        }

        server.post("/api/getSentiment", {
            "text": note
        })
            .then(res => {
                if (res.status == 200) {
                    if (res.data.startsWith("SUCCESS")) {
                        const sentiment = res.data.substring("SUCCESS: ".length)
                        if (sentiment != "Positive") {
                            showToast("Error", "Please enter a positive note to send!", 5000, true, "error")
                            return
                        } else {
                            // continue
                            sendCompliment()
                        }
                    } else {
                        console.log("ERROR: Unknown response when fetching sentiment; response: " + res.data)
                        showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
                        return
                    }
                } else {
                    console.log("ERROR: Non-200 response when fetching sentiment; response: " + res.data)
                    showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
                    return
                }
            })
            .catch(err => {
                console.log("ERROR: Failed to fetch sentiment; error: " + err)
                showToast("Error", "Something went wrong. Try again.", 5000, true, "error")
                return
            })
    }

    return (
        <Box>
            <HStack mb={"10px"}>
                <Link to={"/"}><ChevronLeftIcon boxSize={7} alignItems={"flex-start"} /></Link>
                <Spacer />
            </HStack>
            <VStack alignItems={'stretch'} mb={"30px"}>
                <Heading as={"h2"} textAlign={"left"}>Send Compliment</Heading>
                <Text color={"gray"} textAlign={"left"}>Send a compliment to someone you care about!</Text>
            </VStack>
            <FormControl isRequired>
                <FormLabel>To</FormLabel>
                <Input type='text' p={"10px"} h={"10%"} mb={"20px"} placeholder='e.g Tim Cook' value={to} onChange={handleToValueChange} />
                <FormLabel>Share a picture!</FormLabel>
                <Input type='file' p={"10px"} h={"10%"} mb={"20px"} />
                <FormLabel>Heartfelt Note</FormLabel>
                <Textarea placeholder='e.g I love your work!' value={note} onChange={handleNoteValueChange} mb={"20px"} />
                <HStack>
                    <FormLabel>Send as anonymous?</FormLabel>
                    <Spacer />
                    <Switch id='remainAnon' checked={remainAnon} onChange={handleAnonValueChange} />
                </HStack>
                <Button type='submit' mt={"20px"} colorScheme={'blue'} width={"100%"} onClick={checkSentimentAndSend}>Send!</Button>
            </FormControl>
        </Box>
    )
}

export default SendCompliment