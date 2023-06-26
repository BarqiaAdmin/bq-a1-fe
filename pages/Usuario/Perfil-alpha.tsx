import { Box, Button, Container, Divider, HStack, Image, Text, VStack, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
 } from '@chakra-ui/react';

import {ChevronRightIcon, DragHandleIcon} from '@chakra-ui/icons';

const ProfileBeta = () => {
    return (
        <Container>
            {/* Breadcrumbs */}
            <HStack>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Mi Perfil</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </HStack>
            
            {/* CARNET DE JUGADOR */}
            <HStack>
                <VStack>
                    <Image alt=''  src='' />
                </VStack>
                <VStack>
                    <Text>Juan Camilo Suarez Bermudez</Text>
                    <Text><Image alt=''  src='' />Colombia</Text>
                </VStack>
            </HStack>

            {/* RESUMEN DE PARTIDOS */}
            <HStack>
                <VStack>
                    <Text>PARTIDOS GUARDADOS</Text>
                    <Text>23</Text>
                </VStack>

                <VStack>
                    <Text>JUGADORES SEGUIDOS</Text>
                    <Text>32</Text>
                </VStack>

                <VStack>
                    <Text>TORNEOS SEGUIDOS</Text>
                    <Text>5</Text>
                </VStack>
            </HStack>

            {/* NAVEGACIÓN INTERNA */}

            <HStack>
                <Button>VISTA GENERAL</Button>
                <Button>PARTIDOS</Button>
                <Button>JUGADORES</Button>
                <Button>TORNEOS</Button>
                <Button>MIS COMPRAS</Button>
            </HStack>

            

            <HStack>

                    {/* Resumen de partidos */}
                    <VStack>
                            <HStack>
 
                            </HStack>
                    </VStack>

                    {/* SIGUIENDO */}
                    <VStack>
                        <HStack></HStack>
                        <HStack>
                            <Button>JUGADORES</Button>
                            <Button>CLUBES</Button>
                            <Button>TORNEOS</Button>
                        </HStack>
                        <VStack>
                            <HStack>
                                <Image alt=''  src="" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                    </HStack>
                                    <HStack>
                                        <Text>2111</Text>
                                        <Image alt=''  src="" />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </VStack>

                        {/* ADS */}
                        <VStack>
                            <Image alt=''  src='' />
                            <Image alt=''  src='' />
                        </VStack>
                    </VStack>
            </HStack>
        </Container>
    );
};

export default ProfileBeta;