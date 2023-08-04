import {
    Container,
    Box,
    HStack,
    VStack,
    Text,
    Image,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
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
    AccordionPanel,
    Heading,

    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

import NavBar from '../src/Components/NavBar/NavBar'

import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

import clubesAFA from '../../db/clubesAFA';;
import clubesLIGAESCOBARENSE from '../../db/clubesLIGAESCOBARENSE';
import clubesAIFA from '../../db/clubesAIFA';
import clubesAFABNACIONAL from '../../db/clubesAFABNACIONAL';
import clubesBMETRO from '../../db/clubesBMETRO';
import clubes from '../../db/clubes';

import paises from '../../db/paises';

import { useState, useEffect } from 'react';

import Router from 'next/router';

import { useFileUpload } from 'use-file-upload';

function NuevoJugador() {
    const [domLoaded, setDomLoaded] = useState(false);

    const [files, selectFiles] = useFileUpload();

    const [fotoPerfil, setFotoPerfil] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNombre, setInputNombre] = useState('');
    const [inputApellido, setInputApellido] = useState('');
    const [inputFechaDeNacimiento, setInputFechaDeNacimiento] = useState('');
    const [edad, setEdad] = useState('');
    const [inputNacimiento, setInputNacimiento] = useState('');
    const [inputPais, setInputPais] = useState('');
    const [inputNivelDeIngles, setInputNivelDeIngles] = useState('');
    const [inputPieHabil, setInputPieHabil] = useState('');
    const [inputPosicion, setInputPosicion] = useState('');
    const [inputGenero, setInputGenero] = useState('');
    const [inputEstatura, setInputEstatura] = useState('');
    const [inputPeso, setInputPeso] = useState('');
    const [inputClub, setInputClub] = useState('');
    const [inputCategoria, setInputCategoria] = useState('');
    const [inputCondicion, setInputCondicion] = useState('');
    const [inputPresupuesto, setInputPresupuesto] = useState('');

    const [inputClubCustom, setInputClubCustom] = useState(false);
    const [inputClubCustomName, setInputClubCustomName] = useState(false);
    const [inputUniversidades, setInputUniversidades] = useState(false);

    const subirImagen = () => {
        /*
        selectFiles({ accept: 'image/*'}, ({ name, size, source, file }) => {
            const elementoFotoDePerfil = document.getElementById('fotoDePerfil');
            //elementoFotoDePerfil.style.borderRadius = "100%"
            elementoFotoDePerfil.style.width = "170px"
            elementoFotoDePerfil.style.marginTop = "-170px"
            elementoFotoDePerfil.style.marginLeft = "0px"
            const elementoBotonDeSubirImagen = document.getElementById('botonDeSubirImagen');
            elementoBotonDeSubirImagen.remove();
        })}*/
    }    

    const handleUrlDeImagenChange = (e) => {
        setFotoPerfil(e.target.value);
        localStorage.setItem('fotoPerfil', e.target.value);
    }

    const handleNombreChange = (e) => {
        setInputNombre(e.target.value)
        localStorage.setItem('nombre', e.target.value);
    }

    const handleApellidoChange = (e) => {
        setInputApellido(e.target.value);
        localStorage.setItem('apellido', e.target.value);
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

    const handleNacimientoChange = (e) => {
        let nacimiento = e.target.value
        console.log('Fecha de nacimiento: ' + nacimiento);
        console.log('Calculando edad...')
        let edad = age(e.target.value).toString();
        console.log(edad);
        
        setEdad(edad);
        setInputNacimiento(nacimiento);
        
        localStorage.setItem('nacimiento', nacimiento);
        localStorage.setItem('edad', edad);
    }

    const handlePaisChange = (e) => {
        setInputPais(e.target.value);
        localStorage.setItem('pais', e.target.value);
    }

    const handleNivelDeInglesChange = (e) => {
        setInputNivelDeIngles(e.target.value);
        localStorage.setItem('nivelDeIngles', e.target.value);
    }

    const handlePieHabilChange = (e) => {
        setInputPieHabil(e.target.value);
        localStorage.setItem('pieHabil', e.target.value);
    }

    const handlePosicionChange = (e) => {
        setInputPosicion(e.target.value);
        localStorage.setItem('posicion', e.target.value);
    }

    const handleGeneroChange = (e) => {
        setInputGenero(e.target.value);
        localStorage.setItem('genero', e.target.value);
    }

    const handleEstaturaChange = (e) => {
        setInputEstatura(e.target.value);
        localStorage.setItem('estatura', e.target.value);
    }

    const handlePesoChange = (e) => {
        setInputPeso(e.target.value);
        localStorage.setItem('peso', e.target.value);
    }

    const handleClubChange = (e) => {
        setInputClub(e.target.value);
        localStorage.setItem('club', e.target.value);
    }

    const handleCategoriaChange = (e) => {
        setInputCategoria(e.target.value);
        localStorage.setItem('categoria', e.target.value);
    }

    const handleCondicionChange = (e) => {
        setInputCondicion(e.target.value);
        localStorage.setItem('condicion', e.target.value)
    }

    const handlePresupuestoChange = (e) => {
        setInputPresupuesto(e.target.value);
        localStorage.setItem('presupuesto', e.target.value)
    }

    const handleCertificacionesChange = (e) => {

    }

    const isErrorNombre = false;
    const isErrorApellido = false;
    const isErrorNacimiento = false;
    const isErrorPais = false;
    const isErrorPieHabil = false;
    const isErrorPosicion = false;
    const isErrorGenero = false;
    const isErrorEstatura = false;
    const isErrorPeso = false;
    const isErrorClub = false;
    const isErrorCategoria = false;

    const crearJugador = () => {
        let validacionesPrimarias = localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != ''

        if (!validacionesPrimarias) {
            alert('Por favor, llena todos los campos obligatorios (*)')
            return
        }

        if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            Router.push({
                pathname: '/Onboarding/NuevoJugador2'
            })
        } else if (localStorage.getItem('nombre') == '' && localStorage.getItem('apellido') == '' && localStorage.getItem('nacimiento') == '' && localStorage.getItem('pieHabil') == '' && localStorage.getItem('posicion') == '' && localStorage.getItem('genero') == '' && localStorage.getItem('estatura') == '' && localStorage.getItem('kilos') == '' && localStorage.getItem('categoria') == '') {
            alert('El campo "Nombre" no puede estar vacío')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '')  {
            Router.push({
                pathname: 'Onboarding/NuevoJugador2'
            })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            alert('El campo "Apellido" no puede estar vacío')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            Router.push({
                pathname: 'Onboarding/NuevoJugador2',
            });
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            alert('Por favor, ingresa tu fecha de nacimiento')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            Router.push({
                pathname: 'Onboarding/NuevoJugador2'
            })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            alert('Por favor, selecciona un país')
        }
        
        else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
            Router.push({
                pathname: 'Onboarding/NuevoJugador2'
            })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           alert('Por favor, selecciona un país')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2'
           })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           alert('Por favor, selecciona un país')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2'
           })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           alert('Por favor, selecciona tu posición')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2'
           })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           alert('Por favor, selecciona tu género')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2',
           })
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           alert('Ingresa tu altura en metros')
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2',
           })
        } else if (true) {
           alert('Ingresa tu peso en kilos');
        } else if (localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('kilos') != '' && localStorage.getItem('categoria') != '') {
           Router.push({
               pathname: 'Onboarding/NuevoJugador2',
           });
        } else if (true) {
           alert('Selecciona una Categoría')
        };
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

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setFotoPerfil(base64.toString())
        localStorage.setItem('fotoPerfil', base64.toString());
    };

    useEffect(() => {
        setDomLoaded(true);
        
        let inputEmail = localStorage.getItem('email')
        setInputEmail(inputEmail);
        console.log(inputEmail)

        setInputNombre(localStorage.getItem('password'));
        
        setInputNombre(localStorage.getItem('fotoPerfi'));

        let inputNombre = localStorage.getItem('nombre')
        setInputNombre(inputNombre);
        //(document.getElementById("inputNombre") as HTMLInputElement).defaultValue = inputNombre;
        console.log(inputNombre);

        setInputNombre(localStorage.getItem('apellido'));
        console.log(inputApellido);
        
        setInputNombre(localStorage.getItem('fotoPerfil'));
        
        setInputNombre(localStorage.getItem('urlDeImagen'));
        setInputNombre(localStorage.getItem('FechaDeNacimiento'));
        setInputNombre(localStorage.getItem('pais'));
        setInputNombre(localStorage.getItem('nivelDeIngles'));
        setInputNombre(localStorage.getItem('pieHabil'));
        setInputNombre(localStorage.getItem('posicion'));
        setInputNombre(localStorage.getItem('genero'));
        setInputNombre(localStorage.getItem('estatura'));
        setInputNombre(localStorage.getItem('peso'));
        setInputNombre(localStorage.getItem('club'));
        setInputNombre(localStorage.getItem('categoria'));
        setInputNombre(localStorage.getItem('condicion'));
        setInputNombre(localStorage.getItem('presupuesto'));
    }, [])

    return (
        <>
            {domLoaded && (
                <Container
                    maxW="100%"
                    p={10}
                >
                    <NavBar />
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
                        gap="32px"
                        margin="auto"
                        marginTop="25px"
                        paddingTop="100px"
                    >
                        
                        <Image alt=''  src="/ellipse.png" />
                        {/**
                        <Link
                            id="botonDeSubirImagen"
                            color="#6EC1E4"
                            marginLeft="35px"
                            marginTop='-25px'
                            position="relative"
                            zIndex="9999"
                            onClick={subirImagen}
                        >
                            Subir imagen
                        </Link>
                         */}
                         <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="file"
                            onChange={(e) => handleFileUpload(e)}
                        />
                        <div>
                            <Image
                                alt=''
                                borderRadius='full'
                                id="fotoDePerfil"
                                src={ fotoPerfil }
                                marginTop="-287px"
                                height='180px'
                                width='180px'
                            />
                        </div>
                        {/**
                        <FormControl>
                            URL de imagen
                            <Input placeholder='URL de imagen' value={urlDeImagen} onChange={handleUrlDeImagenChange} />
                        </FormControl>
                        */}
                        <SimpleGrid columns={12} gap="32px" w="full">
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorNombre}>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input id="inputNombre" placeholder="Ingresar nombre" value={ localStorage.getItem('nombre') } onChange={handleNombreChange} />
                                    {!isErrorNombre ? (
                                        <FormHelperText>
                                            Ingresa tu nombre
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorApellido}>
                                    <FormLabel>Apellido</FormLabel>
                                    <Input placeholder="Ingresar apellido" value={ localStorage.getItem('apellido') } onChange={handleApellidoChange}/>
                                    {!isErrorApellido ? (
                                        <FormHelperText>
                                            Ingresa tu apellido
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorNacimiento}>
                                    <FormLabel>Fecha de Nacimiento</FormLabel>
                                    <input type='date' value={ localStorage.getItem('nacimiento') } onChange={ handleNacimientoChange }/>
                                    {/**
                                    <Input placeholder="Ingresar FechaDeNacimiento"/>
                                     */}
                                    {!isErrorNacimiento ? (
                                        <FormHelperText>
                                            Ingresa tu fecha de nacimiento <br />
                                            Tu edad: <Text fontWeight='bold' display='inline-block'>{ localStorage.getItem('edad') }</Text>
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                    
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorPais}>
                                    <FormLabel>Pais</FormLabel>
                                    <Select placeholder="Seleccionar país" value={ localStorage.getItem('pais') } onChange={handlePaisChange}>
                                        {paises.map((pais, index) => {
                                            return (
                                                <option key={index}>{ pais }</option>
                                            )
                                        })}
                                    </Select>
                                    {!isErrorPais ? (
                                        <FormHelperText>
                                            Selecciona tu pais
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <Divider />
                            <GridItem colSpan={12}>
                                <Text>SOCIAL</Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Facebook</FormLabel>
                                    <Input placeholder="Ingresar usuario" value={ localStorage.getItem('facebook') } onChange={(e) => localStorage.setItem("facebook", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Instagram</FormLabel>
                                    <Input placeholder="Ingresar usuario" value={ localStorage.getItem('instagram') } onChange={(e) => localStorage.setItem("instagram", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Tiktok</FormLabel>
                                    <Input placeholder="Ingresar usuario" value={ localStorage.getItem('tiktok') } onChange={(e) => localStorage.setItem("tiktok", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <Text>CARACTERISTICAS JUGADOR</Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl isRequired isInvalid={isErrorPieHabil}>
                                    <FormLabel>Pie hábil</FormLabel>
                                    <Select value={ localStorage.getItem('pieHabil') } onChange={ (e) => localStorage.setItem('pieHabil', e.target.value) }>
                                        <option>Seleccionar</option>
                                        <option>Izquierdo</option>
                                        <option>Derecho</option>
                                    </Select>
                                    {!isErrorPieHabil ? (
                                        <FormHelperText>
                                            Ingresa tu pie hábil
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl isRequired isInvalid={isErrorPosicion}>
                                    <FormLabel>Posición</FormLabel>
                                    <Select value={ localStorage.getItem('posicion') } onChange={ (e) => localStorage.setItem('posicion', e.target.value) }>
                                        <option>Seleccionar</option>
                                        <option>Delantero</option>
                                        <option>Mediocampista</option>
                                        <option>Defensor</option>
                                        <option>Arquero</option>
                                    </Select>
                                    {!isErrorPosicion ? (
                                        <FormHelperText>
                                            Selecciona tu posición
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl isRequired isInvalid={isErrorGenero}>
                                    <FormLabel>Género</FormLabel>
                                    <Select value={ localStorage.getItem('genero') } onChange={ (e) => localStorage.setItem('genero', e.target.value )}>
                                        <option>Seleccionar</option>
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                    </Select>
                                    {!isErrorGenero ? (
                                        <FormHelperText>
                                            Selecciona tu género
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorEstatura}>
                                    <FormLabel>Estatura</FormLabel>
                                    <NumberInput>
                                        <NumberInputField value={ localStorage.getItem('estatura') } placeholder="Ej: 1.76m" onChange={ (e) => localStorage.setItem('estatura', e.target.value) } />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    {!isErrorEstatura ? (
                                        <FormHelperText>
                                            Ingresa tu estatura en metros, separando con punto
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorPeso}>
                                    <FormLabel>Peso</FormLabel>
                                    <NumberInput value={ localStorage.getItem('peso') }>
                                        <NumberInputField placeholder="Ej: 80kg" onChange={ (e) => localStorage.setItem('peso', e.target.value) } />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    {!isErrorPeso ? (
                                        <FormHelperText>
                                            Ingresa tu peso en kilos, separando con punto
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <FormControl isInvalid={isErrorClub}>
                                    <FormLabel>Club<Text style={ (!inputClubCustom && !inputClubCustomName) ? { display: 'none' } : { display: 'inline-block' } }> { ': ' + localStorage.getItem('club') } </Text></FormLabel>
                                    <HStack>                                    
                                        <Select value={ localStorage.getItem('club') } style={ (inputClubCustom && inputClubCustomName) ? { display: 'none' } : { display: 'inline-block '} } placeholder="Seleccionar" onChange={ (e) => { setInputClub(e.target.value); localStorage.setItem('club', e.target.value ) } }>
                                            {clubes.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                        {/**
                                        <Select placeholder="AFA B NACIONAL" onChange={ handleClubChange }>
                                            {clubesAFABNACIONAL.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                        <Select placeholder="B METRO" onChange={ handleClubChange }>
                                            {clubesBMETRO.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                        <Select placeholder="LIGA ESCOBARENSE" onChange={ handleClubChange }>
                                            {clubesLIGAESCOBARENSE.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                        <Select placeholder='AIFA' onChange={ handleClubChange }>
                                            {clubesAIFA.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                         */}
                                    </HStack>
                                </FormControl>
                                <HStack marginTop='20px'>
                                    <Button onClick={ () => { setInputClubCustom(true), setInputClubCustomName(true); } } style={ inputClubCustom ? { display: 'none' } : { display: 'inline-block' } }>No encuentro mi club</Button>
                                    <Button onClick={ (e) => { setInputClubCustom(false); localStorage.setItem('clubCustom', '' )} } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } }><CloseIcon></CloseIcon></Button>
                                    <Input onChange={ (e) => { setInputClub(e.target.value); localStorage.setItem('club', e.target.value ) } } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } } type="text" placeholder="Club al que perteneces actualmente" />
                                    <Button onClick={ () => { setInputClubCustom(false); setInputClubCustomName(true) } } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } }><CheckIcon></CheckIcon></Button>
                                </HStack>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <Accordion defaultIndex={[1]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Clubes anteriores
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input value={ localStorage.getItem('clubPrevio1') } onChange={ (e) => localStorage.setItem('clubPrevio1', e.target.value) }placeholder="Club previo 1" />
                                            <Input value={ localStorage.getItem('clubPrevio2') } onChange={ (e) => localStorage.setItem('clubPrevio2', e.target.value) }placeholder="Club previo 2" />
                                            <Input value={ localStorage.getItem('clubPrevio3') } onChange={ (e) => localStorage.setItem('clubPrevio3', e.target.value) }placeholder="Club previo 3" />
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorCategoria}>
                                    <FormLabel>Categoría</FormLabel>
                                    <Select value={ localStorage.getItem('categoria') } onChange={ (e) => localStorage.setItem('categoria', e.target.value) } placeholder="Seleccionar">
                                        <option>Seleccionar</option>
                                        <option>Pro</option>
                                        <option>Semi-Pro</option>
                                        <option>Juvenil</option>
                                        <option>Amateur</option>
                                    </Select>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Selecciona tu categoría
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl>
                                    <FormLabel>Condición</FormLabel>
                                    <Select value={ localStorage.getItem('condicion') } placeholder="Seleccionar" onChange={ (e) => localStorage.setItem('condicion', e.target.value) }>
                                        <option>Libre</option>
                                        <option>Con contrato</option>
                                    </Select>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Selecciona tu condición contractual
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <FormLabel>Quiero ser visto por:</FormLabel>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Checkbox colorScheme='blue' onClick={ () => localStorage.setItem('agentes', 'true')}>
                                    Agentes
                                </Checkbox>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Checkbox colorScheme='blue' onClick={ () => localStorage.setItem('clubes', 'true') }>
                                    Clubes
                                </Checkbox>
                            </GridItem>
                            <GridItem colSpan={4} >
                                <Button className={ inputUniversidades ? 'btn2' : '' } onClick={ () => { setInputUniversidades(!inputUniversidades); localStorage.setItem('universidades', 'true') }}>Universidades</Button>
                                {/**<Checkbox colorScheme='blue'>
                                    Universidades
                                </Checkbox>
                                        */}
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <FormLabel >Nivel de inglés</FormLabel>
                                    <Select value={ localStorage.getItem('nivelDeIngles') } onChange={ (e) => localStorage.setItem('nivelDeIngles', e.target.value) }>
                                        <option>Seleccionar</option>
                                        <option>Bilingüe</option>
                                        <option>Avanzado</option>
                                        <option>Intermedio</option>
                                        <option>Básico</option>
                                    </Select>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Selecciona tu nivel de inglés
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <FormLabel >Certificaciones</FormLabel>
                                    <Input onChange={ (e) => localStorage.setItem('certificaciones', 'true') } type="text" placeholder="Certificaciones" />
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Ingresa tus certificados separados por coma: Ej: CAE, First, etc 
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <FormLabel>Presupuesto</FormLabel>
                                    <Select value={ localStorage.getItem('presupuesto') }placeholder="Seleccionar" onChange={ (e) => localStorage.setItem('prespupesto', e.target.value) }>
                                        <option>0 - 5.000</option>
                                        <option>6.0000 - 10.000</option>
                                        <option>10.000 - 15.000</option>
                                        <option>16.000 - 20.000</option>
                                        <option>Más de 20.000</option>
                                    </Select>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Selecciona tu presupuesto
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            {/**
                            <GridItem colSpan={6}>
                                <Accordion defaultIndex={[1]} allowMultiple marginTop='31px' style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Certificaciones
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input placeholder="Certificación 1" />
                                            <Input placeholder="Certificación 2" />
                                            <Input placeholder="Certificación 3" />
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </GridItem>
                             */}
                            {/**
                            <GridItem colSpan={12}>
                                <FormControl>
                                    <FormLabel>
                                        Perfil visible a:
                                    </FormLabel>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <Checkbox onChange={() => localStorage.setItem("scouts", "true")}>Scouts</Checkbox>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <Checkbox onChange={() => localStorage.setItem("clubes", "true")}>Clubes</Checkbox>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <Checkbox onChange={() => localStorage.setItem("universidades", "true")}>Universidades</Checkbox>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <Checkbox onChange={() => localStorage.setItem("privado", "true")}>Privado</Checkbox>
                                </FormControl>
                            </GridItem>
                            */}
                            <GridItem colSpan={12}>
                                <Link href="/">
                                    <Button
                                        className="btn1"
                                        p="10px 24px 12px"
                                        w="161px"
                                        h="57px"
                                        bg="#353535"
                                        borderRadius="5px"
                                        fontSize="21px"
                                        color="#A2A2A2"
                                    >
                                        Atrás
                                    </Button>
                                </Link>
                                <Button
                                    className="btn1"
                                    p="10px 24px 12px"
                                    w="161px"
                                    h="57px"
                                    bg="#353535"
                                    borderRadius="5px"
                                    fontSize="21px"
                                    color="#A2A2A2"
                                    float='right'

                                    onClick={crearJugador}
                                >
                                    Continuar
                                </Button>
                            </GridItem>
                        </SimpleGrid>
                    </VStack>
                </Container>
            )}
        </>
    )
};

export default NuevoJugador;