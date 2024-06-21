import { Button, Center, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
            <Flex spacing={"10px"} flexDirection={"column"} justifyContent={"center"} h={"100vh"}>
                <Image src={"https://github.com/Prakhar896/KudosU-Backend/blob/main/LogoTransparent.png?raw=true"} height={"150px"} mb={"50px"} />
                <Link to={"/"}><Button width={"100%"} colorScheme={'blue'}>Login</Button></Link>
            </Flex>
    )
}

export default Login