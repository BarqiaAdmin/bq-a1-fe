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
    Text,
    Divider
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import Router from 'next/router';   

const IndexPage = () => {

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

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
        localStorage.setItem('repeatPassword', e.target.value)
    }

    let isTerminosYCondicionesClicked = false;

    const handleTerminosYCondiciones = (e) => {
        console.log('Valor del checkbox: ')
        console.log(e.target.checked)
        isTerminosYCondicionesClicked = !isTerminosYCondicionesClicked
    }

    const crearUsuario = () => {
        fetch('https://bq-a1-be.vercel.app/crearUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password'),
                fotoPerfil: localStorage.getItem('fotoPerfil'),
                nombre: localStorage.getItem('nombre'),
                apellido: localStorage.getItem('apellido'),
                urlDeImagen: localStorage.getItem('urlDeImagen'),
                edad: localStorage.getItem('edad'),
                pais: localStorage.getItem('pais'),
                nivelDeIngles: localStorage.getItem('nivelDeIngles'),
                certificaciones: [],
                social: {
                    facebook: '',
                    instagram: '',
                    tiktok: '',
                },
                pieHabil: localStorage.getItem('pieHabil'),
                posicion: localStorage.getItem('posicion'),
                genero: localStorage.getItem('genero'),
                estatura: localStorage.getItem('estatura'),
                peso: localStorage.getItem('peso'),
                club: localStorage.getItem('club'),
                categoria: localStorage.getItem('categoria'),
                condicion: localStorage.getItem('condicion'),
                presupuesto: localStorage.getItem('presupuesto'),
                clubesPrevios: [],
                imagenesGaleriaArray: localStorage.getItem('imagenesGaleriaArray'),
                videosGaleria: localStorage.getItem('videosGaleria'),
                pases: localStorage.getItem('pases'),
                tiros: localStorage.getItem('tiros'),
                resistencia: localStorage.getItem('resistencia'),
                visionDeJuego: localStorage.getItem('visionDeJuego'),
                unoVsUno: localStorage.getItem('unoVsUno'),
                tirosLibres: localStorage.getItem('tirosLibres'),
                marca: localStorage.getItem('marca'),
                juegoAereo: localStorage.getItem('juegoAereo')
            })
        })
    }

    const handleRegister = () => {
        //console.log('Signing up');
        let inputEmail = (document.getElementById('inputEmail') as HTMLInputElement).value;
        let inputPassword = (document.getElementById('inputPassword') as HTMLInputElement).value;
        let inputPasswordRepeat = (document.getElementById('inputPasswordRepeat') as HTMLInputElement).value;
        let checkboxTerminosYCondiciones = (document.getElementById('checkboxTerminosYCondiciones') as HTMLInputElement).value;

        if (inputEmail == '') {
            window.alert('No se ha ingresado un correo electrónico');
        } else 
        if (inputPassword == '') {
            window.alert('No se ha ingresado una contraseña');
        } else
        if (inputPasswordRepeat == '') {
            window.alert('Por favor complete el campo de "Repetir contraseña"');
        } else
        if (!(inputPassword == inputPasswordRepeat)) {
            window.alert('Las contraseñas no coinciden');
        } else 
        if (!isTerminosYCondicionesClicked) {
            window.alert('Debes aceptar los términos y condiciones');
        } else {
            crearUsuario();
            Router.push({
                pathname: '/Onboarding/NuevoJugador'
            });
        }
    };

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');

        localStorage.setItem('email', '');
        localStorage.setItem('fotoPerfil', '')
        localStorage.setItem('logInPassword', '');
        localStorage.setItem('fotoPerfil', '');
        localStorage.setItem('nombre', '');
        localStorage.setItem('apellido', '');
        localStorage.setItem('urlDeImagen', '');
        localStorage.setItem('edad', '');
        localStorage.setItem('pais', '');
        localStorage.setItem('nivelDeIngles', '');
        localStorage.setItem('pieHabil', '');
        localStorage.setItem('posicion', '');
        localStorage.setItem('genero', '');
        localStorage.setItem('estatura', '');
        localStorage.setItem('peso', '');
        localStorage.setItem('club', '');
        localStorage.setItem('categoria', '');
        localStorage.setItem('condicion', '');
        localStorage.setItem('presupuesto', '');
        localStorage.setItem('imagenesGaleriaArray', '');
        localStorage.setItem('videosGaleria', '');
        localStorage.setItem('pases', 'false')
        localStorage.setItem('tiros', 'false')
        localStorage.setItem('resistencia', 'false')
        localStorage.setItem('visionDeJuego', 'false')
        localStorage.setItem('unoVsUno', 'false')
        localStorage.setItem('tirosLibres', 'false')
        localStorage.setItem('marca', 'false')
        localStorage.setItem('juegoAereo', 'false')
    }, [])

    return (
        <Container
            h='100%'
            w='100%'
        >
            <Image className="artwork2" alt='' 
                position="fixed"
                bottom="0"
                left="0"
                h='100%'
                zIndex="0"
                src='/artwork2.png'
            />
            <Image className="artwork3" alt='' 
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
                            <Input id='inputEmail' type="email" placeholder="Ingresa tu email" onChange={ handleEmailChange } value={email} style={{ marginRight: "20px" }}/>
                            <Text display="none" color="green">Debes ingresar una dirección de correo electrónico válida.</Text>
                            <Text display="none" color="red">La dirección de correo electrónico no es válida.</Text>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input id='inputPassword' type="password" placeholder="Ingresa tu contraseña" onChange={ handlePasswordChange } value={password}/>
                            <Text display='none' color="green">La contraseña debe tener por lo menos 8 caracteres.</Text>
                            <Text display='none' color="red">La contraseña no es válida.</Text>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Repetir contraseña</FormLabel>
                            <Input id='inputPasswordRepeat' type="password" placeholder="Repetí tu contraseña" onChange={ handleRepeatPasswordChange } value={repeatPassword}/>
                            <Text display='none' color="green">La contraseña debe tener por lo menos 8 caracteres.</Text>
                            <Text display='none' color="red">La contraseña no es válida o no corresponde a la dirección de correo electrónico.</Text>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={5}>
                        <Checkbox id="checkboxTerminosYCondiciones" fontSize='10px' onChange={ handleTerminosYCondiciones }>
                            Acepto los <Link className="link1" href="https://scoutinglabs.com/politicas.pdf">Términos y condiciones</Link>
                        </Checkbox>
                    </GridItem>
                    <GridItem colSpan={3} fontSize='14px' textAlign='right'>
                        <Link className="link1" href="Sesion/PassRecovery">Olvidé mi contraseña</Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Link className="link1" onClick={handleRegister}>
                            <Button
                                w="full"
                                className="btn2"
                            >
                                Registrarme
                            </Button>
                        </Link>
                    </GridItem>
                    {/**
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/google.png" height='20px' width='20px'/>&nbsp;
                            Continuar con Google
                        </Button>
                    </GridItem>
                    
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/facebook.png" height='20px' width='20px'/>&nbsp;
                            Continuar con Facebook
                        </Button>
                    </GridItem>
                     */}
                    <GridItem colSpan={8} marginTop='25px'>
                        <Box textAlign="center">
                            <VStack>
                                <Text>Ya tengo una cuenta:</Text>
                                <Link className="link1" href="Sesion/LogIn">
                                    <Button type="button" className='btn1'>
                                        Iniciar sesión
                                    </Button>
                                </Link>
                            </VStack>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default IndexPage;