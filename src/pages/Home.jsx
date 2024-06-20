import React, { useEffect, useState } from 'react'
import SampleComponent from '../components/SampleComponent'
import server from "../networking"
import { Button } from "@/components/ui/button"
import { Container, Heading, List } from '@chakra-ui/react'

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

    if (loading != "done") {
        return (
            <div id='content'>
                <h3><strong>Loading your ✨ fresh compliments ✨...</strong></h3>
                <p>{loading}</p>
            </div>
        )
    }

    return (
        <Container>
            <Heading as={"h2"} textAlign={"left"}>Kudos</Heading>
            <List>
                
            </List>
        </Container>
    )
}

export default Home