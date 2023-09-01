import {
    VStack,
    HStack,
    Text,
    Image,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    Button,
    Link,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Switch,
    Badge
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import { ExternalLinkIcon, BellIcon } from '@chakra-ui/icons'

import Router from 'next/router';

const NavBar = (props) => {

    const [fotoPerfil, setFotoPerfil] = useState('');

    useEffect(() => {
        setFotoPerfil(localStorage.getItem('fotoPerfil'))
    },[])

    const cerrarSesion = () => {
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
        localStorage.setItem('imagenesGaleria', '');
        localStorage.setItem('videosGaleria', '');
        localStorage.setItem('pases', 'false')
        localStorage.setItem('tiros', 'false')
        localStorage.setItem('resistencia', 'false')
        localStorage.setItem('visionDeJuego', 'false')
        localStorage.setItem('unoVsUno', 'false')
        localStorage.setItem('tirosLibres', 'false')
        localStorage.setItem('marca', 'false')
        localStorage.setItem('juegoAereo', 'false')

        Router.push({
            pathname: '/Sesion/LogIn'
        })
    }

    return (
        <HStack
            bg="#131619"
            w="100%"
            h="65px"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            top='0'
            zIndex="9999"
        >
            <Flex
                alignItems="center"
                marginLeft="25px"
            >
                <Image alt='' 
                    w="130px"
                    src="/logo.png"
                />
            </Flex>
            <Flex
                alignItems="center"
            >
                {/**
                <BellIcon w={7} h={7} marginRight='15px' cursor='pointer' />
                 */}
                <Image alt='' 
                    
                    borderRadius='full'
                    cursor='pointer'
                    height='40px'
                    width='40px'
                    marginRight="20px"

                    src={ fotoPerfil }

                    objectFit='cover'
                />

                <Button marginRight="25px" onClick={cerrarSesion}>
                    Cerrar sesión&nbsp;<ExternalLinkIcon />
                </Button>
            </Flex>
        </HStack>
    )
};

export default NavBar;