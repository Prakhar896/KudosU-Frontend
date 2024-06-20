import React, { useEffect, useState } from 'react'
import SampleComponent from '../components/SampleComponent'
import server from "../networking"

function Home() {
    const [health, setHealth] = useState("Checking...")

    useEffect(() => {
        server.get("/api/health")
            .then(res => {
                console.log("Health: ", res.data)
                setHealth(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <SampleComponent />
            <p>{health}</p>
        </>
    )
}

export default Home