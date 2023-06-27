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
            <Container
                    w="100%"
                >
                <Image alt='' 
                    position="fixed"
                    bottom="0"
                    left="0"
                    h='100%'
                    zIndex="0"
                    src='/artwork1.png'
                />
                <Image alt='' 
                    position='fixed'
                    top='0'
                    right='0'
                    p="40px"
                    src='/artwork3.png'
                />
                <VStack textAlign="center">
                    <SimpleGrid columns={6}>
                        <GridItem colSpan={6}>
                            <Image alt=''  src="/logo.png" />
                        </GridItem>
                        <GridItem colSpan={6}>
                            <HStack>
                                <Image alt=''  src="/rectangulo_verde.png" />
                                <Image alt=''  src="/rectangulo_gris.png" />
                                <Image alt=''  src="/rectangulo_gris.png" />
                            </HStack>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Heading
                                fontSize="18px"
                                textTransform="uppercase">
                                Seleccion tu tipo de usuario
                            </Heading>
                        </GridItem>
                        <GridItem colSpan={2} className="OnboardingOption">
                            <Box>
                                <Image alt=''  margin="auto" src="/jugador.png" />
                            </Box>
                            <Box>
                                <Heading>Jugador</Heading>
                            </Box>
                            <Button>
                                <Link href="/ABM/Alta/NuevoJugador">
                                    SELECCIONAR
                                </Link>
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2} className="OnboardingOption">
                            <Box>
                                <Image alt=''  margin="auto" src="/club.png" />
                            </Box>
                            <Box>
                                <Heading>Club</Heading>
                            </Box>
                            <Button>
                                <Link href="/ABM/Alta/NuevoClub">
                                    SELECCIONAR
                                </Link>
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2} className="OnboardingOption">
                            <Box>
                                <Image alt=''  margin="auto" src="/torneo.png" />
                            </Box>
                            <Box>
                                <Heading>Torneo</Heading>
                            </Box>
                            <Button>
                                <Link href="/ABM/Alta/NuevoTorneo">
                                    SELECCIONAR
                                </Link>
                            </Button>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Heading
                                fontSize="18px"
                                textTransform="uppercase">
                                        Selecciona tu deporte
                            </Heading>
                        </GridItem>

                        <GridItem colSpan={3} className="OnboardingOption">
                            <Box>
                                <Image alt=''  margin="auto" src="/futbol_grande.png" />
                            </Box>
                            <Box>
                                <Heading>Futbol</Heading>
                            </Box>
                            <Button>
                                SELECCIONAR
                            </Button>
                        </GridItem>

                        <GridItem colSpan={3} className="OnboardingOption">
                            <Box>
                                <Image alt=''  margin="auto" src="/rugby.png" />
                            </Box>
                            <Box>
                                <Heading>Rugby</Heading>
                            </Box>
                            <Button>
                                SELECCIONAR
                            </Button>
                        </GridItem>

                        <GridItem colSpan={6}>
                            <Divider />
                        </GridItem>

                        <GridItem colSpan={6}>
                        <Link href="/">
                                <Button>
                                    Atrás
                                </Button>
                            </Link>
                            <Link className="btn1" href="/ABM/Alta/NuevoJugador">
                                <Button>
                                    Continuar
                                </Button>
                            </Link>
                        </GridItem>

                        <GridItem colSpan={6}>
                            <Link className="link1">
                                Ingresar como espectador
                            </Link>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
            </Container>
        ) 
    };
}

export default Onboarding;