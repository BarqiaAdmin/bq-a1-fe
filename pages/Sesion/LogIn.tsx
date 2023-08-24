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
    const [fotoPerfil, setFotoPerfil] = useState('');
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('');
    const [club, setClub] = useState('');
    const [posicion, setPosicion] = useState(''); 
    const [categoria, setCategoria] = useState(''); 
    const [estatura, setEstatura] = useState(''); 
    const [peso, setPeso] = useState(''); 
    const [edad, setEdad] = useState(''); 
    const [nacionalidad, setNacionalidad] = useState(''); 
    const [pieHabil, setPieHabil] = useState('');
    const [nivelDeIngles, setNivelDeIngles ] = useState('');
    const [certificaciones, setCertificaciones] = useState('');
    const [condicion, setCondicion] = useState('');
    const [presupuesto, setPresupuesto ] = useState('');
    
    
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

    const iniciarSesion = async () => {
        let inputEmail = (document.getElementById('inputEmail') as HTMLInputElement).value;
        let inputPassword = (document.getElementById('inputPassword') as HTMLInputElement).value;

        if (inputEmail == '') {
            window.alert('No se ha ingresado un correo electrónico');
        } else 
        if (inputPassword == '') {
            window.alert('No se ha ingresado una contraseña');
        }

        await fetch('https://bq-a1-be.vercel.app/buscarUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password')
            })
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            localStorage.setItem('email', response.email);
            localStorage.setItem('password', response.password);
            localStorage.setItem('fotoPerfil', response.fotoPerfil);
            localStorage.setItem('nombre', response.nombre);
            localStorage.setItem('apellido', response.apellido);
            localStorage.setItem('urlDeImagen', response.urlDeImagen);
            localStorage.setItem('edad', response.edad);
            localStorage.setItem('pais', response.pais);
            localStorage.setItem('nivelDeIngles', response.nivelDeIngles);
            localStorage.setItem('pieHabil', response.pieHabil);
            localStorage.setItem('posicion', response.posicion);
            localStorage.setItem('genero', response.genero);
            localStorage.setItem('estatura', response.estatura);
            localStorage.setItem('peso', response.peso);
            localStorage.setItem('club', response.club);
            localStorage.setItem('categoria', response.categoria);
            localStorage.setItem('condicion', response.condicion);
            localStorage.setItem('presupuesto', response.presupuesto);
            
            // Imagenes
            let imagenesGaleriaArray = response.imagenesGaleriaArray
            //localStorage.setItem('imagenesGaleriaArray', imagenesGaleriaArray);
            
            // Videos
            let videosGaleria = response.videosGaleria;
            videosGaleria = videosGaleria.toString();
            console.log(videosGaleria);
            localStorage.setItem('videosGaleria', videosGaleria);

            localStorage.setItem('pases', response.pases)
            localStorage.setItem('tiros', response.tiros)
            localStorage.setItem('resistencia', response.resistencia)
            localStorage.setItem('visionDeJuego', response.visionDeJuego)
            localStorage.setItem('unoVsUno', response.unoVsUno)
            localStorage.setItem('tirosLibres', response.tirosLibres)
            localStorage.setItem('marca', response.marca)
            localStorage.setItem('juegoAereo', response.juegoAereo)
        })
        
        Router.push({
            pathname: '/Usuario/Perfil'
        });
        
        /*
        Router.push({
            pathname: '/Usuario/Perfil'
        })
        */
    }

    /*
    const iniciarSesion = () => {
        axios({
            method: 'post',
            url: 'https://bq-a1-be.vercel.app//leerUsuario',
            data: {
                email: localStorage.getItem('email'),
                password: localStorage.getItem('logInPassword'),
            }
        })
        Router.push({
            pathname: '/Usuario/Perfil'
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

                className="artwork2"

                position="fixed"
                bottom="0"
                left="0"
                h='100%'
                zIndex="0"
                src='/artwork2.png'
            />
            <Image alt='' 

                className="artwork3"

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
                            <Input id="inputEmail" type="email" placeholder="Ingresa tu email" onChange={handleEmailChange} style={{ marginRight: "15px" }}/>
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
                    {/**
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
                     */}
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