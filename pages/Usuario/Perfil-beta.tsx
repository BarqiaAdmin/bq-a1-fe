import { Component, useEffect } from 'react';
import React from 'react';

import {
    Box,
    AspectRatio,
    Flex,
    Container,
    Heading,
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
    Divider,
    Progress,
    Grid,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useBreakpointValue,
    IconButton,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    CircularProgress, CircularProgressLabel,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Tooltip
} from '@chakra-ui/react';

import NavBar from '../src/Components/NavBar/NavBar';

import { useFileUpload } from 'use-file-upload';

import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon, EditIcon, AddIcon } from '@chakra-ui/icons';

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

import Router from 'next/router';

export default function Perfil() {

    const [files, selectFiles] = useFileUpload();

    const subirImagen = () => {
        /*
        selectFiles({ accept: 'image/*'}, ({ name, size, source, file }) => {
            const elementoFoto1 = document.getElementById('foto1');
            //elementoFoto1.style.borderRadius = "100%"
            //elementoFoto1.style.width = "170px"
            //elementoFoto1.style.marginTop = "-170px "
            //elementoFoto1.style.marginLeft = "0px"
            const elementoBotonDeSubirImagen = document.getElementById('botonDeSubirImagen');
            elementoBotonDeSubirImagen.remove();
        })
        */
    }

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
    const [imagenGaleria1, setImagenGaleria1] = useState('');
    const [imagenGaleria2, setImagenGaleria2] = useState('');
    const [imagenGaleria3, setImagenGaleria3] = useState('');
    const [imagenGaleria4, setImagenGaleria4] = useState('');

    // As we have used custom buttons, we need a reference variable to
    // change the state

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const imagenesGaleria = [];
    
    useEffect(() => {
        setFotoPerfil(localStorage.getItem('fotoPerfil'));
        setNombre(localStorage.getItem('nombre'))
        setApellido(localStorage.getItem('apellido'))
        setClub(localStorage.getItem('club'))
        setPosicion(localStorage.getItem('posicion'));
        setCategoria(localStorage.getItem('categoria'));
        setEstatura(localStorage.getItem('estatura'));
        setPeso(localStorage.getItem('peso'));
        setEdad(localStorage.getItem('edad'));
        setNacionalidad(localStorage.getItem('nacionalidad'));
        setCondicion(localStorage.getItem('condicion'));
        setNivelDeIngles(localStorage.getItem('nivelDeIngles'));
        setPresupuesto(localStorage.getItem('presupuesto'));
        setPieHabil(localStorage.getItem('pieHabil'));
        setImagenGaleria1(localStorage.getItem('imagenGaleria1'))
        setImagenGaleria2(localStorage.getItem('imagenGaleria2'))
        setImagenGaleria3(localStorage.getItem('imagenGaleria3'))

        localStorage.setItem('chakra-ui-color-mode', 'dark');

        localStorage.setItem('imagenGaleria1', '');
        localStorage.setItem('imagenGaleria2', '');
        localStorage.setItem('imagenGaleria3', '');
    }, []);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenVideos, onOpen: onOpenVideos, onClose: onCloseVideos } = useDisclosure();
    const cancelRef = React.useRef()

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
            resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
            reject(error);
            };
        });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        if (localStorage.getItem('imagenGaleria1') == '') {
            localStorage.setItem('imagenGaleria1', base64.toString());
            setImagenGaleria1(base64.toString());
            console.log('hey')
        } else if (localStorage.getItem('imagenGaleria2') == '') {
            localStorage.setItem('imagenGaleria2', base64.toString());
            setImagenGaleria2(base64.toString());
            console.log('hey2')
        } else if (localStorage.getItem('imagenGaleria3') == '') {
            localStorage.setItem('imagenGaleria3', base64.toString());
            setImagenGaleria3(base64.toString());
        } else if (localStorage.getItem('imagenGaleria4') == '') {
            localStorage.setItem('imagenGaleria4', base64.toString());
            setImagenGaleria4(base64.toString());
        }
    };

    const handleVideoUpload = () => {

    }

    return(
        <>
        <Box>
            <NavBar />
            {/**
            <SideBar />
             */}
            
            <VStack>
                <HStack marginTop='100px'>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} zIndex='9999'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='' color='#6EC1E4'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#' color='#6EC1E4'>Jugadores</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Detalle jugador</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </HStack>
                <HStack>
                    <SimpleGrid columns={4} marginTop='-70px'>
                        <GridItem
                            colSpan={4}
                            >
                            <VStack
                                gap="5px"
                                paddingTop="100px"
                            >
                                <HStack>
                                    <VStack gap="5px">
                                        <Image
                                            alt=''
                                            borderRadius='full'
                                            id="fotoDePerfil"
                                            src={ fotoPerfil }
                                            height='180px'
                                            width='180px'
                                        />
                                        <Heading>{ nombre } { apellido }</Heading>
                                        <HStack gap="5px">
                                            <CircularProgress value={70} color='green.400' size='60px'>
                                                <CircularProgressLabel>70%</CircularProgressLabel>
                                            </CircularProgress>
                                            <Button
                                                color="white"
                                                background="#144077"
                                                >
                                                Compartir perfil &nbsp; <Image alt=''  src="/share.png" />
                                            </Button>
                                            
                                            <Image alt='' 
                                                src="/like.png"
                                            /> 
                                            <Text>21.6k</Text>
                                        </HStack>
                                        <HStack gap="10px">
                                            <Image alt=''  h="30px" src="/facebook.png" />
                                            <Image alt=''  h="30px" src="/twitter.png" />
                                            <Image alt=''  h="30px" src="/instagram.png" />
                                            <Image alt=''  h="30px" src="/icono-tiktok.png" />
                                        </HStack>
                                    </VStack>
                                    <HStack>
                                        <Progress value={75} size='lg' colorScheme='green' />
                                    </HStack>
                                </HStack>
                            </VStack>
                            <HStack
                                marginTop='40px'
                                marginBottom='40px'
                            >
                                <SimpleGrid
                                    columns={4}
                                    background='#0E1216'
                                    border='2px solid #14161A'
                                    borderRadius='5px'
                                    margin='auto'
                                    padding='30px'
                                    textAlign='center'

                                    gap={12}
                                >
                                    <GridItem colSpan={1}>
                                        NACIONALIDAD <br />
                                        <strong>{ nacionalidad }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        EQUIPO <br />
                                        {/**
                                        <Image src='/escudo.png' alt=''
                                            display='inline-block'
                                            width='25px'
                                        />
                                        */}
                                        <strong>{ club }</strong>
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        PIE HÁBIL <br />
                                        <strong>{ pieHabil }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        POSICIÓN <br />
                                        <strong>{ posicion }</strong>
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        CATEGORÍA <br />
                                        <strong>{ categoria }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        ALTURA <br />
                                        <strong>{ estatura }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PESO <br />
                                        <strong>{ peso }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        EDAD <br />
                                        <strong>{ edad }</strong>
                                    </GridItem>
                                        
                                    <GridItem colSpan={1}>
                                        NIVEL DE INGLÉS <br />
                                        <strong>{ nivelDeIngles }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        CONDICIÓN <br />
                                        <strong>{ condicion }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PRESUPUESTO <br />
                                        <strong>{ presupuesto }</strong>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <Button>Editar&nbsp;<EditIcon /></Button>
                                    </GridItem>
                                </SimpleGrid>
                            </HStack>
                        </GridItem>
                            

                        {/* "Top Torneos (Figma)" */}

                        <GridItem colSpan={15}>
                        
                            <Box width='full' padding='0 150px' suppressHydrationWarning>
                                <Tabs isFitted variant='enclosed'>
                                    <TabList mb='1em'>
                                        <Tab position='relative' >
                                            Imágenes&nbsp;
                                            <Tooltip label="Agregar imagen" aria-label='A tooltip'>
                                                <Link onClick={onOpen} position='absolute' right='20px'>
                                                    <AddIcon />
                                                </Link>
                                            </Tooltip>
                                        </Tab>
                                        <Tab position='relative'>
                                            Videos&nbsp;
                                            <Tooltip label="Agregar video" aria-label='A tooltip'>
                                                <Link onClick={onOpenVideos} position='absolute' right='20px'>
                                                    <AddIcon />
                                                </Link>
                                            </Tooltip>
                                        </Tab>
                                    </TabList>
                                    <TabPanels textAlign='center'>
                                        <TabPanel>
                                            <AlertDialog
                                                isOpen={isOpen}
                                                leastDestructiveRef={cancelRef}
                                                onClose={onClose}
                                            >
                                                <AlertDialogOverlay>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                    Agregar imagen
                                                    </AlertDialogHeader>

                                                    <AlertDialogBody>
                                                        <Input
                                                            placeholder="Select Date and Time"
                                                            size="md"
                                                            type="file"
                                                            onChange={(e) => handleFileUpload(e)}
                                                        />
                                                    </AlertDialogBody>

                                                    <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onClose}>
                                                        Cancelar
                                                    </Button>
                                                    <Button colorScheme='blue' onClick={onClose} ml={3}>
                                                        Agregar
                                                    </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>
                                        </TabPanel>
                                        <TabPanel>
                                            <AlertDialog
                                                isOpen={isOpenVideos}
                                                leastDestructiveRef={cancelRef}
                                                onClose={onCloseVideos}
                                            >
                                                <AlertDialogOverlay>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                    Agregar video
                                                    </AlertDialogHeader>

                                                    <AlertDialogBody>
                                                        Ingresa la URL del video para agregarlo al perfil:
                                                        <Input
                                                            marginTop='20px'
                                                            placeholder="URL del video"
                                                            size="md"
                                                            type="text"
                                                            onChange={(e) => handleVideoUpload(e)}
                                                        />
                                                    </AlertDialogBody>

                                                    <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onCloseVideos}>
                                                        Cancelar
                                                    </Button>
                                                    <Button colorScheme='blue' onClick={onCloseVideos} ml={3}>
                                                        Agregar
                                                    </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>

                                            <iframe width="853" height="480" src="https://www.youtube.com/embed/EtapU5nI6G4" title="Nirvana&#39;s Nevermind but with the SM64 soundfont" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                            <VStack>
                                {/**
                                <HStack>
                                    <Image alt='' 
                                        id="foto1"
                                        src={files?.source || '/sl-icono-cuadrado-2.png'}
                                    />
                                    <Link
                                        id="botonDeSubirImagen"
                                        color="#6EC1E4"
                                        zIndex="9999"
                                        onClick={subirImagen}
                                    >
                                        Subir imagen
                                    </Link>
                                </HStack>
                                */}
                                {/**
                                <Box
                                    position={'relative'}
                                    height={'600px'}
                                    width={'full'}
                                    overflow={'hidden'}>
                                    <link
                                        rel="stylesheet"
                                        type="text/css"
                                        charSet="UTF-8"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                                    />
                                    <link
                                        rel="stylesheet"
                                        type="text/css"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                                    />
                                    <IconButton
                                        aria-label="left-arrow"
                                        colorScheme="messenger"
                                        borderRadius="full"
                                        position="absolute"
                                        left={side}
                                        top={top}
                                        transform={'translate(0%, -50%)'}
                                        zIndex={2}
                                        onClick={() => slider?.slickPrev()}>
                                        <BiLeftArrowAlt />
                                    </IconButton>
                                    <IconButton
                                        aria-label="right-arrow"
                                        colorScheme="messenger"
                                        borderRadius="full"
                                        position="absolute"
                                        right={side}
                                        top={top}
                                        transform={'translate(0%, -50%)'}
                                        zIndex={2}
                                        onClick={() => slider?.slickNext()}>
                                        <BiRightArrowAlt />
                                    </IconButton>
                                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                                        {imagenesGaleria.map((url, index) => (
                                        <Box
                                            key={index}
                                            height={'6xl'}
                                            position="relative"
                                            backgroundPosition="center"
                                            backgroundRepeat="no-repeat"
                                            backgroundSize="cover"
                                            backgroundImage={`url(${url})`}
                                        />
                                        ))}
                                    </Slider>
                                </Box>
                                 */}
                            </VStack>
                            <HStack>
                                <Image h='330px' src={imagenGaleria1} alt=''/>
                                <Image h='330px' src={imagenGaleria2} alt=''/>
                                <Image h='330px' src={imagenGaleria3} alt=''/>
                            </HStack>
                            {/**
                            <Box>
                                <HStack>
                                    <Text>ESTADISTICAS</Text>
                                    <FormControl>
                                        <Input placeholder="Buscar por nombre del club rival" />
                                    </FormControl>
                                </HStack>
                                <HStack>
                                    <TableContainer m='auto' fontSize='15px'>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>PARTIDO</Th>
                                                    <Th>FECHA</Th>
                                                    <Th>POS</Th>
                                                    <Th>NRO</Th>
                                                    <Th>M Jugados</Th>
                                                    <Th>G</Th>
                                                    <Th>Asist</Th>
                                                    <Th>% Remates</Th>
                                                    <Th>% Pases</Th>
                                                    <Th>Estadísticas</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>{ '>'} Casa Madero F.C. 7-0 Amarula</Td>
                                                    <Td>26/03/22</Td>
                                                    <Td>DC</Td>
                                                    <Td>21</Td>
                                                    <Td>81.82</Td>
                                                    <Td>0</Td>
                                                    <Td>2</Td>
                                                    <Td>43</Td>
                                                    <Td>21</Td>
                                                    <Td>
                                                        <Link href="/Perfil-beta">Ver Estadísticas</Link>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </HStack>
                            </Box>
                            */}
                        </GridItem>

                        

                        {/** Redes sociales

                        <GridItem colSpan={15} marginTop="150px" paddingLeft="240px" textAlign="center">
                            <HStack margin="auto" textAlign="center">
                                <HStack color="white">
                                    
                                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@riquelmefutbol10/video/7113220013762366725" data-video-id="7113220013762366725" style={{ maxWidth: '605px', minWidth: '325px'}} > <section> <a target="_blank" title="@riquelmefutbol10" href="https://www.tiktok.com/@riquelmefutbol10?refer=embed">@riquelmefutbol10</a> Se cumplen 16 años del golazo a México 🔥 <a title="maxirodriguez" target="_blank" href="https://www.tiktok.com/tag/maxirodriguez?refer=embed">#maxirodriguez</a> <a title="riquelme" target="_blank" href="https://www.tiktok.com/tag/riquelme?refer=embed">#riquelme</a> <a title="golazo" target="_blank" href="https://www.tiktok.com/tag/golazo?refer=embed">#golazo</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="parati" target="_blank" href="https://www.tiktok.com/tag/parati?refer=embed">#parati</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a target="_blank" title="♬ sonido original - riquelmefutbol10" href="https://www.tiktok.com/music/sonido-original-7113220003352464133?refer=embed">♬ sonido original - riquelmefutbol10</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                                    
                                </HStack>
                                <HStack>
                                    <iframe width="295" src="https://www.youtube.com/embed/w_tALGi2wVI" title="Gol De Messi A Serbia 2006 HD (Relatos Argentinos)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </HStack>
                                <HStack
                                    data-mc-src="2d37e04a-d910-4611-9e80-79d30ba70618#instagram">
                                    <script 
                                        src="https://cdn2.woxo.tech/a.js#6460d15fbbb40bc502b1e839" 
                                        async data-usrc>
                                    </script>
                                </HStack>
                            </HStack>
                        </GridItem>
                        */}
                        
                    </SimpleGrid>
                </HStack>
            </VStack>
        </Box>
        </>
    )
}