import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Spacer, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import server from '../networking'

function SendCompliment() {
    const [note, setNote] = useState("")

    const handleInputChange = (e) => setNote(e.target.value)

    function checkSentimentAndSend(e) {
        console.log("ran")
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
                <FormLabel>Share a picture!</FormLabel>
                <Input type='file' p={"10px"} h={"10%"} mb={"20px"} />
                <FormLabel>Heartfelt Note</FormLabel>
                <Textarea placeholder='e.g I love your work!' value={note} onChange={handleInputChange} />
                <Button type='submit' mt={"20px"} colorScheme={'blue'} width={"100%"} onClick={checkSentimentAndSend}>Send!</Button>
            </FormControl>
        </Box>
    )
}

export default SendCompliment