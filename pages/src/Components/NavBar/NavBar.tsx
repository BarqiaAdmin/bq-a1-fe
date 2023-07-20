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
} from '@chakra-ui/react';

import Router from 'next/router';

const NavBar = (props) => {

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

        Router.push({
            pathname: '/Sesion/LogIn'
        })  
        
    }

    const urlDeImagen = 'https://pbs.twimg.com/profile_images/478580594415120384/v-spwMvM_400x400.png';

    return (
        <HStack
            bg="#131619"
            w="100%"
            h="65px"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            zIndex="1"
        >
            <Flex
                alignItems="center"
                marginLeft="25px"
            >
                <Image alt=''  
                    w="22px"
                    h="19px"
                    marginRight="28px"
                    src="/menu.png"
                />
                <Image alt='' 
                    w="130px"
                    src="/logo.png"
                />
            </Flex>
            <Flex
                alignItems="center"
            >
                <Button marginRight="25px" onClick={cerrarSesion}>
                    Cerrar sesión
                </Button>
                <Image alt='' 
                    marginRight="20px"
                    src={ props.urlDeImagen }
                />
            </Flex>
        </HStack>
    )
};

export default NavBar;