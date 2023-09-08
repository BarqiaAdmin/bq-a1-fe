import { 
    Container,
    Box,
    VStack,
    HStack,
    Image,
    Heading,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Button
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

import { useState } from 'react';

import Router from 'next/router';

const PassRecovery = () => {

    const [email, setEmail] = useState('');

    const sendPasswordRecoveryRequest = () => {
        fetch('https://bq-a1-be.vercel.app/passwordRecoveryRequest', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        Router.push({
            pathname: '/Sesion/PassRecMailSent'
        });
    }

    return(
        <Container
            h='100%'
            w='100%'
        >
            <VStack
                position="relative"
            >
                <Heading>Restablecer contraseña</Heading>
                <FormControl>
                    <FormLabel>Ingresa tu correo electrónico para recuperar tu contraseña:</FormLabel>
                    <Input type='email' placeholder="Correo electrónico" onChange={(e) => {setEmail(e.target.value)}} />
                </FormControl>
                <HStack>
                    <Link href="/">Volver</Link>
                    <Button onClick={sendPasswordRecoveryRequest}>Enviar código</Button>
                </HStack>
            </VStack>
        </Container>
    )
}

export default PassRecovery;