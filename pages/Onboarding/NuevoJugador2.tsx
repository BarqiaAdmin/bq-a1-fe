import {
    Container,
    Box,
    HStack,
    VStack,
    Text,
    Heading,
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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react';

import NavBar from '../src/Components/NavBar/NavBar'

import { Component, useState } from 'react';

import Router from 'next/router';

class NuevoJugador2 extends Component {
    constructor(props) {
        super(props);
        this.elegirLugarEnElCampo = this.elegirLugarEnElCampo.bind(this);
        this.elegirPieHabil = this.elegirPieHabil.bind(this);
        this.elegirAtributo = this.elegirAtributo.bind(this);
    }

    /**
    Router = useRouter();

    
    crearUsuario = () => {
        console.log('Se ha creado un usuario')
        this.Router.push({
            pathname: 'Perfil',
            query: {}
        })
    }
    */

    actualizarUsuario = () => {
        fetch('https://bq-a1-be.vercel.app/actualizarUsuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password'),
                fotoPerfil: localStorage.getItem('fotoPerfil'),
                nombre: localStorage.getItem('nombre'),
                apellido: localStorage.getItem('apellido'),
                urlDeImagen: localStorage.getItem('urlDeImagen'),
                facebook: localStorage.getItem('facebook'),
                twitter: localStorage.getItem('twitter'),
                instagram: localStorage.getItem('instagram'),
                tiktok: localStorage.getItem('tiktok'),
                edad: localStorage.getItem('edad'),
                pais: localStorage.getItem('pais'),
                nivelDeIngles: localStorage.getItem('nivelDeIngles'),
                certificaciones: [],
                pieHabil: localStorage.getItem('pieHabil'),
                posicion: localStorage.getItem('posicion'),
                genero: localStorage.getItem('genero'),
                estatura: localStorage.getItem('estatura'),
                peso: localStorage.getItem('peso'),
                club: localStorage.getItem('club'),
                categoria: localStorage.getItem('categoria'),
                condicion: localStorage.getItem('condicion'),
                presupuesto: localStorage.getItem('presupuesto'),
                clubesPrevios: [],
                imagenesGaleriaArray: [],
                videosGaleria: [],
                lugarEnElCampo: localStorage.getItem('lugarEnElCampo'),
                pases: localStorage.getItem('pases'),
                tiros: localStorage.getItem('tiros'),
                resistencia: localStorage.getItem('resistencia'),
                visionDeJuego: localStorage.getItem('visionDeJuego'),
                unoVsUno: localStorage.getItem('unoVsUno'),
                tirosLibres: localStorage.getItem('tirosLibres'),
                marca: localStorage.getItem('marca'),
                juegoAereo: localStorage.getItem('juegoAereo')
            })
        })
        .then((res) => {
            Router.push({
                pathname: '/Usuario/Perfil'
            })
        })
        
        //window.location.href = '/Usuario/Perfil'
    }

    elegirLugarEnElCampo = (e, idLugarEnElCampo) => {
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
        } else {
            e.currentTarget.style.backgroundColor = 'white'
            this.LugarEnElCampoSeleccionado = false
            switch (idLugarEnElCampo) {
                case 1:
                    localStorage.setItem("Lugar en el campo 1", "false");
                    break;
                case 2:
                    localStorage.setItem("Lugar en el campo 2", "false");
                    break;
                case 3:
                    localStorage.setItem('Lugar en el campo 3', 'false');
                    break;
                case 4:
                    localStorage.setItem('Lugar en el campo 4', 'false');
                    break;
                case 5:
                    localStorage.setItem('Lugar en el campo 5', 'false');
                    break;
                case 6:
                    localStorage.setItem('Lugar en el campo 6', 'false');
                    break;
                case 7:
                    localStorage.setItem('Lugar en el campo 7', 'false');
                    break;
                case 8:
                    localStorage.setItem('Lugar en el campo 8', 'false');
                    break;
                case 9:
                    localStorage.setItem('Lugar en el campo 9', 'false');
                    break;
                case 10:
                    localStorage.setItem('Lugar en el campo 10', 'false');
                    break;
                case 11:
                    localStorage.setItem('Lugar en el campo 11', 'false');
                    break;
            }
        }
    }

    elegirPieHabil = (e, IdPie) => {
        e.currentTarget.style.border = '1px solid #6EC1E4'
        e.currentTarget.style.color = '#6EC1E4'
    }
    elegirAtributo = (e, IdAtributo) => {
        if (e.currentTarget.style.border != '1px solid rgb(110, 193, 228)') {
            e.currentTarget.style.border = '1px solid rgb(110, 193, 228)'
            console.log(e.currentTarget.style.border)
            e.currentTarget.style.color = '#6EC1E4'
            console.log('Seleccionando atributo')
        } else {
            e.currentTarget.style.border = '1px solid #CCCCCC'
            e.currentTarget.style.color = '#A2A2A2'
            console.log('Deseleccionando atributo')
        }
        
        switch (IdAtributo) {
            case 1:
                localStorage.setItem("pases", "true");
                break;
            case 2:
                localStorage.setItem("tiros", "true");
                break;
            case 3:
                localStorage.setItem('resistencia', 'true');
                break;
            case 4:
                localStorage.setItem('visionDeJuego', 'true');
                break;
            case 5:
                localStorage.setItem('unoVsUno', 'true');
                break;
            case 6:
                localStorage.setItem('tirosLibres', 'true');
                break;
            case 7:
                localStorage.setItem('marca', 'true');
                break;
            case 8:
                localStorage.setItem('juegoAereo', 'true');
                break;
        }
    }

    LugarEnElCampoSeleccionado = false;

    render () {
        return (
            <>
            <NavBar />
            <Box>
                <Container
                    maxW="100%"
                    p={10}
                >
                    
                    <Image alt='' 
                        position="fixed"
                        left="0"
                        bottom="0"
                        src="/artwork1.png"
                    />
                    <Image alt='' 
                        position='fixed'
                        top='0'
                        right='0'
                        p="40px"
                        src='/artwork3.png'
                    />
                    <HStack>
                        <Image alt=''  margin="auto" src="/logo.png" />
                    </HStack>
                    <VStack
                        w="702px"
                        p="40px 80px"
                        bg="#0E1216"
                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                        borderRadius="16px"
                        color="#ECECEC"
                        gap="12px"
                        margin="auto"
                        marginTop="25px"
                        paddingTop="100px"
                    >
                        <Heading
                            textAlign='center'
                            fontSize="60px"
                        >
                            Selecciona tu lugar en el campo:
                        </Heading>
                        <Box
                            position="relative"
                        >
                            <Image alt=''  src="/campo.png" />
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 1) } className="playerPosition" style={{ background: 'white', top: '45%', left: '2%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 2) } className="playerPosition" style={{ background: 'white', top: '45%', left: '40%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 3) } className="playerPosition" style={{ background: 'white', top: '30%', left: '14%',position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 4) } className="playerPosition" style={{ background: 'white', top: '55%', left: '14%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 5) } className="playerPosition" style={{ background: 'white', top: '10%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 6) } className="playerPosition" style={{ background: 'white', top: '80%', left: '20%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 7) } className="playerPosition" style={{ background: 'white', top: '76%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 8) } className="playerPosition" style={{ background: 'white', top: '15%', left: '49%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 9) } className="playerPosition" style={{ background: 'white', top: '45%', left: '70%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 10) } className="playerPosition" style={{ background: 'white', top: '25%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                            <div onClick={ (e) => this.elegirLugarEnElCampo(e, 11) } className="playerPosition" style={{ background: 'white', top: '65%', left: '80%', position: 'absolute', borderRadius: '100%', display: 'inline-block', height: '20px', width: '20px'}}></div>
                        </Box>
                        {/*
                        <Heading
                            fontSize="18px"
                        >
                            PIE HABIL
                        </Heading>
                        <HStack>
                            <Button onClick={(e) => this.elegirPieHabil(e, 1)} className="btn2">Diestro</Button>
                            <Button onClick={(e) => this.elegirPieHabil(e, 2)} className="btn2">Zurdo</Button>
                            <Button onClick={(e) => this.elegirPieHabil(e, 3)} className="btn2">Ambos</Button>
                        </HStack>
                        */}
                        <Heading
                            fontSize="60px"
                        >
                            Atributos:
                        </Heading>
                        <VStack>
                            <Button onClick={(e) => this.elegirAtributo(e, 1)} fontSize='40px' height='100px' width='450px'>Pases</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 2)} fontSize='40px' height='100px' width='450px'>Tiros</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 3)} fontSize='40px' height='100px' width='450px'>Resistencia</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 4)} fontSize='40px' height='100px' width='450px'>Visión de juego</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 5)} fontSize='40px' height='100px' width='450px' >1vs1</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 6)} fontSize='40px' height='100px' width='450px' >Tiros libres</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 7)} fontSize='40px' height='100px' width='450px' >Marca</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 8)} fontSize='40px' height='100px' width='450px' >Juego aéreo</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 9)} fontSize='40px' height='100px' width='450px'>Fuerza</Button>
                            <Button onClick={(e) => this.elegirAtributo(e, 10)} fontSize='40px' height='100px' width='450px'>Velocidad</Button>
                        </VStack>
                        <SimpleGrid columns={2} w="full" paddingTop='20px'>
                            <GridItem colSpan={1}>
                                <Button
                                    w="full"
                                    className="btn2"
                                
                                    height={['100px', '70px']}
                                    fontSize={[ '26px', '24px']}
                                    width={['180px', '150px']}
                                >
                                    <Link href='/Onboarding/NuevoJugador'>
                                        Volver
                                    </Link>
                                </Button>
                            </GridItem>
                            <GridItem colSpan={1} textAlign="right">
                                <Button
                                    w="full"
                                    className="btn2"
                                
                                    height={['100px', '70px']}
                                    fontSize={[ '26px', '24px']}
                                    width={['180px', '150px']}

                                    onClick={this.actualizarUsuario}
                                >
                                    Finalizar
                                </Button>
                            </GridItem>
                        </SimpleGrid>
                    </VStack>
                </Container>
                </Box>
            </>
        );
    }
};

export default NuevoJugador2;