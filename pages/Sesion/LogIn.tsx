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
    theme,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import Router from 'next/router';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        localStorage.setItem('email', e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        localStorage.setItem('password', e.target.value);
    }

    /*
    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
        localStorage.setItem('repeatPassword', e.target.value)
    }
    */

    const iniciarSesion = () => {
        fetch('https://bq-a1-be.vercel.app/buscarUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password')
            })
        }).
            then((res) => {
                console.log(res)
            })
        7


        
        /*
        Router.push({
            pathname: '/Usuario/Perfil-beta'
        })
        */
    }

    /*
    const iniciarSesion = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5051/leerUsuario',
            data: {
                email: localStorage.getItem('email'),
                password: localStorage.getItem('logInPassword'),
            }
        })
        Router.push({
            pathname: '/Usuario/Perfil-beta'
        })
    }
    */

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');
    })

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
                            <Input placeholder="Ingresa tu email" onChange={handleEmailChange}/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange}/>
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