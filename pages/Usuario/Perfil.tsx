import { Box, Button, Container, Divider, HStack, Image, Text, VStack, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
 } from '@chakra-ui/react';

import {ChevronRightIcon, DragHandleIcon} from '@chakra-ui/icons';

const ProfileBeta = () => {
    return (
        <Box>
            <Box paddingTop="80px" paddingLeft="240px">
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

                <HStack>
                    {/* CARNET DE JUGADOR */}
                    <HStack>
                        <VStack>
                            <Image alt=''  src='/test-user.png' />
                        </VStack>
                        <VStack>
                            <Text>Juan Camilo Suarez Bermudez</Text>
                            <HStack>
                                <Image alt=''  src='/sl-icono-colombia.png' />
                                <Text>Colombia</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <VStack>
                        <Divider />
                        <Text>Editar Perfil</Text>
                    </VStack>

                    {/* RESUMEN DE PARTIDOS */}
                    <HStack>
                        <VStack>
                            <Text>PARTIDOS GUARDADOS</Text>
                            <Text color="#6EC1E4">23</Text>
                        </VStack>

                        <VStack>
                            <Text>JUGADORES SEGUIDOS</Text>
                            <Text color="#6EC1E4">32</Text>
                        </VStack>

                        <VStack>
                            <Text>TORNEOS SEGUIDOS</Text>
                            <Text color="#6EC1E4">5</Text>
                        </VStack>
                    </HStack>
                </HStack>

                {/* NAVEGACIÓN INTERNA */}

                <HStack>
                    <Button className="link1">VISTA GENERAL</Button>
                    <Button className="link1">PARTIDOS</Button>
                    <Button className="link1">JUGADORES</Button>
                    <Button className="link1">TORNEOS</Button>
                    <Button className="link1">MIS COMPRAS</Button>
                </HStack>

                <HStack>
                    {/* Resumen de partidos */}
                    <VStack>
                            <VStack>
                                <Text>PARTIDOS</Text>
                            </VStack>
                            <HStack>
                                <VStack>
                                    <Image alt=''  src='/sl-analizado.png' />
                                    <Text>Fecha 2 - 18/10/2023</Text>
                                    <HStack>
                                        <Text>Northcamp</Text>
                                        <Image alt=''  src='/sl-icono-argentina.png' />
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Text>Equipo A</Text>
                                    <Image alt=''  src='/sl-escudo-celeste.jpg' />
                                    <Text>5 - 4</Text>
                                    <Image alt=''  src='/sl-escudo-azul.jpg' />
                                    <Text>Equipo B</Text>
                                </HStack>
                                <VStack>
                                    <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2">Ver Partido</Button>
                                </VStack>
                            </HStack>

                            <HStack>
                                <VStack>
                                    <Image alt=''  src='/sl-analizado.png' />
                                    <Text>Fecha 2 - 18/10/2023</Text>
                                    <HStack>
                                        <Text>Northcamp</Text>
                                        <Image alt=''  src='/sl-icono-argentina.png' />
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Text>Equipo A</Text>
                                    <Image alt=''  src='/sl-escudo-celeste.jpg' />
                                    <Text>5 - 4</Text>
                                    <Image alt=''  src='/sl-escudo-azul.jpg' />
                                    <Text>Equipo B</Text>
                                </HStack>
                                <VStack>
                                    <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2">Ver Partido</Button>
                                </VStack>
                            </HStack>

                            <HStack>
                                <VStack>
                                    <Image alt=''  src='/sl-analizado.png' />
                                    <Text>Fecha 2 - 18/10/2023</Text>
                                    <HStack>
                                        <Text>Northcamp</Text>
                                        <Image alt=''  src='/sl-icono-argentina.png' />
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Text>Equipo A</Text>
                                    <Image alt=''  src='/sl-escudo-celeste.jpg' />
                                    <Text>5 - 4</Text>
                                    <Image alt=''  src='/sl-escudo-azul.jpg' />
                                    <Text>Equipo B</Text>
                                </HStack>
                                <VStack>
                                    <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2">Ver Partido</Button>
                                </VStack>
                            </HStack>

                            <HStack>
                                <VStack>
                                    <Image alt=''  src='/sl-analizado.png' />
                                    <Text>Fecha 2 - 18/10/2023</Text>
                                    <HStack>
                                        <Text>Northcamp</Text>
                                        <Image alt=''  src='/sl-icono-argentina.png' />
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Text>Equipo A</Text>
                                    <Image alt=''  src='/sl-escudo-celeste.jpg' />
                                    <Text>5 - 4</Text>
                                    <Image alt=''  src='/sl-escudo-azul.jpg' />
                                    <Text>Equipo B</Text>
                                </HStack>
                                <VStack>
                                    <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2">Ver Partido</Button>
                                </VStack>
                            </HStack>

                            <HStack>
                                <VStack>
                                    <Image alt=''  src='/sl-analizado.png' />
                                    <Text>Fecha 2 - 18/10/2023</Text>
                                    <HStack>
                                        <Text>Northcamp</Text>
                                        <Image alt=''  src='/sl-icono-argentina.png' />
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Text>Equipo A</Text>
                                    <Image alt=''  src='/sl-escudo-celeste.jpg' />
                                    <Text>5 - 4</Text>
                                    <Image alt=''  src='/sl-escudo-azul.jpg' />
                                    <Text>Equipo B</Text>
                                </HStack>
                                <VStack>
                                    <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2">Ver Partido</Button>
                                </VStack>
                            </HStack>
                    </VStack>

                    {/* SIGUIENDO */}
                    <VStack>
                        <HStack>
                            <Text>SIGUIENDO</Text>
                        </HStack>
                        <HStack>
                            <Button className="link1">JUGADORES</Button>
                            <Button className="link1">CLUBES</Button>
                            <Button className="link1">TORNEOS</Button>
                        </HStack>
                        <VStack>
                            <HStack>
                                <Image alt=''  src="/sl-north-camp.png" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                        <Text color="#6EC1E4">2111</Text>
                                        <Image alt=''  src="/sl-like.png" />
                                    </HStack>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Image alt=''  src="/sl-north-camp.png" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                        <Text color="#6EC1E4">2111</Text>
                                        <Image alt=''  src="/sl-like.png" />
                                    </HStack>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Image alt=''  src="/sl-north-camp.png" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                        <Text color="#6EC1E4">2111</Text>
                                        <Image alt=''  src="/sl-like.png" />
                                    </HStack>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Image alt=''  src="/sl-north-camp.png" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                        <Text color="#6EC1E4">2111</Text>
                                        <Image alt=''  src="/sl-like.png" />
                                    </HStack>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Image alt=''  src="/sl-north-camp.png" />
                                <VStack>
                                    <HStack>
                                        <Text>North Camp</Text>
                                    </HStack>
                                    <HStack>
                                        <Image alt=''  src="" />
                                        <Text>MASCULINO</Text>
                                        <Text>LIBRE</Text>
                                        <Text color="#6EC1E4">2111</Text>
                                        <Image alt=''  src="/sl-like.png" />
                                    </HStack>
                                </VStack>
                            </HStack>
                            {/* ADS */}
                            <VStack>
                                <Image alt=''  src='/sl-ad-1.png' />
                                <Image alt=''  src='/sl-ad-2.png' />
                            </VStack>
                        </VStack>
                    </VStack>
                </HStack>
            </Box>
        </Box>
    );
};

export default ProfileBeta;