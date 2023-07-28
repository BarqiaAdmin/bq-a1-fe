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

import Router from 'next/router';

import { useDisclosure, useToast } from '@chakra-ui/react'
import { ChevronRightIcon, EditIcon, AddIcon, LinkIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

import clubes from '../../db/clubes';
import paises from '../../db/paises';


export default function Perfil() {

    const [files, selectFiles] = useFileUpload();

    const toast = useToast();

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
    const [pais, setPais] = useState(''); 
    const [pieHabil, setPieHabil] = useState('');
    const [nivelDeIngles, setNivelDeIngles ] = useState('');
    const [certificaciones, setCertificaciones] = useState('');
    const [condicion, setCondicion] = useState('');
    const [presupuesto, setPresupuesto ] = useState('');
    const [imagenGaleria1, setImagenGaleria1] = useState('');
    const [imagenGaleria2, setImagenGaleria2] = useState('');
    const [imagenGaleria3, setImagenGaleria3] = useState('');

    const [videoGaleria1, setVideoGaleria1] = useState('');
    const [videoGaleria2, setVideoGaleria2] = useState('');
    const [videoGaleria3, setVideoGaleria3] = useState('');

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const imagenesGaleria = [];
    
    useEffect(() => {
        let shareLink = window.location.href
        console.log(shareLink)
        let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
        console.log(pattern)
        let userEmail = shareLink.match(pattern)[0]
        console.log(userEmail);

        fetch('https://bq-a1-be.vercel.app/buscarUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then((response) => response.json())
        .then(response => {
            setFotoPerfil(response.fotoPerfil);
            setNombre(response.nombre)
            setApellido(response.apellido)
            setClub(response.club)
            setPosicion(response.posicion);
            setCategoria(response.categoria);
            setEstatura(response.estatura);
            setPeso(response.peso);
            setEdad(response.edad);
            setPais(response.pais);
            setCondicion(response.condicion);
            setNivelDeIngles(response.nivelDeIngles);
            setPresupuesto(response.presupuesto);
            setPieHabil(response.pieHabil);
        })
        

        localStorage.setItem('chakra-ui-color-mode', 'dark');

        localStorage.setItem('imagenGaleria1', '');
        localStorage.setItem('imagenGaleria2', '');
        localStorage.setItem('imagenGaleria3', '');

        localStorage.setItem('videoGaleria1', '');
        localStorage.setItem('videoGaleria2', '');
        localStorage.setItem('videoGaleria3', '');

        setImagenGaleria1(localStorage.getItem('imagenGaleria1'))
        setImagenGaleria2(localStorage.getItem('imagenGaleria2'))
        setImagenGaleria3(localStorage.getItem('imagenGaleria3'))

        setVideoGaleria1(localStorage.getItem('videoGaleria1'))
        setVideoGaleria2(localStorage.getItem('videoGaleria2'))
        setVideoGaleria3(localStorage.getItem('videoGaleria3'))
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
        } else if (localStorage.getItem('imagenGaleria2') == '') {
            localStorage.setItem('imagenGaleria2', base64.toString());
            setImagenGaleria2(base64.toString());
        } else if (localStorage.getItem('imagenGaleria3') == '') {
            localStorage.setItem('imagenGaleria3', base64.toString());
            setImagenGaleria3(base64.toString());
        }
    };

    const handleVideoUpload = (e) => {
        let ytUrl = e.target.value
        ytUrl = ytUrl.replace('/watch?v=', '/embed/')
        if (localStorage.getItem('videoGaleria1') == '') {
            localStorage.setItem('videoGaleria1', ytUrl);
            setVideoGaleria1(ytUrl);
        } else if (localStorage.getItem('videoGaleria2') == '') {
            localStorage.setItem('videoGaleria2', ytUrl);
            setVideoGaleria2(ytUrl);
        } else if (localStorage.getItem('videoGaleria3') == '') {
            localStorage.setItem('videoGaleria3', ytUrl);
            setVideoGaleria3(ytUrl);
        }
    }

    const [edicionActivada, setEdicionActivada] = useState(false);

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
                                            <Image alt='' 
                                                src="/like.png"
                                            />
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
                                        PAIS <br />
                                        <strong>{ pais }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Seleccionar país">
                                            {paises.map((pais, index) => {
                                                return (
                                                    <option key={index}>{ pais }</option>
                                                )
                                            })}
                                        </Select>
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
                                        <Select className="campoDeEdicion" placeholder="Seleccionar club" style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            {clubes.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        PIE HÁBIL <br />
                                        <strong>{ pieHabil }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <option>Izquierdo</option>
                                            <option>Derecho</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        POSICIÓN <br />
                                        <strong>{ posicion }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <option>Delantero</option>
                                            <option>Mediocampista</option>
                                            <option>Defensor</option>
                                            <option>Arquero</option>
                                        </Select>
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        CATEGORÍA <br />
                                        <strong>{ categoria }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Seleccionar categoría">
                                            <option>Pro</option>
                                            <option>Semi-Pro</option>
                                            <option>Juvenil</option>
                                            <option>Amateur</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        ALTURA <br />
                                        <strong>{ estatura }</strong>
                                        <Input className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Ingresar estatura"/>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PESO <br />
                                        <strong>{ peso }</strong>
                                        <Input className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Ingresar peso"/>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        EDAD <br />
                                        <strong>{ edad }</strong>
                                        <Input
                                            className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }}
                                            placeholder="Select Date and Time"
                                            size="md"
                                            type="datetime-local"
                                        />
                                    </GridItem>
                                        
                                    <GridItem colSpan={1}>
                                        NIVEL DE INGLÉS <br />
                                        <strong>{ nivelDeIngles }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <option>Bilingüe</option>
                                            <option>Avanzado</option>
                                            <option>Intermedio</option>
                                            <option>Básico</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        CONDICIÓN <br />
                                        <strong>{ condicion }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Condición">
                                            <option>Libre</option>
                                            <option>Con contrato</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PRESUPUESTO <br />
                                        <strong>{ presupuesto }</strong>
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Presupuesto">
                                            <option>0 - 5.000</option>
                                            <option>6.0000 - 10.000</option>
                                            <option>10.000 - 15.000</option>
                                            <option>16.000 - 20.000</option>
                                            <option>Más de 20.000</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        
                                    </GridItem>
                                    <GridItem colSpan={4}>
                                        <VStack>
                                            <Heading
                                                fontSize="18px" marginBottom='20px'
                                            >
                                                LUGAR EN EL CAMPO
                                            </Heading>
                                            <Box
                                                position="relative"
                                            >
                                                <Image alt=''  src="/campo.png" />
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 1)} className="playerPosition" style={{ background: 'white', top: '45%', left: '2%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 2)} className="playerPosition" style={{ background: 'white', top: '45%', left: '40%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 3)} className="playerPosition" style={{ background: 'white', top: '30%', left: '14%',position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 4)} className="playerPosition" style={{ background: 'white', top: '55%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 5)} className="playerPosition" style={{ background: 'white', top: '10%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 6)} className="playerPosition" style={{ background: 'white', top: '80%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 7)} className="playerPosition" style={{ background: 'white', top: '76%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 8)} className="playerPosition" style={{ background: 'white', top: '15%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 9)} className="playerPosition" style={{ background: 'white', top: '45%', left: '70%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 10)} className="playerPosition" style={{ background: 'white', top: '25%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div onClick={(e) => this.elegirLugarEnElCampo(e, 11)} className="playerPosition" style={{ background: 'white', top: '65%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                            </Box>
                                        </VStack>
                                    </GridItem>
                                    <GridItem colSpan={4} textAlign='center'>
                                        <Heading
                                            fontSize="18px"
                                            marginBottom='20px'
                                        >
                                            ATRIBUTOS
                                        </Heading>
                                        <HStack display='inline-block' marginBottom='15px'>
                                            <Button onClick={(e) => this.elegirAtributo(e, 1)}  className="btn2">Pases</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 2)}  className="btn2">Tiros</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 3)}  className="btn2">Resistencia</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 4)}  className="btn2">Visión de juego</Button>
                                        </HStack>
                                        <br />
                                        <HStack gap='12px' display='inline-block' marginBottom='15px'>
                                            <Button onClick={(e) => this.elegirAtributo(e, 5)}  className="btn2">1vs1</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 6)}  className="btn2">Tiros libres</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 7)}  className="btn2">Marca</Button>
                                            <Button onClick={(e) => this.elegirAtributo(e, 8)}  className="btn2">Juego aéreo</Button>
                                        </HStack>
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
                                            Imágenes
                                        </Tab>
                                        <Tab position='relative'>
                                            Videos
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
                                            <HStack width='full'>
                                                <Image h='330px' src={imagenGaleria1} alt=''/>
                                                <Image h='330px' src={imagenGaleria2} alt=''/>
                                                <Image h='330px' src={imagenGaleria3} alt=''/>
                                            </HStack>
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
                                                            id="videoGaleria1Input"
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
                                            <iframe width="853" height="480" src={ videoGaleria1 } title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                            <iframe width="853" height="480" src={ videoGaleria2 } title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                            <iframe width="853" height="480" src={ videoGaleria3 } title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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
                                                        <Link href="/Perfil">Ver Estadísticas</Link>
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