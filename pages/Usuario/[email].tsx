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

import { useToast, useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon, EditIcon, AddIcon, LinkIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

import clubes from '../../db/clubesAFA';
import paises from '../../db/paises';


export default function Perfil() {

    const [files, selectFiles] = useFileUpload();

    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenVideos, onOpen: onOpenVideos, onClose: onCloseVideos } = useDisclosure();
    const cancelRef = React.useRef()

    const [edicionActivada, setEdicionActivada] = useState(false);

    const [fotoPerfil, setFotoPerfil] = useState('');
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('');

    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [tiktok, setTiktok] = useState('');

    const [club, setClub] = useState('');
    const [posicion, setPosicion] = useState(''); 
    const [categoria, setCategoria] = useState(''); 
    const [estatura, setEstatura] = useState(''); 
    const [peso, setPeso] = useState(''); 
    const [edad, setEdad] = useState(''); 
    const [pais, setPais] = useState(''); 

    const [genero, setGenero] = useState(false);
    const [nacimiento, setNacimiento] = useState(false);

    const [pases, setPases] = useState(false);
    const [tiros, setTiros] = useState(false);
    const [resistencia, setResistencia] = useState(false);
    const [visionDeJuego, setVisionDeJuego] = useState(false);
    const [unoVsUno, setUnoVsUno] = useState(false);
    const [tirosLibres, setTirosLibres] = useState(false);
    const [marca, setMarca] = useState(false);
    const [juegoAereo, setJuegoAereo] = useState(false);

    const [lugarEnElCampo, setLugarEnElCampo] = useState('');

    const [pieHabil, setPieHabil] = useState('');

    const [nivelDeIngles, setNivelDeIngles ] = useState('');
    const [certificaciones, setCertificaciones] = useState('');
    const [condicion, setCondicion] = useState('');
    const [presupuesto, setPresupuesto ] = useState('');


    const [imagenesGaleriaArray, setImagenesGaleriaArray] = useState([]);

    const [videosGaleria, setVideosGaleria] = useState([]);
    const [galeriaVideos, setGaleriaVideosYoutube] = useState([]);

    const [galeriaPartidos, setGaleriaPartidos] = useState([]);
    
    
    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');

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
            setApellido(response.apellido);

            setFacebook(response.facebook);
            setTwitter(response.twitter);
            setInstagram(response.instagram);
            setTiktok(response.tiktok);

            setEdad(response.edad);
            setClub(response.club);
            setPosicion(response.posicion);
            setCategoria(response.categoria);
            setGenero(response.genero);
            setEstatura(response.estatura);
            setPeso(response.peso);
            setNacimiento(response.nacimiento);
            setPais(response.pais);
            setPieHabil(response.pieHabil);
            setCondicion(response.condicion);
            setNivelDeIngles(response.nivelDeIngles);
            setPresupuesto(response.presupuesto);

            // (Lugar en el campo)

            setPases((response.pases === 'true'))
            setTiros((response.tiros === 'true'))
            setResistencia((response.resistencia === 'true'))
            setVisionDeJuego((response.visionDeJuego === 'true'))
            setUnoVsUno((response.unoVsUno === 'true'))
            setTirosLibres((response.tirosLibres === 'true' ))
            setMarca((response.marca === 'true' ))
            setJuegoAereo((response.juegoAereo === 'true' ))

            // Galería

            setImagenesGaleriaArray(response.imagenesGaleriaArray)
            setVideosGaleria(response.videosGaleria);
            setGaleriaPartidos(response.galeriaPartidos);
        })
        .then((res) => {
            Router.push({
                pathname: '/Usuario/Perfil/' + EmailIcon,
            })
        });
    }, []);
    
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

    return(
        <>
        <Box>
            {/*
            <NavBar />
            */}
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
                    <Link href='/Sesion/Login'>
                        <Button className='btn1' marginRight="25px" onClick={() => {}}>
                            Iniciar sesión
                        </Button>
                    </Link>
                    
                    <Link href='/'>
                        <Button className='btn2' marginRight="25px" onClick={() => {}}>
                            Registrarse
                        </Button>
                    </Link>
                </Flex>
            </HStack>
            {/**
            <SideBar />
             */}
             
            
            <VStack>
                <HStack marginTop='180px'>
                </HStack>
                <HStack>
                    <SimpleGrid columns={4} marginTop='-70px'>
                        <GridItem
                            colSpan={4}
                            >
                            <VStack
                                gap="5px"
                            >
                                <HStack>
                                    <VStack gap="5px">
                                        <Image
                                            alt=''
                                            borderRadius='full'
                                            id="fotoDePerfil"
                                            src={ fotoPerfil }
                                            h='180px'
                                            w='180px'
                                            objectFit='cover'
                                        />
                                        
                                        <Heading>{ nombre } { apellido }</Heading>
                                        <HStack gap="5px">
                                            {/**
                                            <Image alt='' 
                                                cursor='pointer'
                                                src="/like.png"
                                            />
                                             */}
                                        </HStack>
                                        <HStack gap="10px">
                                            <Link href={ facebook } target='blank' >
                                                <Image cursor='pointer' alt=''  h="30px" src="/facebook.png" />
                                            </Link>
                                            <Link href={ twitter } target='blank' >
                                                <Image cursor='pointer' alt=''  h="30px" src="/twitter.png" />
                                            </Link>
                                            <Link href={ instagram } target='blank' >
                                                <Image cursor='pointer' alt=''  h="30px" src="/instagram.png" />
                                            </Link>
                                            <Link href={ tiktok } target='blank' >
                                                <Image cursor='pointer' alt=''  h="30px" src="/icono-tiktok.png" />
                                            </Link>
                                            <Box
                                                cursor='pointer'
                                                color=''
                                                style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}>
                                                <EditIcon/>
                                            </Box>
                                        </HStack>
                                    </VStack>
                                    <HStack>{/**
                                        <Progress value={75} size='lg' colorScheme='green' />
                                         */}
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
                                                <div className="playerPosition" style={{ background: 'white', top: '45%', left: '2%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: '#2DA0E4', top: '45%', left: '40%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '30%', left: '14%',position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '55%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '10%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '80%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '76%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '15%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '45%', left: '70%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '25%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                                                <div className="playerPosition" style={{ background: 'white', top: '65%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
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
                                            <Button style={ !pases ? { display: 'none '} : { display: 'inline-block' }} className="btn2">Pases</Button>
                                            <Button style={ !tiros ? { display: 'none '} : { display: 'inline-block' }} className="btn2">Tiros</Button>
                                            <Button style={ !resistencia ? { display: 'none'} : { display: 'inline-block' }} className="btn2">Resistencia</Button>
                                            <Button style={ !visionDeJuego ? { display: 'none'} : { display: 'inline-block' }} className="btn2">Visión de juego</Button>
                                        </HStack>
                                        <br />
                                        <HStack gap='12px' display='inline-block' marginBottom='15px'>
                                            <Button style={ !unoVsUno ? { display: 'none' } : { display: 'inline-block' }} className="btn2">1vs1</Button>
                                            <Button style={ !tirosLibres ? { display: 'none' } : { display: 'inline-block' }} className="btn2">Tiros libres</Button>
                                            <Button style={ !marca ? { display: 'none' } : { display: 'inline-block' }} className="btn2">Marca</Button>
                                            <Button style={ !juegoAereo ? { display: 'none' } : { display: 'inline-block' }} className="btn2">Juego aéreo</Button>
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
                                             <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                <Text style={ imagenesGaleriaArray.length == 0 ? { display: 'block'} : { display: 'none' }}>Aún no hay imágenes.</Text>
                                                { imagenesGaleriaArray.map((imagenBase64, index) => {
                                                    return (
                                                        <Image key={ index } w='330px' src= { imagenBase64 } alt='' />
                                                    )
                                                })}
                                            </VStack>
                                        </TabPanel>
                                        <TabPanel>
                                            <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                <Text style={ videosGaleria.length == 0 ? { display: 'block' } : { display: 'none' } }>Aún no hay videos.</Text>
                                                {
                                                    videosGaleria.map((videoUrl, index) => {
                                                        console.log(videoUrl);
                                                        return (
                                                            <iframe key={ index } width="853" height="480" src={ videoUrl } title=""></iframe>
                                                        )}
                                                    )
                                                }
                                            </VStack>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                        </GridItem>
                    </SimpleGrid>
                </HStack>
            </VStack>
        </Box>
        </>
    )
}