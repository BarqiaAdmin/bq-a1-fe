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
        let inputEmail = (document.getElementById('inputEmail') as HTMLInputElement).value;
        let inputPassword = (document.getElementById('inputPassword') as HTMLInputElement).value;

        if (inputEmail == '') {
            window.alert('No se ha ingresado un correo electrónico');
        } else 
        if (inputPassword == '') {
            window.alert('No se ha ingresado una contraseña');
        }

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
        }).then((response) => {
            console.log(response);
            localStorage.setItem('email', response.email),
            localStorage.setItem('password', response.password),
            localStorage.setItem('nombre', response.nombre),
            localStorage.setItem('apellido', response.apellido),
            localStorage.setItem('urlDeImagen', response.urlDeImagen),
            localStorage.setItem('edad', response.edad),
            localStorage.setItem('nacionalidad', response.nacionalidad),
            localStorage.setItem('nivelDeIngles', response.nivelDeIngles),
            localStorage.setItem('pieHabil', response.pieHabil),
            localStorage.setItem('posicion', response.posicion),
            localStorage.setItem('genero', response.genero),
            localStorage.setItem('estatura', response.estatura),
            localStorage.setItem('peso', response.peso),
            localStorage.setItem('club', response.club),
            localStorage.setItem('categoria', response.categoria),
            localStorage.setItem('condicion', response.condicion),
            localStorage.setItem('presupuestoresponse', response.presupuesto)
        })
        
        Router.push({
            pathname: '/Usuario/Perfil-beta'
        });
        
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
            url: 'https://bq-a1-be.vercel.app/leerUsuario',
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
                position="absolute"
                marginTop='25px'
            >
                <SimpleGrid columns={8} gap={2}>
                    <GridItem colSpan={8}>
                        <Image alt=''  src="/logo.png" />
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Heading>La plataforma para potenciar tu pasión</Heading>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input id="inputEmail" placeholder="Ingresa tu email" onChange={handleEmailChange}/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input id="inputPassword" type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange}/>
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
                            <Image alt=''  src="/google.png" />&nbsp;
                            Continuar con Google
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  
                            width="19px"
                            height="18px"
                            src="/facebook.png" />&nbsp;
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