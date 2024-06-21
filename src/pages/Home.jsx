import React, { useEffect, useState } from 'react'
import SampleComponent from '../components/SampleComponent'
import server from "../networking"
import { Box, Center, Container, Flex, HStack, Heading, Image, List, ListItem, Spacer, Spinner, Text, VStack, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Home() {
    const [loading, setLoading] = useState("")
    const [complimentsData, setComplimentsData] = useState({})

    useEffect(() => {
        server.post("/api/getCompliments", {
            "email": import.meta.env.VITE_STATIC_EMAIL,
            "password": import.meta.env.VITE_STATIC_PASSWORD
        })
            .then(res => {
                console.log(res.data)
                setComplimentsData(res.data)
                setLoading("done")
            })
            .catch(err => {
                console.log("ERROR: Failed to fetch compliments; error: " + err)
                setLoading("Something went wrong. Please reload.")
            })
    }, [])

    useEffect(() => console.log(complimentsData), [complimentsData])

    if (loading != "done") {
        return (
            <Center>
                <VStack>
                    <Spinner />
                    <Heading as={"h3"}>Loading your ✨ fresh compliments ✨...</Heading>
                    <Text>{loading}</Text>
                </VStack>
            </Center>
        )
    }

    return (
        <Box>
            <HStack mb={"30px"}>
                <Heading as={"h2"} textAlign={"left"}>Kudos!</Heading>
                <Spacer />
                <Link to={"/sendCompliment"}><Button><AddIcon color={"blue"} /></Button></Link>
            </HStack>
            <VStack spacing={"20px"}>
                {
                    Object.values(complimentsData).map((compliment, index) => {
                        return (
                            <Box key={index} bg={"gray.100"} p={"10px"} rounded={"10px"} alignItems={"center"} border={compliment["recipientAcknowledged"] ? "" : "3px solid teal"}>
                                <HStack alignItems={"flex-start"} spacing={"15px"}>
                                    <Image maxHeight={"100%"} maxWidth={"35%"} display={"block"} objectFit={"cover"} src={compliment["imgURL"]} rounded={"10px"} />
                                    <VStack alignItems={"flex-start"} textAlign={"left"}>
                                        <Text>{compliment["text"]}</Text>
                                        <Text size={"xs"} color={"gray.500"}>From {compliment["from"]}</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        )
                    })
                }
            </VStack>
        </Box>
     )
}

export default Home;
