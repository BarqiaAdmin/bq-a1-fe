import { Component, useEffect } from 'react';
import React from 'react';

import {
    AspectRatio,
    Badge,
    Box,
    Flex,
    Container,
    FormErrorMessage,
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
import NavBarMobile from '../src/Components/NavBar/NavBarMobile'

import { useFileUpload } from 'use-file-upload';

import { useState } from 'react';

import Router from 'next/router';

import { useDisclosure, useToast } from '@chakra-ui/react'
import { ChevronRightIcon, EditIcon, AddIcon, LinkIcon, CheckIcon, CloseIcon, ExternalLinkIcon, SmallCloseIcon, EmailIcon } from '@chakra-ui/icons';

import clubes from '../../db/clubesAFA';
import paises from '../../db/paises';


export default function Perfil() {

    const [camposUniversidadesV, setCamposUniversidadesV] = useState(false);

    const [files, selectFiles] = useFileUpload();

    const toast = useToast();

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('');

    const [email, setEmail] = useState('')

    const [videosGaleria, setVideosGaleria] = useState([])
    const [imagenesGaleriaArray, setImagenesGaleriaArray] = useState([]);

    //const [galeriaPartidos, setGaleriaPartidos] = useState([]);

    const [password, setPassword] = useState('');

    const [fotoPerfil, setFotoPerfil] = useState('');

    const [nacimiento, setNacimiento] = useState('');

    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [tiktok, setTiktok] = useState('');

    const [edad, setEdad] = useState('');
    const [estatura, setEstatura] = useState(''); 
    const [peso, setPeso] = useState(''); 
    const [genero, setGenero] = useState('');

    const [club, setClub] = useState('');

    const [pais, setPais] = useState('');

    const [posicion, setPosicion] = useState('');

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
    const [fuerza, setFuerza] = useState(false);
    const [velocidad, setVelocidad] = useState(false);

    const [categoria, setCategoria] = useState('');

    const [vistoPorAgentes, setVistoPorAgentes] = useState(false);
    const [vistoPorClubes, setPorClubes] = useState(false);
    const [vistoPorUniversidades, setVistoPorUniversidades] = useState(false);


    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenVideos, onOpen: onOpenVideos, onClose: onCloseVideos } = useDisclosure();
    const { isOpen: isOpenPartidos, onOpen: onOpenPartidos, onClose: onClosePartidos } = useDisclosure();

    const cancelRef = React.useRef()

    const [fechaDelPartido, setFechaDelPartido] = useState('')
    const [equipoA, setEquipoA] = useState('');
    const [equipoB, setEquipoB] = useState('');
    const [urlDelVideoPartido, setUrlDelVideoPartido] = useState('');
    const [resultadoA, setResultadoA] = useState('');
    const [resultadoB, setResultadoB] = useState('');

    const [partido, setPartido] = useState([]);
    const [galeriaPartidos, setGaleriaPartidos] = useState([]);

    /** EDITS */

    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoApellido, setNuevoApellido] = useState('');

    /**
    let shareLink
    if (typeof window !== 'undefined') {
        shareLink = window.location.href
    }
    console.log(shareLink)
    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
    console.log(pattern)
    let userEmail = shareLink.match(pattern)[0]
    console.log(userEmail);
     */

    const onChangeEdit = (e) => {
        e.preventDefault();
        console.log(camposUniversidadesV);
        setCamposUniversidadesV(!camposUniversidadesV);
    }

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
        let shareLink = 'https://bq-a1-fe-t8pc.vercel.app/Usuario/' + email
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
                edad: edad, pais: pais,
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
                peso: peso, club: club,
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

    const handleProfileImageChange = async (e) => {
        setFotoPerfil(e.target.value);
        localStorage.setItem('fotoPerfil', e.target.value);
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setFotoPerfil(base64.toString())
        localStorage.setItem('fotoPerfil', base64.toString());
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
                edad: edad, pais: pais,
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
                peso: peso, club: club,
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
                edad: edad, pais: pais,
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
                peso: peso, club: club,
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

    const handlePreparePartido = (e) => {
        setGaleriaPartidos([...galeriaPartidos, {
            equipoA: equipoA,
            equipoB: equipoB,
            resultadoA: resultadoA,
            resultadoB: e.target.value,
            fechaDelPartido: fechaDelPartido,
            urlDelVideoPartido: urlDelVideoPartido,
        }])
    }
    
    const handleUpdatePartido = () => {
        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                edad: edad, pais: pais,
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
                peso: peso, club: club,
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
            onClosePartidos()
        })
    }

    const age = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
        localStorage.setItem('nombre', e.target.value);
    }
    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
        localStorage.setItem('estallido', e.target.value);
    }

    const handleNacimientoChange = (e) => {
        let nacimiento = e.target.value
        console.log('Fecha de nacimiento: ' + nacimiento);
        console.log('Calculando edad...')
        let edad = age(e.target.value).toString();
        console.log(edad);
        
        setEdad(edad);
        
        localStorage.setItem('nacimiento', nacimiento);
        localStorage.setItem('edad', edad);
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

    const elegirAtributo = (e, atributo) => {
        if (localStorage.getItem(atributo) == 'false') {
            localStorage.setItem(atributo, 'true')
        } else {
            localStorage.setItem(atributo, 'false')
        }
        switch(atributo) {
            case 'pases':
                setPases(!pases);
                break;
            case 'tiros':
                setTiros(!tiros);
                break;
            case 'resistencia':
                setResistencia(!resistencia);
                break;
            case 'visionDeJuego':
                setVisionDeJuego(!visionDeJuego);
                break;
            case 'unoVsUno':
                setUnoVsUno(!unoVsUno);
                break;
            case 'tirosLibres':
                setTirosLibres(!tirosLibres);
                break;
            case 'marca':
                setMarca(!marca);
                break;
            case 'juegoAereo':
                setJuegoAereo(!juegoAereo);
                break;
            case 'fuerza':
                setFuerza(!fuerza);
                break;
            case 'velocidad':
                setVelocidad(!velocidad);
                break;
        }
    }

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');

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
            //localStorage.setItem('email', response.email);
            //localStorage.setItem('password', response.password);
            //localStorage.setItem('fotoPerfil', response.fotoPerfil);
            //localStorage.setItem('nombre', response.nombre);
            //localStorage.setItem('apellido', response.apellido);

            //localStorage.setItem('urlDeImagen', response.urlDeImagen);
            //localStorage.setItem('edad', response.edad);
            //localStorage.setItem('pais', response.pais);
            //localStorage.setItem('nivelDeIngles', response.nivelDeIngles);
            //localStorage.setItem('lugarEnElCampo', response.lugarEnElCampo);
            //localStorage.setItem('pieHabil', response.pieHabil);
            //localStorage.setItem('posicion', response.posicion);
            //localStorage.setItem('genero', response.genero);
            //localStorage.setItem('estatura', response.estatura);
            //localStorage.setItem('peso', response.peso);
            //localStorage.setItem('imagenesGalerArray', response.imagenesGaleriaArray)
            //localStorage.setItem('videosGaleria', response.videosGaleria);
            //localStorage.setItem('galeriaPartidos', 'en construcción');

            //localStorage.setItem('club', response.club);
            //localStorage.setItem('categoria', response.categoria);
            //localStorage.setItem('condicion', response.condicion);
            //localStorage.setItem('presupuesto', response.presupuesto);

            setEmail(response.email)
            setPassword(response.password);

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
    }, []);

    const borrarImagen = (index, e) => {
        imagenesGaleriaArray.splice(index, 1);
        e.target.style.background = 'red'
    }

    const borrarVideo = (index, e) => {
        videosGaleria.splice(index, 1);
        e.target.style.background = 'red'
    }

    const borrarPartido = (index, e) => {
        galeriaPartidos.splice(index, 1);
        e.target.style.background = 'red';
    }

    return(
        <>
        <Box>
            <NavBar />

            {/**
            <NavBarMobile />
             */}


            {/**
            <SideBar />
             */}
            
            <VStack>
                <HStack display={['none', 'none']} marginTop='100px' zIndex='1'>
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
                                        <VStack>
                                            <Image
                                                alt=''
                                                borderRadius='full'
                                                id="fotoDePerfil"
                                                src={ fotoPerfil }
                                                height={['225px', '225px']}
                                                width={['225px', '225px']}
                                                objectFit='cover'
                                            />
                                            <Input
                                                style={ edicionActivada ? { display: 'block' } : { display: 'none' }}
                                                placeholder="Select Profile Image"
                                                size="md"
                                                type="file"
                                                fontSize="40px"
                                                height='70px'
                                                width='370px'
                                                onChange={(e) => handleProfileImageChange(e)}
                                            />
                                        </VStack>
                                        
                                        <VStack>
                                            <Heading fontSize={['40px', '30px']}><strong><em>{ nombre }</em></strong></Heading>
                                             <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo nombre' } onChange={ (e) => { setNuevoNombre(e.target.value); handleNombreChange(e) } } />

                                            <Heading fontSize={['40px', '30px']}><strong><em>{ apellido }</em></strong></Heading>
                                            <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo apellido' } onChange={ (e) => { setNuevoApellido(e.target.value); handleApellidoChange(e) } }/>

                                            <Heading fontSize={['20px', '20px']}><EmailIcon />&nbsp;{ email }</Heading>
                                        </VStack>
                                        <HStack>
                                            {/**
                                            <CircularProgress value={70} color='green.400' size='60px'>
                                                <CircularProgressLabel>70%</CircularProgressLabel>
                                            </CircularProgres   s>
                                             */}
                                            <Button
                                                onClick={handleShare}

                                                color="white"
                                                background="#144077"
                                                fontSize={['30px', '30px']}
                                                padding='10px'
                                            >
                                                <LinkIcon />&nbsp;Compartir perfil 
                                            </Button>
                                        </HStack>
                                        <HStack gap="10px">
                                            <VStack>
                                                <HStack>
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
                                                </HStack>
                                                <VStack>
                                                    <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo Facebook' } onChange={ (e) => { setNuevoApellido(e.target.value) } }/>
                                                    <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo Twitter' } onChange={ (e) => { setNuevoApellido(e.target.value) } }/>
                                                    <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo Instagram' } onChange={ (e) => { setNuevoApellido(e.target.value) } }/>
                                                    <Input style={ edicionActivada ? { display: 'block' } : { display: 'none' }} type="text" placeholder={ 'Nuevo TikTok' } onChange={ (e) => { setNuevoApellido(e.target.value) } }/>
                                                </VStack>
                                            </VStack>
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
                                    {/**
                                     * 
                                     * Botonera de interfaz
                                     * 
                                     */}
                                    
                                    <HStack display={['none', 'block']} position='fixed' right='0' bottom='0' zIndex='9999'>
                                        <Button style={ !edicionActivada ? { display: 'inline-flex' } : { display: 'none' }} onClick={() => setEdicionActivada(true) } fontSize={['30px', '']} padding='50px' width="255px"><EditIcon /></Button>

                                        <HStack>
                                            <Box>
                                                <Button style={ edicionActivada ? { display: 'inline-flex' } : { display: 'none' }} onClick={() => setEdicionActivada(false) } fontSize={['30px', '']} padding='50px' width="255px"><CloseIcon /></Button>
                                            </Box>
                                            <Box>
                                            <Button color="white"
                                                    background="#144077"
                                                    style={ edicionActivada ? { display: 'inline-flex' } : { display: 'none' }} onClick={ handleUpdate }fontSize={['30px', '']} padding='50px' width="255px"><CheckIcon /></Button> 
                                            </Box>
                                        </HStack>
                                    </HStack>

                                    <HStack display={['block', 'none']} position='fixed' right='0' bottom='0' zIndex='9999'>        
                                            <Button fontSize='23px' style={ !edicionActivada ? { display: 'inline-flex' } : { display: 'none' }} onClick={() => setEdicionActivada(true) }><EditIcon /></Button>
                                            <HStack>
                                                <Box>
                                                    <Button fontSize='23px' width='150px' style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }} onClick={() => setEdicionActivada(false) }><CloseIcon /></Button>
                                                </Box>
                                                <Box>
                                                    <Button fontSize='23px' width='150px' color="white" background="#144077" style={ edicionActivada ? { display: 'inline-block' } : { display: 'none' }} onClick={ handleUpdate }><CheckIcon /></Button>
                                                </Box>
                                            </HStack>
                                    </HStack>
                                    {/**
                                     * (Cierre botonera UI)
                                     */}
                                    <GridItem colSpan={[2, 1]}>
                                        EQUIPO <br />
                                        {/**
                                        <Image src='/escudo.png' alt=''
                                            display='inline-block'
                                            width='25px'
                                        />
                                        */}
                                        <strong><em>{ club }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder="Seleccionar" onChange={ handleClubChange } fontSize={[20, 30]} marginTop={['10px', '20px']}>
                                                {clubes.map((club, index) => {
                                                    return (
                                                        <option key={ index }>{ club }</option>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                        {/**
                                        <br />
                                        CLUBES PREVIOS <br />
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Club previo 1
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>&nbsp;
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Club previo 2
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>&nbsp;
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Club previo 3
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Club previo 4
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Club previo 5
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                         */}
                                    </GridItem>

                                    <GridItem colSpan={[2, 1]}>
                                        PAIS <br />
                                        <strong><em>{ pais }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder="Seleccionar" onChange={ handlePaisChange } fontSize={[20, 30]} marginTop={['10px', '20px']}>
                                                {paises.map((pais, index) => {
                                                    return (
                                                        <option key={index}>{  pais }</option>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem colSpan={[2, 1]}>
                                        PIE HÁBIL <br />
                                        <strong><em>{ pieHabil }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handlePieHabilChange } fontSize={[20, 30]} marginTop={['10px', '20px']}>
                                                <option>Izquierdo</option>
                                                <option>Derecho</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem colSpan={[2, 1]}>
                                        POSICIÓN <br />
                                        <strong><em>{ posicion }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handlePosicionChange } fontSize={[20, 30]} marginTop={['10px', '20px']}>
                                                <option>Delantero</option>
                                                <option>Mediocampista</option>
                                                <option>Defensor</option>
                                                <option>Arquero</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem colSpan={[2, 1]}>
                                        CATEGORÍA <br />
                                        <strong><em>{ categoria }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handleCategoriaChange } fontSize={[20, 30]} marginTop={['10px', '20px']}>
                                                <option>Pro</option>
                                                <option>Semi-Pro</option>
                                                <option>Juvenil</option>
                                                <option>Amateur</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem colSpan={[4, 1]}>
                                        Edad  <br />
                                        <strong><em>{ edad }</em></strong>
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
                                    <GridItem colSpan={[2, 1]}>
                                        ESTATURA <br />
                                        <strong><em>{ estatura }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Input className="campoDeEdicion" placeholder='Ingresar estatura' onChange={ handleEstaturaChange } fontSize={[20, 30]} marginTop={['10px', '20px']}/>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem colSpan={[2, 1]}>
                                        PESO <br />
                                        <strong><em>{ peso }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Input className="campoDeEdicion" placeholder='Ingresar peso' onChange={ handlePesoChange } fontSize={[20, 30]} marginTop={['10px', '20px']}/>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem colSpan={[4, 1]} style={ edicionActivada ? { display: 'block' } : { display: 'block' }}>
                                        CONDICIÓN <br />
                                        <strong><em>{ condicion }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handleCondicionChange }>
                                                <option>Libre</option>
                                                <option>Con contrato</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem colSpan={[4, 1]} style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                        <HStack>
                                            <FormControl onClick={(e) => onChangeEdit(e)}>
                                                <Checkbox type='checkbox' />
                                                <FormLabel>Deseo ser visto por UNIVERSIDADES</FormLabel>
                                            </FormControl>
                                        </HStack>
                                    </GridItem>
                                    {/** CERTIFICACIONES
                                    <GridItem colSpan={[4, 1]}>
                                        CERTIFICACIONES <br />
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Certificación 1
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>&nbsp;
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Certificación 2
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>&nbsp;
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Certificación 3
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Certificación 4
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                        <Badge colorScheme='green' fontSize='20px' p='2px 12px'>
                                            Certificación 5
                                            <Input placeholder='Modificar certificación' style={ edicionActivada ? { display: 'block' } : { display: 'none' }}/>
                                        </Badge>
                                    </GridItem>
                                     */}
                                    <GridItem colSpan={[4, 1]} style={ camposUniversidadesV ? { display: 'block' } : { display: 'none' }}>
                                        NIVEL DE INGLÉS <br />
                                        <strong><em>{ nivelDeIngles }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handleNivelDeInglesChange }>
                                                <option>Bilingüe</option>
                                                <option>Avanzado</option>
                                                <option>Intermedio</option>
                                                <option>Básico</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    
                                    <GridItem colSpan={[4, 1]} style={ camposUniversidadesV ? { display: 'block' } : { display: 'none' }}>
                                        PRESUPUESTO <br />
                                        <strong><em>{ presupuesto }</em></strong>
                                        <FormControl style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                            <Select className="campoDeEdicion" placeholder='Seleccionar' onChange={ handlePresupuestoChange }>
                                                <option>0 - 5.000</option>
                                                <option>6.0000 - 10.000</option>
                                                <option>10.000 - 15.000</option>
                                                <option>16.000 - 20.000</option>
                                                <option>Más de 20.000</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem colSpan={[2, 1]} style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                        <HStack>
                                            <Checkbox type='checkbox' />
                                            <Text>Deseo ser visto por AGENTES</Text>
                                        </HStack>
                                    </GridItem>
                                    
                                    <GridItem colSpan={[2, 1]} style={ edicionActivada ? { display: 'block' } : { display: 'none' }}>
                                        <HStack>
                                            <Checkbox type='checkbox' />
                                            <Text>Deseo ser visto por CLUBES</Text>
                                        </HStack>
                                    </GridItem>
                                </SimpleGrid>
                            </HStack>
                        </GridItem>
                        
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={6}>
                                <GridItem colSpan={6} textAlign='center' marginLeft={['130px', '0']} marginBottom={['25px', '0']}>
                                    <Heading
                                        fontSize="35px"
                                        marginBottom={['50px', '30px']}
                                    >
                                        Atributos
                                    </Heading>
                                    <VStack marginBottom='70px'>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'pases')}}} style={ !pases && !edicionActivada ? { display: 'none '} : { display: 'block' }} className='btn2' background={ !pases ? 'transparent' : '#35383B'}  fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Pases</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'tiros')}}} style={ !tiros && !edicionActivada ? { display: 'none '} : { display: 'block' }} className="btn2" background={ !tiros ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Tiros</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'resistencia')}}} style={ !resistencia && !edicionActivada ? { display: 'none'} : { display: 'block' }} className="btn2" background={ !resistencia ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Resistencia</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'visionDeJuego')}}} style={ !visionDeJuego && !edicionActivada ? { display: 'none'} : { display: 'block' }} className="btn2" background={ !visionDeJuego ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Visión de juego</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'unoVsUno')}}} style={ !unoVsUno && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !unoVsUno ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>1vs1</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'tirosLibres')}}} style={ !tirosLibres && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !tirosLibres ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Tiros libres</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'marca')}}} style={ !marca && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !marca ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Marca</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'juegoAereo')}}} style={ !juegoAereo && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !juegoAereo ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Juego aéreo</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'fuerza')}}} style={ !fuerza && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !fuerza ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Fuerza</Button>
                                        <Button onClick={(e) => { if(edicionActivada) {elegirAtributo(e, 'velocidad')}}} style={ !velocidad && !edicionActivada ? { display: 'none' } : { display: 'block' }} className="btn2" background={ !velocidad ? 'transparent' : '#35383B'} fontSize='23px' height='100px' width={['200px', '450px']} marginLeft='0'>Velocidad</Button>
                                    </VStack>
                                </GridItem>
                                                        
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

                                <GridItem colSpan={6} marginBottom={['40px', '0']}>
                                    <Box width='full' padding={[0, '0 150px']} suppressHydrationWarning>
                                        <Tabs isFitted variant='enclosed'>
                                            <TabList mb='1em'>
                                                {/** IMAGENES */}
                                                <Tab position='relative' fontSize={['30px', '18px']}>
                                                    Imágenes&nbsp;&nbsp;&nbsp;
                                                    <Tooltip label="Agregar imagen" aria-label='A tooltip'>
                                                        <Link onClick={onOpen} position='absolute' right='20px' marginRight={['-13px', '0']}>
                                                            <AddIcon />
                                                        </Link>
                                                    </Tooltip>
                                                </Tab>
                                                {/** VIDEOS */}
                                                <Tab position='relative' fontSize={['30px', '18px']}>
                                                    Videos&nbsp;&nbsp;&nbsp;
                                                    <Tooltip label="Agregar video" aria-label='A tooltip'>
                                                        <Link onClick={onOpenVideos} position='absolute' right='20px' marginRight={['-13px', '0']}>
                                                            <AddIcon />
                                                        </Link>
                                                    </Tooltip>
                                                </Tab>
                                                {/** PARTIDOS */}
                                                <Tab position='relative' fontSize={['30px', '18px']}>
                                                    Partidos&nbsp;&nbsp;&nbsp;
                                                    <Tooltip label="Agregar partido" aria-label='A tooltip'>
                                                        <Link onClick={onOpenPartidos} position='absolute' right='20px' marginRight={['-13px', '0']}>
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
                                                        <Text style={ imagenesGaleriaArray.length == 0 ? { display: 'block'} : { display: 'none' }} fontSize={['30px', '18px']}>Aún no hay imágenes.</Text>
                                                        { imagenesGaleriaArray.map((imagenBase64, index) => {
                                                            return (
                                                                <Box key={index}>
                                                                    <Button style={ edicionActivada ? { display: 'block', float: 'right' } : { display: 'none' }} onClick={(e) => borrarImagen(index, e)}>
                                                                        <SmallCloseIcon />
                                                                    </Button>
                                                                    <Image w='330px' src= { imagenBase64 } alt='' />
                                                                </Box>
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
                                                        <Text style={ videosGaleria.length == 0 ? { display: 'block' } : { display: 'none' } } fontSize={['30px', '18px']}>Aún no hay videos.</Text>
                                                        {
                                                            videosGaleria.map((videoUrl, index) => {
                                                                console.log(videoUrl);
                                                                return (
                                                                    <Box key={ index }>
                                                                        <Button style={ edicionActivada ? { display: 'block', float: 'right' } : { display: 'none' }} onClick={(e) => borrarVideo(index, e)}>
                                                                            <SmallCloseIcon />
                                                                        </Button>
                                                                        <iframe width="853" height="480" src={ videoUrl } title=""></iframe>
                                                                    </Box>
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

                                                                <Text marginBottom='10px'>URL del video:</Text>
                                                                <Input type="txt" placeholder="Url del video" onChange={ (e) => {
                                                                    setUrlDelVideoPartido(e.target.value)
                                                                } }/>

                                                                <Text marginTop='10px' marginBottom='10px'>Fecha:</Text>
                                                                <Input type="date" onChange={ (e) => { setFechaDelPartido(e.target.value) }}/>

                                                                <Text marginTop='10px' marginBottom='10px'>Equipos:</Text>
                                                                <HStack marginBottom='10px'>
                                                                    <Input type="text" placeholder="Equipo A" onChange={ (e) => { setEquipoA(e.target.value) } }/>
                                                                    <Input type="text" placeholder="Equipo B" onChange={ (e) => { setEquipoB(e.target.value) } }/>
                                                                </HStack>

                                                                <Text marginBottom='10px'>Resultado:</Text>
                                                                <HStack>
                                                                    <Input type="text" placeholder="Goles Equipo A" onChange={ (e) => {
                                                                        setResultadoA(e.target.value);
                                                                    } }/>
                                                                    <Input type="text" placeholder="Goles Equipo B" onChange={ (e) => handlePreparePartido(e) }/>
                                                                </HStack>
                                                            </AlertDialogBody>

                                                            <AlertDialogFooter>
                                                            <Button ref={cancelRef} onClick={onClosePartidos}>
                                                                Cancelar
                                                            </Button>
                                                            <Button colorScheme='blue' onClick={handleUpdatePartido} ml={3}>
                                                                Guardar
                                                            </Button>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                        </AlertDialogOverlay>
                                                    </AlertDialog>
                                                    <VStack marginTop='40px' marginBottom='60px' width={['505px', '100%']}>
                                                        
                                                        <Text style={ galeriaPartidos.length == 0 ? { display: 'block' } : { display: 'none' } } fontSize={['30px', '18px']}>Aún no hay partidos.</Text>

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
                                                                                    <Button style={ edicionActivada ? { display: 'block', float: 'right' } : { display: 'none' }} onClick={(e) => borrarPartido(index, e)}>
                                                                                        <SmallCloseIcon />
                                                                                    </Button>
                                                                                    {partido.equipoA}<br />
                                                                                    VS<br />
                                                                                    {partido.equipoB}
                                                                                    <br />
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
            </VStack>
        </Box>
        </>
    )
}