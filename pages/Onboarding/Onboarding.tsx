import React from 'react';

import {
    Container,
    Image,
    HStack,
    VStack,
    SimpleGrid,
    GridItem,
    Heading,
    Box, Text,
    Divider,
    Link, Button,
} from '@chakra-ui/react';

class Onboarding extends React.Component {
    nuevoJugador() {
        console.log('JUGADOR')
    }
    render() {
        return (
            <Container>
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
                    w="702px"
                    p="40px 80px"
                    bg="#0E1216"
                    boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                    borderRadius="16px"
                    color="#ECECEC"
                    gap="32px"
                    margin="auto"
                    marginTop="25px"
                    paddingTop="100px"
                    >
                    {/** Deporte */}
                    <Heading>SELECCIONA TU DEPORTE</Heading>
                    <HStack>
                        {/** Futbol */}
                        <Box className='deporte deporteSeleccionado'>
                            <VStack>
                                <Image src='/sl_futbol_grande.png' alt='' />
                                <Heading>Futbol</Heading>
                            </VStack>
                        </Box>
                        {/** Rugby
                        <Box className='deporte'>
                            <VStack>
                                <Image src='/rugby.png' alt='' />
                                <Heading>Rugby</Heading>
                            </VStack>
                        </Box>
                         */}
                    </HStack>
                    <Divider />
                    <HStack>
                        <Link href="/">
                            <Button
                                className="btn1"
                                p="10px 24px 12px"
                                w="161px"
                                h="57px"
                                bg="#353535"
                                borderRadius="5px"
                                fontSize="21px"
                                color="#A2A2A2"
                            >
                                Atrás
                            </Button>
                        </Link>
                        <Link href="/ABM/Alta/NuevoJugador">
                            <Button
                                className="btn1"
                                p="10px 24px 12px"
                                w="161px"
                                h="57px"
                                bg="#353535"
                                borderRadius="5px"
                                fontSize="21px"
                                color="#A2A2A2"
                            >
                                Continuar
                            </Button>
                        </Link>
                    </HStack>
                    {/**<Link href=''>Ingresar como espectador</Link>*/}
                </VStack>
            </Container>
        ) 
    };
}

export default Onboarding;