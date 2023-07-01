import { 
    Container,
    Box,
    VStack,
    Image,
    Heading,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';

import { useState } from 'react';
import Router from 'next/router';

import axios from 'axios';

const LogIn = () => {
    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    const handleLogInEmail = (e) => {
        setLogInEmail(e.target.value)
        localStorage.setItem('logInEmail', e.target.value);
    }

    const handleLogInPassword = (e) => {
        setLogInPassword(e.target.value)
        localStorage.setItem('logInPassword', e.target.value);
    }

    const iniciarSesion = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5051/leerUsuario',
            data: {
                email: localStorage.getItem('logInEmail'),
                password: localStorage.getItem('logInPassword'),
            }
        })
        Router.push({
            pathname: '/Usuario/Perfil-beta'
        })
    }
    
    return (
        <Container
            h='100%'
            w='100%'
        >
            <Image alt='' 
                position="fixed"
                bottom="0"
                left="0"
                h='100%'
                zIndex="0"
                src='/artwork2.png'
            />
            <Image alt='' 
                position='fixed'
                top='0'
                right='0'
                p="40px"
                src='/artwork3.png'
            />
            <VStack
                position="relative"
            >
                <SimpleGrid columns={8}>
                    <GridItem colSpan={8}>
                        <Image alt=''  src="/logo.png" />
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Heading>La plataforma para potenciar tu pasión</Heading>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Ingresa tu email" onChange={handleLogInEmail}/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Ingresa tu contraseña" onChange={handleLogInPassword}/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8} textAlign="right">
                        <Link className="link1" href="PassRecovery">Olvidé mi contraseña</Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button
                            w="full"
                            className="btn1"

                            onClick={iniciarSesion}
                        >
                            Iniciar sesión
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/google.png" />
                            Continuar con Google
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  
                            width="19px"
                            height="18px"
                            src="/facebook.png" />
                            Continuar con Facebook
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Box textAlign="center">
                            ¿No tienes una cuenta? <Link className="link1" href="/">Regístrate aquí</Link>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default LogIn;