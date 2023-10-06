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
import { ChevronRightIcon, EditIcon, AddIcon, LinkIcon, CheckIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons';

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
            setApellido(response.apellido)

            setFacebook(response.facebook);
            setInstagram(response.instagram);
            setTwitter(response.twitter)
            setTiktok(response.tiktok);

            setEdad(response.edad);
            setClub(response.club)
            setPosicion(response.posicion);
            setCategoria(response.categoria);
            setGenero(response.genero);
            setEstatura(response.estatura);
            setPeso(response.peso);

            setNacimiento(response.nacimiento);
            setPais(response.pais);
            setCondicion(response.condicion);
            setNivelDeIngles(response.nivelDeIngles);
            setPresupuesto(response.presupuesto);

            setLugarEnElCampo(response.lugarEnElCampo);

            setPieHabil(response.pieHabil);
            setPases(response.pases === 'true')
            setTiros(response.tiros === 'true')
            setResistencia(response.resistencia === 'true')
            setVisionDeJuego(response.visionDeJuego === 'true')
            setUnoVsUno(response.unoVsUno === 'true')
            setTirosLibres(response.tirosLibres === 'true')
            setMarca(response.marca === 'true')
            setJuegoAereo(response.juegoAereo === 'true')

            // Galería

            setImagenesGaleriaArray(response.imagenesGaleriaArray)
            setVideosGaleria(response.videosGaleria);
            setGaleriaPartidos(response.galeriaPartidos);
        })
        .then((res) => {
            console.log(res)
        })
    }, []);

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
                    <Link href='/Sesion/LogIn'>
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
                <SimpleGrid columns={12}>
                    <GridItem
                        colSpan={12}
                        marginLeft={['130px', '0']}
                        marginBottom={['50px', '0']}
                        >
                        <VStack
                            gap="5px"
                            paddingTop="100px"
                        >
                            <HStack>
                                <VStack gap="5px">
                                    <HStack>
                                        <Image
                                            alt=''
                                            borderRadius='full'
                                            id="fotoDePerfil"
                                            src={ fotoPerfil }
                                            height={['150px', '200px']}
                                            width={['150px', '200px']}
                                            objectFit='cover'
                                        />
                                        {/** Edición
                                        <Box
                                            cursor='pointer'
                                            color=''
                                            style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}>
                                            <EditIcon/>
                                        </Box>
                                        */}
                                    </HStack>
                                    
                                    <Heading fontSize={['40px', '30px']}>{ nombre } { apellido }</Heading>
                                    {/** Edición
                                    <Box
                                        cursor='pointer'
                                        color=''
                                        style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}
                                        >
                                        <EditIcon/>
                                    </Box>
                                    */}
                                    <HStack>
                                        {/**
                                        <CircularProgress value={70} color='green.400' size='60px'>
                                            <CircularProgressLabel>70%</CircularProgressLabel>
                                        </CircularProgres   s>
                                            */}
                                        {/**
                                        <Image alt='' 
                                            cursor='pointer'
                                            src="/like.png"
                                        />
                                            */}
                                    </HStack>
                                    <HStack gap="10px">
                                        <Link href={ facebook } target='blank' >
                                            <Image cursor='pointer' alt=''  h={["50px", "50px"]} src="/facebook.png" />
                                        </Link>
                                        <Link href={ twitter } target='blank' >
                                            <Image cursor='pointer' alt=''  h={["50px", "50px"]} src="/twitter.png" />
                                        </Link>
                                        <Link href={ instagram } target='blank' >
                                            <Image cursor='pointer' alt=''  h={["50px", "50px"]} src="/instagram.png" />
                                        </Link>
                                        <Link href={ tiktok } target='blank' >
                                            <Image cursor='pointer' alt=''  h={["50px", "50px"]} src="/icono-tiktok.png" />
                                        </Link>
                                        <Box
                                            cursor='pointer'
                                            color=''
                                            style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}>
                                            <EditIcon/>
                                        </Box>
                                    </HStack>
                                </VStack>
                                <HStack>
                                    {/**
                                    <Progress value={75} size='lg' colorScheme='green' />
                                        */}
                                </HStack>
                            </HStack>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={12} width='100%' marginLeft={['70px', '0']} marginBottom={['50px', '50px']}>
                        <HStack
                            marginTop={['0px', '30px']}
                        >
                            <SimpleGrid
                                columns={4}
                                background='#0E1216'
                                border='2px solid #14161A'
                                borderRadius='5px'
                                margin='auto'
                                padding='30px'
                                textAlign='center'
                                fontSize={['23px', '25px']}
                                gap={12}
                            >
                                <GridItem colSpan={[2, 1]}>
                                    EQUIPO <br />
                                    {/**
                                    <Image src='/escudo.png' alt=''
                                        display='inline-block'
                                        width='25px'
                                    />
                                    */}
                                    <strong><em>{ club }</em></strong>
                                </GridItem>

                                <GridItem colSpan={[2, 1]}>
                                    PAIS <br />
                                    <strong><em>{ pais }</em></strong>
                                </GridItem>

                                <GridItem colSpan={[2, 1]}>
                                    PIE HÁBIL <br />
                                    <strong><em>{ pieHabil }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]}>
                                    POSICIÓN <br />
                                    <strong><em>{ posicion }</em></strong>
                                </GridItem>

                                <GridItem colSpan={[2, 1]}>
                                    CATEGORÍA <br />
                                    <strong><em>{ categoria }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]}>
                                    ESTATURA <br />
                                    <strong><em>{ estatura }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]}>
                                    PESO <br />
                                    <strong><em>{ peso }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]}>
                                    Edad  <br />
                                    <strong><em>{ edad }</em></strong>
                                    <VStack style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                    </VStack>
                                </GridItem>
                                <GridItem colSpan={[2, 1]} display='none'>
                                    NIVEL DE INGLÉS <br />
                                    <strong><em>{ nivelDeIngles }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]} display={'block'}>
                                    CONDICIÓN <br />
                                    <strong><em>{ condicion }</em></strong>
                                </GridItem>
                                <GridItem colSpan={[2, 1]} display='none'>
                                    PRESUPUESTO <br />
                                    <strong><em>{ presupuesto }</em></strong>
                                </GridItem>
                            </SimpleGrid>
                        </HStack>
                    </GridItem>
                    
                    <GridItem colSpan={12}>
                        <SimpleGrid columns={6}>
                            <GridItem colSpan={6} fontSize='40px' marginLeft={['130px', '0']} marginBottom={['50px', '0']}>
                                <VStack
                                    marginBottom={['', '30px']}>
                                    <Heading
                                        fontSize="35px" marginBottom='20px' textAlign='center'
                                    >
                                        Lugar en el campo
                                    </Heading>

                                    <Box
                                        position="relative"
                                    >
                                        <Image alt=''  src="/campo.png" />
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('1') } } } style={ lugarEnElCampo != '1' ? { background: 'white', top: '45%', left: '2%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9 !important', top: '45%', left: '2%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('2') } } } style={ lugarEnElCampo != '2' ? { background: 'white', top: '45%', left: '40%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '45%', left: '40%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('3') } } } style={ lugarEnElCampo != '3' ? { background: 'white', top: '30%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '30%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('4') } } } style={ lugarEnElCampo != '4' ? { background: 'white', top: '55%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '55%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('5') } } } style={ lugarEnElCampo != '5' ? { background: 'white', top: '10%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '10%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('6') } } } style={ lugarEnElCampo != '6' ? { background: 'white', top: '80%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '80%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('7') } } } style={ lugarEnElCampo != '7' ? { background: 'white', top: '76%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '76%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('8') } } } style={ lugarEnElCampo != '8' ? { background: 'white', top: '15%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '15%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('9') } } } style={ lugarEnElCampo != '9' ? { background: 'white', top: '45%', left: '70%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '45%', left: '70%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('10') } } } style={ lugarEnElCampo != '10' ? { background: 'white', top: '25%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '25%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                        <div className="playerPosition" onClick={ () => { if (edicionActivada) { setLugarEnElCampo('11') } } } style={ lugarEnElCampo != '11' ? { background: 'white', top: '65%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'} : { background: '#2B98D9', top: '65%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block !important', height: '20px', width: '20px'} }></div>
                                    </Box>
                                </VStack>
                            </GridItem>

                            <GridItem colSpan={6} textAlign='center' marginLeft={['130px', '0']} marginBottom={['25px', '0']}>
                                <Heading
                                    fontSize="35px"
                                    marginBottom={['50px', '30px']}
                                >
                                    Atributos
                                </Heading>
                                <VStack marginBottom='70px'>
                                    <Button style={ !pases ? { display: 'none '} : { display: 'block' }} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Pases</Button>
                                    <Button style={ !tiros ? { display: 'none '} : { display: 'block' }} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Tiros</Button>
                                    <Button style={ !resistencia ? { display: 'none'} : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Resistencia</Button>
                                    <Button style={ !visionDeJuego ? { display: 'none'} : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Visión de juego</Button>
                                    <Button style={ !unoVsUno ? { display: 'none' } : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>1vs1</Button>
                                    <Button style={ !tirosLibres ? { display: 'none' } : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Tiros libres</Button>
                                    <Button style={ !marca ? { display: 'none' } : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Marca</Button>
                                    <Button style={ !juegoAereo ? { display: 'none' } : { display: 'block' }} className="btn2" fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Juego aéreo</Button>
                                </VStack>
                            </GridItem>
                                                    
                            {/* "Top Torneos (Figma)" */}

                            {/**
                            <GridItem colSpan={15} display={['block', 'none']}>
                                <Heading
                                    fontSize="40px"
                                    marginBottom='20px'
                                >
                                    IMAGENES
                                <Text>Aún no hay imagenes.</Text>
                                </Heading>
                            </GridItem>

                            <GridItem colSpan={15} display={['block', 'none']}>
                                <Heading
                                    fontSize="40px"
                                    marginBottom='20px'
                                >
                                    VIDEOS
                                <Text>Aún no hay videos.</Text>
                                </Heading>
                            </GridItem>

                            <GridItem colSpan={15} display={['block', 'none']}>
                                <Heading
                                    fontSize="40px"
                                    marginBottom='20px'
                                >
                                    GRABACIONES
                                </Heading>
                                <Text>Aún no hay grabaciones.</Text>
                            </GridItem>
                                */}

                            <GridItem colSpan={6} marginBottom={['40px', '0']}>
                                <Box width='full' padding={[0, '0 150px']} suppressHydrationWarning>
                                    <Tabs isFitted variant='enclosed'>
                                        <TabList mb='1em'>
                                            {/** IMAGENES */}
                                            <Tab position='relative' fontSize={['30px', '18px']}>
                                                Imágenes
                                            </Tab>
                                            {/** VIDEOS */}
                                            <Tab position='relative' fontSize={['30px', '18px']}>
                                                Videos
                                            </Tab>
                                            {/** PARTIDOS */}
                                            <Tab position='relative' fontSize={['30px', '18px']}>
                                                Partidos
                                            </Tab>
                                        </TabList>
                                        <TabPanels textAlign='center'>
                                            <TabPanel>
                                                <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                    <Text style={ imagenesGaleriaArray.length == 0 ? { display: 'block'} : { display: 'none' }} fontSize={['30px', '18px']}>Aún no hay imágenes.</Text>
                                                    { imagenesGaleriaArray.map((imagenBase64, index) => {
                                                        return (
                                                            <Image key={ index } w='330px' src= { imagenBase64 } alt='' />
                                                        )
                                                    })}
                                                </VStack>
                                            </TabPanel>
                                            <TabPanel>
                                                <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                    <Text style={ videosGaleria.length == 0 ? { display: 'block' } : { display: 'none' } } fontSize={['30px', '18px']}>Aún no hay videos.</Text>
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
                                            <TabPanel>
                                                <VStack marginTop='40px' marginBottom='60px' width={['505px', '100%']}>
                                                    
                                                    <Text fontSize={['30px', '18px']}>Aún no hay partidos.</Text>

                                                    <TableContainer>
                                                        <Table variant='striped' colorScheme='teal'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Equipos</Th>
                                                                    <Th>Resultados</Th>
                                                                    <Th>Fecha</Th>
                                                                    <Th>Grabación</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {galeriaPartidos.map((partido, index) => {
                                                                    return (
                                                                        <Tr key={index}>
                                                                            <Td textAlign='center'>
                                                                                {partido.equipoA}<br />
                                                                                VS<br />
                                                                                {partido.equipoB}
                                                                            </Td>
                                                                            <Td textAlign='center'>
                                                                                {partido.resultadoA}<br />
                                                                                -<br />
                                                                                {partido.resultadoB}
                                                                            </Td>
                                                                            <Td textAlign='center'>{partido.fechaDelPartido}</Td>
                                                                            <Td textAlign='center'><Link href={partido.urlDelVideoPartido}><ExternalLinkIcon /></Link></Td>
                                                                        </Tr>
                                                                    )
                                                                })}
                                                            </Tbody>
                                                        </Table>
                                                    </TableContainer>
                                                    
                                                    {/**
                                                    <Text style={ videosGaleria.length == 0 ? { display: 'block' } : { display: 'none' } }>Aún no hay partidos.</Text>
                                                    {
                                                        galeriaPartidos.map((partido, index) => {
                                                            return (
                                                                <Box key={ index }>
                                                                    <Text>{ partido.equipoA }</Text>
                                                                    <Text>{ partido.equipoB }</Text>
                                                                    <Text>{ partido.urlDelVideoPartido }</Text>
                                                                    <Text>{ partido.resultadoA }</Text>
                                                                    <Text>{ partido.resultadoB }</Text>
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                    */}
                                                </VStack>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Box>
        </>
    )
}