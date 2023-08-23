import { Component, useEffect } from 'react';
import React from 'react';

import {
    AspectRatio,
    Box,
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
    Tooltip,
    FormHelperText
} from '@chakra-ui/react';

import NavBar from '../src/Components/NavBar/NavBar';

import { useFileUpload } from 'use-file-upload';

import { useState } from 'react';

import Router from 'next/router';

import { useDisclosure, useToast } from '@chakra-ui/react'
import { ChevronRightIcon, EditIcon, AddIcon, LinkIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

import clubes from '../../db/clubesAFA';
import paises from '../../db/paises';


export default function Perfil() {

    const [files, selectFiles] = useFileUpload();

    const toast = useToast();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState('');
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('');

    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [tiktok, setTiktok] = useState('');

    const [edad, setEdad] = useState('');
    const [club, setClub] = useState('');
    const [pais, setPais] = useState('');
    const [posicion, setPosicion] = useState(''); 
    const [categoria, setCategoria] = useState('');
    const [genero, setGenero] = useState('');
    const [estatura, setEstatura] = useState(''); 
    const [peso, setPeso] = useState(''); 
    const [nacimiento, setNacimiento] = useState('');
    const [pieHabil, setPieHabil] = useState('');
    const [nivelDeIngles, setNivelDeIngles ] = useState('');
    const [certificaciones, setCertificaciones] = useState('');
    const [condicion, setCondicion] = useState('');
    const [presupuesto, setPresupuesto ] = useState('');
    const [lugarEnElCampo, setLugarEnElCampo] = useState('');
    const [pases, setPases] = useState(false);
    const [tiros, setTiros] = useState(false);
    const [resistencia, setResistencia] = useState(false);
    const [visionDeJuego, setVisionDeJuego] = useState(false);
    const [unoVsUno, setUnoVsUno] = useState(false);
    const [tirosLibres, setTirosLibres] = useState(false);
    const [marca, setMarca] = useState(false);
    const [juegoAereo, setJuegoAereo] = useState(false);


    const [videosGaleria, setVideosGaleria] = useState([])
    const [imagenesGaleriaArray, setImagenesGaleriaArray] = useState([]);

    const [galeriaPartidos, setGaleriaPartidos] = useState([
        {
                equipoA: 'Equipo A Test',
                equipoB: 'Equipo B Test',
                urlDelVideoPartido: 'URL del video del partido Test',
                resultadoA: 'Resultado A Test',
                resultadoB: 'Resultado B Test'
        },
    ]);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenVideos, onOpen: onOpenVideos, onClose: onCloseVideos } = useDisclosure();
    const { isOpen: isOpenPartidos, onOpen: onOpenPartidos, onClose: onClosePartidos } = useDisclosure();

    const cancelRef = React.useRef()

    const [equipoA, setEquipoA] = useState('');
    const [equipoB, setEquipoB] = useState('');
    const [urlDelVideoPartido, setUrlDelVideoPartido] = useState('');
    const [resultadoA, setResultadoA] = useState('');
    const [resultadoB, setResultadoB] = useState('');

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

    const handleShare = () => {
        let shareLink = 'http://localhost:3000/Usuario/' + email
        navigator.clipboard.writeText(shareLink);
        toast({
            title: 'Enlace copiado al portapapeles',
            description: "Ya puedes compartir tu perfil",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const handleUpdate = () => {
        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fotoPerfil: fotoPerfil,
                nombre: nombre,
                apellido: apellido,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
                tiktok: tiktok,
                club: club,
                pais: pais,
                nacimiento: nacimiento,
                nivelDeIngles: nivelDeIngles,
                pieHabil: pieHabil,
                posicion: posicion,
                genero: genero,
                estatura: estatura,
                peso: peso,
                categoria: categoria,
                condicion: condicion,
                presupuesto: presupuesto,
                imagenesGaleriaArray: imagenesGaleriaArray,
                videosGaleria: videosGaleria,
                galeriaPartidos: galeriaPartidos,
                lugarEnElCampo: lugarEnElCampo,
                pases: pases,
                tiros: tiros,
                resistencia: resistencia,
                visionDeJuego: visionDeJuego,
                unoVsUno: unoVsUno,
                tirosLibres: tirosLibres,
                marca: marca,
                juegoAereo: juegoAereo,
            })
        })
        .then(data => {
            console.log(data);
            setEdicionActivada(false)
        })
    }

    const handleFileUpload = (e) => {
        console.log("handleFileUpload ejecutándose");
        const imagenArchivo = e.target.files[0];
        convertToBase64(imagenArchivo)
        .then(imagenBase64 => {
            setImagenesGaleriaArray([...imagenesGaleriaArray, imagenBase64])
        })
    }

    const handleVideoUpload = (e) => {
        let ytUrl = e.target.value;
        ytUrl = ytUrl.replace('/watch?v=', '/embed/')
        setVideosGaleria([...videosGaleria, ytUrl])
    }

    const [edicionActivada, setEdicionActivada] = useState(false);

    const uploadImage = () => {
        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fotoPerfil: fotoPerfil,
                nombre: nombre,
                apellido: apellido,
                facebook: facebook,
                twitter: twitter,
                instagram: instagram,
                tiktok: tiktok,
                nacimiento: nacimiento,
                nivelDeIngles: nivelDeIngles,
                pieHabil: pieHabil,
                posicion: posicion,
                genero: genero,
                estatura: estatura,
                peso: peso,
                categoria: categoria,
                condicion: condicion,
                presupuesto: presupuesto,
                imagenesGaleriaArray: imagenesGaleriaArray,
                videosGaleria: videosGaleria,
                galeriaPartidos: galeriaPartidos,
                lugarEnElCampo: lugarEnElCampo,
                pases: pases,
                tiros: tiros,
                resistencia: resistencia,
                visionDeJuego: visionDeJuego,
                unoVsUno: unoVsUno,
                tirosLibres: tirosLibres,
                marca: marca,
                juegoAereo: juegoAereo,
            })
        })
        .then(data => {
            console.log(data);
            onClose()
        })
    }

    const uploadVideo = () => {
        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fotoPerfil: fotoPerfil,
                nombre: nombre,
                apellido: apellido,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
                tiktok: tiktok,
                nacimiento: nacimiento,
                nivelDeIngles: nivelDeIngles,
                pieHabil: pieHabil,
                posicion: posicion,
                genero: genero,
                estatura: estatura,
                peso: peso,
                categoria: categoria,
                condicion: condicion,
                presupuesto: presupuesto,
                imagenesGaleriaArray: imagenesGaleriaArray,
                videosGaleria: videosGaleria,
                galeriaPartidos: galeriaPartidos,
                lugarEnElCampo: lugarEnElCampo,
                pases: pases,
                tiros: tiros,
                resistencia: resistencia,
                visionDeJuego: visionDeJuego,
                unoVsUno: unoVsUno,
                tirosLibres: tirosLibres,
                marca: marca,
                juegoAereo: juegoAereo,
            })
        })
        .then(data => {
            console.log(data);
            onCloseVideos()
        })
    }

    const handleUpdatePartidos = () => {
        setGaleriaPartidos([...galeriaPartidos, {
            equipoA: equipoA,
            equipoB: equipoB,
            urlDelVideoPartido: urlDelVideoPartido,
            resultadoA: resultadoA,
            resultadoB: resultadoB
        }])

        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fotoPerfil: fotoPerfil,
                nombre: nombre,
                apellido: apellido,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
                tiktok: tiktok,
                nacimiento: nacimiento,
                nivelDeIngles: nivelDeIngles,
                pieHabil: pieHabil,
                posicion: posicion,
                genero: genero,
                estatura: estatura,
                peso: peso,
                categoria: categoria,
                condicion: condicion,
                presupuesto: presupuesto,
                imagenesGaleriaArray: imagenesGaleriaArray,
                videosGaleria: videosGaleria,
                galeriaPartidos: galeriaPartidos,
                lugarEnElCampo: lugarEnElCampo,
                pases: pases,
                tiros: tiros,
                resistencia: resistencia,
                visionDeJuego: visionDeJuego,
                unoVsUno: unoVsUno,
                tirosLibres: tirosLibres,
                marca: marca,
                juegoAereo: juegoAereo,
            })
        })
        .then(data => {
            console.log(data);
            onCloseVideos()
        })

    }
    
    const handleNacimientoChange = (e) => {
        setNacimiento(e.target.value);
        console.log(e.target.value);
        localStorage.setItem('nacimiento', e.target.value);
    }

    const handlePaisChange = (e) => {
        setPais(e.target.value);
        localStorage.setItem('pais', e.target.value);
    }

    const handleNivelDeInglesChange = (e) => {
        setNivelDeIngles(e.target.value);
        localStorage.setItem('nivelDeIngles', e.target.value);
    }

    const handlePieHabilChange = (e) => {
        setPieHabil(e.target.value);
        localStorage.setItem('pieHabil', e.target.value);
    }

    const handlePosicionChange = (e) => {
        setPosicion(e.target.value);
        localStorage.setItem('posicion', e.target.value);
    }

    const handleEstaturaChange = (e) => {
        setEstatura(e.target.value);
        localStorage.setItem('estatura', e.target.value);
    }

    const handlePesoChange = (e) => {
        setPeso(e.target.value);
        localStorage.setItem('peso', e.target.value);
    }

    const handleClubChange = (e) => {
        setClub(e.target.value);
        localStorage.setItem('club', e.target.value);
    }

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
        localStorage.setItem('categoria', e.target.value);
    }

    const handleCondicionChange = (e) => {
        setCondicion(e.target.value);
        localStorage.setItem('condicion', e.target.value)
    }

    const handlePresupuestoChange = (e) => {
        setPresupuesto(e.target.value);
        localStorage.setItem('presupuesto', e.target.value)
    }

    const elegirLugarEnElCampo = (e, idLugarEnElCampo) => {
        if (this.LugarEnElCampoSeleccionado == false) {
            e.currentTarget.style.backgroundColor = '#2DA0E4'
            this.LugarEnElCampoSeleccionado = true
            switch (idLugarEnElCampo) {
                case 1:
                    localStorage.setItem("lugarEnElCampo", "1");
                    break;
                case 2:
                    localStorage.setItem("lugarEnElCampo", "2");
                    break;
                case 3:
                    localStorage.setItem('lugarEnElCampo', '3');
                    break;
                case 4:
                    localStorage.setItem('lugarEnElCampo', '4');
                    break;
                case 5:
                    localStorage.setItem('lugarEnElCampo', '5');
                    break;
                case 6:
                    localStorage.setItem('lugarEnElCampo', '6');
                    break;
                case 7:
                    localStorage.setItem('lugarEnElCampo', '7');
                    break;
                case 8:
                    localStorage.setItem('lugarEnElCampo', '8');
                    break;
                case 9:
                    localStorage.setItem('lugarEnElCampo', '9');
                    break;
                case 10:
                    localStorage.setItem('lugarEnElCampo', '10');
                    break;
                case 11:
                    localStorage.setItem('lugarEnElCampo', '11');
                    break;
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');

        console.log(galeriaPartidos);

        fetch('https://bq-a1-be.vercel.app/buscarUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('email')
            })
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            localStorage.setItem('email', response.email);
            localStorage.setItem('password', response.password);
            localStorage.setItem('fotoPerfil', response.fotoPerfil);
            localStorage.setItem('nombre', response.nombre);
            localStorage.setItem('apellido', response.apellido);



            localStorage.setItem('urlDeImagen', response.urlDeImagen);
            localStorage.setItem('edad', response.edad);
            localStorage.setItem('pais', response.pais);
            localStorage.setItem('nivelDeIngles', response.nivelDeIngles);
            localStorage.setItem('lugarEnElCampo', response.lugarEnElCampo);
            localStorage.setItem('pieHabil', response.pieHabil);
            localStorage.setItem('posicion', response.posicion);
            localStorage.setItem('genero', response.genero);
            localStorage.setItem('estatura', response.estatura);
            localStorage.setItem('peso', response.peso);
            localStorage.setItem('club', response.club);
            localStorage.setItem('categoria', response.categoria);
            localStorage.setItem('condicion', response.condicion);
            localStorage.setItem('presupuesto', response.presupuesto);

            setImagenesGaleriaArray(response.imagenesGaleriaArray)
            setVideosGaleria(response.videosGaleria);

            setGaleriaPartidos(response.galeriaPartidos);

            setEmail(localStorage.getItem('email'))
            setPassword(localStorage.getItem('password'));
            setFotoPerfil(localStorage.getItem('fotoPerfil'));
            setNombre(localStorage.getItem('nombre'))
            setApellido(localStorage.getItem('apellido'))

            setFacebook(localStorage.getItem('facebook'));
            setInstagram(localStorage.getItem('instagram'));
            setTwitter(localStorage.getItem('twitter'))
            setTiktok(localStorage.getItem('tiktok'));


            setEdad(localStorage.getItem('edad'));
            setClub(localStorage.getItem('club'))
            setPosicion(localStorage.getItem('posicion'));
            setCategoria(localStorage.getItem('categoria'));
            setGenero(localStorage.getItem('genero'));
            setEstatura(localStorage.getItem('estatura'));
            setPeso(localStorage.getItem('peso'));
            setNacimiento(localStorage.getItem('nacimiento'));
            setPais(localStorage.getItem('pais'));
            setCondicion(localStorage.getItem('condicion'));
            setNivelDeIngles(localStorage.getItem('nivelDeIngles'));
            setPresupuesto(localStorage.getItem('presupuesto'));

            setLugarEnElCampo(localStorage.getItem('lugarEnElCampo'));

            setPieHabil(localStorage.getItem('pieHabil'));
            setPases((localStorage.getItem('pases') === 'true'))
            setTiros((localStorage.getItem('tiros') === 'true'))
            setResistencia((localStorage.getItem('resistencia') === 'true'))
            setVisionDeJuego((localStorage.getItem('visionDeJuego') === 'true'))
            setUnoVsUno((localStorage.getItem('unoVsUno') === 'true'))
            setTirosLibres((localStorage.getItem('tirosLibres') === 'true' ))
            setMarca((localStorage.getItem('marca') === 'true' ))
            setJuegoAereo((localStorage.getItem('juegoAereo') === 'true' ))
        })
    }, []);

    return(
        <>
        <Box>
            <NavBar />
            {/**
            <SideBar />
             */}
            
            <VStack>
                <HStack marginTop='100px' zIndex='1'>
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
                                        <HStack>
                                            <Image
                                                alt=''
                                                borderRadius='full'
                                                id="fotoDePerfil"
                                                src={ fotoPerfil }
                                                height='180px'
                                                width='180px'
                                                objectFit='cover'
                                            />
                                            <Box
                                                cursor='pointer'
                                                color=''
                                                style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}>
                                                <EditIcon/>
                                            </Box>
                                        </HStack>
                                        
                                        <Heading>{ nombre } { apellido }</Heading>
                                        <Box
                                            cursor='pointer'
                                            color=''
                                            style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }}>
                                            <EditIcon/>
                                        </Box>
                                        <HStack gap="5px">
                                            {/**
                                            <CircularProgress value={70} color='green.400' size='60px'>
                                                <CircularProgressLabel>70%</CircularProgressLabel>
                                            </CircularProgress>
                                             */}
                                            <Button
                                                color="white"
                                                background="#144077"
                                                onClick={handleShare}
                                            >
                                                <LinkIcon /> &nbsp;Compartir perfil 
                                            </Button>
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
                                    <HStack>
                                        {/**
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
                                        <Select className="campoDeEdicion" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} placeholder="Seleccionar" onChange={ handlePaisChange }>
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
                                        <Select className="campoDeEdicion" placeholder="Seleccionar" style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handleClubChange }>
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
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handlePieHabilChange }>
                                            <option>Izquierdo</option>
                                            <option>Derecho</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        POSICIÓN <br />
                                        <strong>{ posicion }</strong>
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handlePosicionChange }>
                                            <option>Delantero</option>
                                            <option>Mediocampista</option>
                                            <option>Defensor</option>
                                            <option>Arquero</option>
                                        </Select>
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        CATEGORÍA <br />
                                        <strong>{ categoria }</strong>
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handleCategoriaChange }>
                                            <option>Pro</option>
                                            <option>Semi-Pro</option>
                                            <option>Juvenil</option>
                                            <option>Amateur</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        ESTATURA <br />
                                        <strong>{ estatura }</strong>
                                        <Input className="campoDeEdicion" placeholder='Ingresar estatura' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handleEstaturaChange } />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PESO <br />
                                        <strong>{ peso }</strong>
                                        <Input className="campoDeEdicion" placeholder='Ingresar peso' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handlePesoChange } />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        Edad  <br />
                                        <strong>{ edad }</strong>
                                        <VStack style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <FormControl>
                                                <input type='date' onChange={ handleNacimientoChange }/>
                                                {/**
                                                <Input placeholder="Ingresar Nacimiento"/>
                                                */}
                                                <FormHelperText>
                                                    Ingresa tu fecha de nacimiento <br />
                                                    Tu edad: <Text fontWeight='bold' display='inline-block'>{ edad }</Text>
                                                </FormHelperText>
                                            </FormControl>
                                        </VStack>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        NIVEL DE INGLÉS <br />
                                        <strong>{ nivelDeIngles }</strong>
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handleNivelDeInglesChange }>
                                            <option>Bilingüe</option>
                                            <option>Avanzado</option>
                                            <option>Intermedio</option>
                                            <option>Básico</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        CONDICIÓN <br />
                                        <strong>{ condicion }</strong>
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handleCondicionChange }>
                                            <option>Libre</option>
                                            <option>Con contrato</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        PRESUPUESTO <br />
                                        <strong>{ presupuesto }</strong>
                                        <Select className="campoDeEdicion" placeholder='Seleccionar' style={ edicionActivada ? { display: 'block' } : { display: 'none' }} onChange={ handlePresupuestoChange }>
                                            <option>0 - 5.000</option>
                                            <option>6.0000 - 10.000</option>
                                            <option>10.000 - 15.000</option>
                                            <option>16.000 - 20.000</option>
                                            <option>Más de 20.000</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <HStack>
                                            <Button style={ !edicionActivada ? { display: 'inline-block' } : { display: 'none' }} onClick={() => setEdicionActivada(true) }>Editar&nbsp;<EditIcon /></Button>
                                            <Button style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }} onClick={() => setEdicionActivada(false) }>Cancelar&nbsp;<CloseIcon /></Button>
                                            <Button color="white"
                                                    background="#144077"
                                                    style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }} onClick={ handleUpdate }>Guardar&nbsp;<CheckIcon /></Button>
                                        </HStack>
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
                                        {/** IMAGENES */}
                                        <Tab position='relative' >
                                            Imágenes&nbsp;&nbsp;&nbsp;
                                            <Tooltip label="Agregar imagen" aria-label='A tooltip'>
                                                <Link onClick={onOpen} position='absolute' right='20px'>
                                                    <AddIcon />
                                                </Link>
                                            </Tooltip>
                                        </Tab>
                                        {/** VIDEOS */}
                                        <Tab position='relative'>
                                            Videos&nbsp;&nbsp;&nbsp;
                                            <Tooltip label="Agregar video" aria-label='A tooltip'>
                                                <Link onClick={onOpenVideos} position='absolute' right='20px'>
                                                    <AddIcon />
                                                </Link>
                                            </Tooltip>
                                        </Tab>
                                        {/** PARTIDOS */}
                                        <Tab position='relative'>
                                            Partidos&nbsp;&nbsp;&nbsp;
                                            <Tooltip label="Agregar partido" aria-label='A tooltip'>
                                                <Link onClick={onOpenPartidos} position='absolute' right='20px'>
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
                                                    <Button colorScheme='blue' onClick={uploadImage} ml={3}>
                                                        Guardar
                                                    </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>
                                            <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                <Text style={ imagenesGaleriaArray.length == 0 ? { display: 'block'} : { display: 'none' }}>Aún no has subido ninguna imagen.</Text>
                                                { imagenesGaleriaArray.map((imagenBase64, index) => {
                                                    return (
                                                        <Image key={ index } w='330px' src= { imagenBase64 } alt='' />
                                                    )
                                                })}
                                            </VStack>
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
                                                    <Button colorScheme='blue' onClick={uploadVideo} ml={3}>
                                                        Guardar
                                                    </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>
                                            <VStack width='full' marginTop='40px' marginBottom='60px'>
                                                <Text style={ videosGaleria.length == 0 ? { display: 'block' } : { display: 'none' } }>Aún no has subido ningún video.</Text>
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
                                            <AlertDialog
                                                isOpen={isOpenPartidos}
                                                leastDestructiveRef={cancelRef}
                                                onClose={onClosePartidos}
                                            >
                                                <AlertDialogOverlay>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                    Agregar Partido
                                                    </AlertDialogHeader>

                                                    <AlertDialogBody>

                                                        <Text marginBottom='10px' marginBottom='10px'>URL del video:</Text>
                                                        <Input type="txt" placeholder="Url del video" onChange={ (e) => {
                                                            localStorage.setItem('Url del video Partido', e.target.value);
                                                            setUrlDelVideoPartido(e.target.value)
                                                        } }/>

                                                        <Text marginTop='10px' marginBottom='10px'>Fecha:</Text>
                                                        <Input type="date" />

                                                        <Text marginTop='10px' marginBottom='10px'>Equipos:</Text>
                                                        <HStack marginBottom='10px'>
                                                            <Input type="text" placeholder="Equipo A" onChange={ (e) => { localStorage.setItem('Equipo A', e.target.value); setEquipoA(e.target.value) } }/>
                                                            <Input type="text" placeholder="Equipo B" onChange={ (e) => { localStorage.setItem('Equipo B', e.target.value); setEquipoB(e.target.value) } }/>
                                                        </HStack>

                                                        <Text marginBottom='10px'>Resultado:</Text>
                                                        <HStack>
                                                            <Input type="text" placeholder="Goles Equipo A" onChange={ (e) => {
                                                                localStorage.setItem('Goles Equipo A', e.target.value);
                                                                setResultadoA(e.target.value);
                                                            } }/>
                                                            <Input type="text" placeholder="Goles Equipo B" onChange={ (e) => {
                                                                localStorage.setItem('Goles Equipo 1 B', e.target.value);
                                                                setResultadoB(e.target.value);  
                                                            }
                                                             }/>
                                                        </HStack>
                                                    </AlertDialogBody>

                                                    <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onClosePartidos}>
                                                        Cancelar
                                                    </Button>
                                                    <Button colorScheme='blue' onClick={handleUpdatePartidos} ml={3}>
                                                        Guardar
                                                    </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>
                                            <VStack width='full' marginTop='40px' marginBottom='60px'>
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
                                            </VStack>
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
                                    {imagenesGaleriaArray.map((url, index) => (
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