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
    AspectRatio,
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
    const [inputVistoPorAgentes, setInputVistoPorAgentes] = useState(false);
    const [inputVistoPorClubes, setInputVistoPorClubes] = useState(false);

    const [domLoaded, setDomLoaded] = useState(false);

    const [files, selectFiles] = useFileUpload();

    const [inputFotoPerfil, setInputFotoPerfil] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNombre, setInputNombre] = useState('');
    const [inputApellido, setInputApellido] = useState('');

    const [inputFacebook, setInputFacebook] = useState('');
    const [inputInstagram, setInputInstagram] = useState('');
    const [inputTwitter, setInputTwitter] = useState('');
    const [inputTiktok, setInputTiktok] = useState('');

    const [inputNacimiento, setInputNacimiento] = useState('');
    const [edad, setEdad] = useState('');
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

    const handleUrlDeImagenChange = (e) => {
        
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

        let validacionesPrimarias = localStorage.getItem('nombre') != '' && localStorage.getItem('apellido') != '' && localStorage.getItem('nacimiento') != '' && localStorage.getItem('pieHabil') != '' && localStorage.getItem('posicion') != '' && localStorage.getItem('genero') != '' && localStorage.getItem('estatura') != '' && localStorage.getItem('peso') != '' && localStorage.getItem('categoria') != '' && localStorage.getItem('pais') != ''
        
        if (!validacionesPrimarias) {
            console.log(localStorage.getItem('nombre'))
            console.log(localStorage.getItem('apellido'))
            console.log(localStorage.getItem('nacimiento'))
            console.log(localStorage.getItem('pieHabil'))
            console.log(localStorage.getItem('posicion'))
            console.log(localStorage.getItem('genero'))
            console.log(localStorage.getItem('estatura'))
            console.log(localStorage.getItem('peso'))
            console.log(localStorage.getItem('categoria'))
            console.log(localStorage.getItem('pais'))

            alert('Por favor, llena todos los campos obligatorios (*)')
            
            console.log('Nombre')
            console.log(localStorage.getItem('nombre'));
            console.log('Apellido')
            console.log(localStorage.getItem('apellido'));
            console.log('Nacimiento')
            console.log(localStorage.getItem('nacimiento'));
            console.log('pieHabil')
            console.log(localStorage.getItem('pieHabil'))
            console.log('Posicion')
            console.log(localStorage.getItem('posicion'))
            console.log('genero')
            console.log(localStorage.getItem('genero'));
            console.log('estatura')
            console.log(localStorage.getItem('estatura'));
            console.log('peso')
            console.log(localStorage.getItem('peso'));
            console.log('categoria')
            console.log(localStorage.getItem('categoria'));
            console.log('pais')
            console.log(localStorage.getItem('pais'))
            
            return
        } else {
            Router.push({
                pathname: 'NuevoJugador2',
            });
        }
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
        setInputFotoPerfil(e.target.value);
        localStorage.setItem('fotoPerfil', e.target.value);
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setInputFotoPerfil(base64.toString())
        localStorage.setItem('fotoPerfil', base64.toString());
    };

    useEffect(() => {
        setDomLoaded(true);


        localStorage.setItem('chakra-ui-color-mode', 'dark');
        
        let inputEmail = localStorage.getItem('email')
        setInputEmail(inputEmail);
        console.log(inputEmail)

        setInputFotoPerfil('');

        let inputNombre = localStorage.getItem('nombre')
        setInputNombre(inputNombre);
        //(document.getElementById("inputNombre") as HTMLInputElement).defaultValue = inputNombre;
        console.log(inputNombre);

        let inputApellido = localStorage.getItem('apellido')
        setInputApellido(localStorage.getItem('apellido'));
        console.log(inputApellido);

        setInputFacebook(localStorage.getItem('facebook'));
        setInputInstagram(localStorage.getItem('instagram'));
        setInputTwitter(localStorage.getItem('twitter'));
        setInputTiktok(localStorage.getItem('tiktok'));
        
        setInputNacimiento(localStorage.getItem('nacimiento'));
        setInputPais(localStorage.getItem('pais'));
        setInputNivelDeIngles(localStorage.getItem('nivelDeIngles'));
        setInputPieHabil(localStorage.getItem('pieHabil'));
        setInputPosicion(localStorage.getItem('posicion'));
        setInputGenero(localStorage.getItem('genero'));
        setInputEstatura(localStorage.getItem('estatura'));
        setInputPeso(localStorage.getItem('peso'));
        setInputClub(localStorage.getItem('club'));
        setInputCategoria(localStorage.getItem('categoria'));
        setInputCondicion(localStorage.getItem('condicion'));
        setInputPresupuesto(localStorage.getItem('presupuesto'));
    }, [])

    return (
        <>
            {domLoaded && (
                <Container
                    maxW="100%"
                    p={10}
                >
                    {/**
                    <NavBar />
                     */}
                    <Image alt='' 
                        position="fixed"
                        left="0"
                        bottom="0"
                        src="/artwork1.png"
                        display={['none', 'inline-block']}
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
                    >
                        
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
                        <Box position='relative'>
                            <Image
                                alt=''
                                borderRadius='full'
                                id="fotoDePerfil"
                                src={ localStorage.getItem('fotoPerfil') == '' ? 'https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780603.jpg' : localStorage.getItem('fotoPerfil') }
                                height='180px'
                                width='180px'
                                objectFit='cover'
                            />
                            <Input
                                size="md"

                                type="file"
                                width='170px'
                                border='none'
                                marginTop='20px'

                                placeholder="Subir imagen de perfil"
                                
                                onChange={(e) => handleFileUpload(e)}
                            />
                        </Box>
                        {/**
                        <FormControl>
                            URL de imagen
                            <Input placeholder='URL de imagen' value={urlDeImagen} onChange={handleUrlDeImagenChange} />
                        </FormControl>
                        */}
                        <SimpleGrid columns={12} gap="32px" w="full">
                            <GridItem colSpan={[12, 12, 12, 6]} >
                                <FormControl isRequired isInvalid={isErrorNombre} >
                                    <FormLabel fontSize={[40, 15]}>Nombre</FormLabel>
                                    <Input id="inputNombre" placeholder="Ingresar nombre" value={ inputNombre } onChange={handleNombreChange} fontSize={[30, 14]} padding={[10, 10, 5, 5]}/>
                                    {!isErrorNombre ? (
                                        <FormHelperText>
                                            Ingresa tu nombre
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorApellido}>
                                    <FormLabel fontSize={[40, 15]}>Apellido</FormLabel>
                                    <Input placeholder="Ingresar apellido" value={ inputApellido } onChange={handleApellidoChange} fontSize={[30, 14]} padding={[10, 10, 5, 5]}/>
                                    {!isErrorApellido ? (
                                        <FormHelperText>
                                            Ingresa tu apellido
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorNacimiento}>
                                    <FormLabel fontSize={[40, 15]}>Fecha de Nacimiento</FormLabel>
                                    <Input type='date' value={ inputNacimiento } onChange={ handleNacimientoChange } fontSize={[30, 14]} padding={[10, 10, 5, 5]} />
                                    {/**
                                    <Input placeholder="Ingresar Nacimiento"/>
                                     */}
                                    {!isErrorNacimiento ? (
                                        <FormHelperText>
                                            Ingresa tu fecha de nacimiento <br />
                                            Tu edad: <Text fontWeight='bold' display='inline-block'>{ edad }</Text>
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorPais}>
                                    <FormLabel fontSize={[40, 15]}>Nacionalidad</FormLabel>
                                    <Select placeholder="Seleccionar país" value={ inputPais } onChange={handlePaisChange} fontSize={[30, 14]}>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorCategoria}>
                                    <FormLabel fontSize={[40, 15]}>Categoría</FormLabel>
                                    <Select value={ inputCategoria } onChange={ (e) => { localStorage.setItem('categoria', e.target.value); setInputCategoria(e.target.value) } } placeholder="Seleccionar" fontSize={[30, 14]}>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorPosicion}>
                                    <FormLabel fontSize={[40, 15]}>Posición</FormLabel>
                                    <Select value={ inputPosicion } onChange={ (e) => { localStorage.setItem('posicion', e.target.value); setInputPosicion(e.target.value) } } fontSize={[30, 14]}>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorPieHabil}>
                                    <FormLabel fontSize={[40, 15]}>Pie hábil</FormLabel>
                                    <Select value={ inputPieHabil } onChange={ (e) => { localStorage.setItem('pieHabil', e.target.value); setInputPieHabil(e.target.value) } } fontSize={[30, 14]}>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorCategoria}>
                                    <FormLabel fontSize={[40, 15]}>Género</FormLabel>
                                    <Select value={ inputGenero } onChange={ (e) => { localStorage.setItem('genero', e.target.value); setInputGenero(e.target.value) } } fontSize={[30, 14]}>
                                        <option>Seleccionar</option>
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                    </Select>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Ingresa tu estatura en metros, separando con punto
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorEstatura}>
                                    <FormLabel fontSize={[40, 15]}>Estatura</FormLabel>
                                    <NumberInput>
                                        <NumberInputField value={ inputEstatura } placeholder="Ej: 1.76m" onChange={ (e) => { localStorage.setItem('estatura', e.target.value); setInputEstatura(e.target.value) } } fontSize={[30, 14]}/>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isRequired isInvalid={isErrorPeso}>
                                    <FormLabel fontSize={[40, 15]}>Peso</FormLabel>
                                    <NumberInput>
                                        <NumberInputField value={ inputPeso } placeholder="Ej: 80kg" onChange={ (e) => { localStorage.setItem('peso', e.target.value); setInputPeso(e.target.value) } } fontSize={[30, 14]}/>
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
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl isInvalid={isErrorClub}>
                                    <FormLabel fontSize={[40, 15]}>Club<Text style={ (!inputClubCustom && !inputClubCustomName) ? { display: 'none' } : { display: 'inline-block' } }> { ': ' + localStorage.getItem('club') } </Text></FormLabel>
                                    <HStack>                                    
                                        <Select value={ inputClub } style={ (inputClubCustom && inputClubCustomName) ? { display: 'none' } : { display: 'inline-block '} } placeholder="Seleccionar" onChange={ (e) => { setInputClub(e.target.value); localStorage.setItem('club', e.target.value ) } } fontSize={[30, 14]}>
                                            {clubes.map((club, index) => {
                                                return (
                                                    <option key={ index }>{ club }</option>
                                                )
                                            })}
                                        </Select>
                                    </HStack>
                                </FormControl>
                                <HStack marginTop='20px'>
                                    <Button onClick={ () => { setInputClubCustom(true), setInputClubCustomName(true); } } style={ inputClubCustom ? { display: 'none' } : { display: 'inline-block' } } fontSize={[30, 14]}>No encuentro mi club</Button>
                                    <Button onClick={ (e) => { setInputClubCustom(false); localStorage.setItem('clubCustom', '' )} } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } }><CloseIcon></CloseIcon></Button>
                                    <Input onChange={ (e) => { setInputClub(e.target.value); localStorage.setItem('club', e.target.value ) } } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } } type="text" placeholder="Club al que perteneces actualmente"  fontSize={[30, 14]}/>
                                    <Button onClick={ () => { setInputClubCustom(false); setInputClubCustomName(true) } } style={ inputClubCustom ? { display: 'block' } : { display: 'none' } }><CheckIcon></CheckIcon></Button>
                                </HStack>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl>
                                    <FormLabel fontSize={[40, 15]}>Condición</FormLabel>
                                    <Select value={ inputCondicion } onChange={ (e) => { localStorage.setItem('condicion', e.target.value); setInputCondicion(e.target.value) } } placeholder="Seleccionar" fontSize={[30, 14]}>
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
                            {/** CLUBES ANTERIORES
                            <GridItem colSpan={12}>
                                <Accordion defaultIndex={[1]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontSize={[40, 15]}>
                                                Clubes anteriores
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input value={ localStorage.getItem('clubPrevio1') } onChange={ (e) => localStorage.setItem('clubPrevio1', e.target.value) }placeholder="Club previo 1" fontSize={[30, 14]}/>
                                            <Input value={ localStorage.getItem('clubPrevio2') } onChange={ (e) => localStorage.setItem('clubPrevio2', e.target.value) }placeholder="Club previo 2" fontSize={[30, 14]}/>
                                            <Input value={ localStorage.getItem('clubPrevio3') } onChange={ (e) => localStorage.setItem('clubPrevio3', e.target.value) }placeholder="Club previo 3" fontSize={[30, 14]}/>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </GridItem>
                            CIERRE CLUBES ANTERIORES */}
                            <GridItem colSpan={12}>
                                <FormLabel fontSize={[30, 14]}>Quiero ser visto por:</FormLabel>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <Button className={ inputVistoPorAgentes ? 'btn2' : '' } fontSize={[30, 14]} onClick={() => setInputVistoPorAgentes(!inputVistoPorAgentes)} width='full'>Agentes</Button>
                                {/**<Checkbox colorScheme='blue'>
                                    Universidadesword
                                </Checkbox>
                                        */}
                            </GridItem>
                            <GridItem colSpan={12}>
                                <Button className={ inputVistoPorClubes ? 'btn2' : '' } fontSize={[30, 14]} onClick={() => setInputVistoPorClubes(!inputVistoPorClubes)} width='full'>Clubes</Button>
                                {/**<Checkbox colorScheme='blue'>
                                    Universidadesword
                                </Checkbox>
                                        */}
                            </GridItem>
                                
                            <GridItem colSpan={12}>
                                <Button className={ inputUniversidades ? 'btn2' : '' } onClick={ () => { setInputUniversidades(!inputUniversidades); localStorage.setItem('universidades', 'true') } }width='full' fontSize={[30, 14]}>Universidades</Button>
                                {/**<Checkbox colorScheme='blue'>
                                    Universidadesword
                                </Checkbox>
                                        */}
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } } fontSize={[40, 15]}>
                                    <FormLabel fontSize={[40, 15]}>Nivel de inglés</FormLabel>
                                    <Select value={ inputNivelDeIngles } onChange={ (e) => { localStorage.setItem('nivelDeIngles', e.target.value); setInputNivelDeIngles(e.target.value) } } fontSize={[30, 14]}>
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
                            {/** CERTIFICACIONES
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <FormLabel fontSize={[40, 15]}>Certificaciones</FormLabel>
                                    <Input onChange={ (e) => localStorage.setItem('certificaciones', 'true') } type="text" placeholder="Certificaciones" fontSize={[30, 14]}/>
                                    {!isErrorCategoria ? (
                                        <FormHelperText>
                                            Ingresa tus certificados separados por coma: Ej: CAE, First, etc 
                                        </FormHelperText>
                                        ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            CIERRE CERTIFICACIONES  */}
                            <GridItem colSpan={6}>
                                <FormControl style={ inputUniversidades ? { display: 'inline-block'} : { display: 'none' } }>
                                    <FormLabel fontSize={[40, 15]}>Presupuesto</FormLabel>
                                    <Select value={ inputPresupuesto } onChange={ (e) => { localStorage.setItem('presupuesto', e.target.value); setInputPresupuesto(e.target.value) } } placeholder="Seleccionar" fontSize={[30, 14]}>
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
                            
                            <GridItem colSpan={12}>
                                <Text>Redes sociales</Text>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl>
                                    <FormLabel fontSize={[40, 15]}>Facebook</FormLabel>
                                    <Input placeholder="URL del perfil" value={ inputFacebook } onChange={(e) => { localStorage.setItem("facebook", e.target.value); setInputFacebook(e.target.value) } } fontSize={[30, 14]}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl>
                                    <FormLabel fontSize={[40, 15]}>Instagram</FormLabel>
                                    <Input placeholder="URL del perfil" value={ inputInstagram } onChange={(e) => { localStorage.setItem("instagram", e.target.value); setInputInstagram(e.target.value) } } fontSize={[30, 14]}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl>
                                <FormLabel fontSize={[40, 15]}>Twitter</FormLabel>
                                    <Input placeholder="URL del perfil" value={ inputTwitter } onChange={(e) => { localStorage.setItem("twitter", e.target.value); setInputTwitter(e.target.value) } } fontSize={[30, 14]}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 6, 6]}>
                                <FormControl>
                                <FormLabel fontSize={[40, 15]}>Tiktok</FormLabel>
                                    <Input placeholder="URL del perfil" value={ inputTiktok } onChange={(e) => { localStorage.setItem("twitter", e.target.value); setInputTiktok(e.target.value) } } fontSize={[30, 14]}/>
                                </FormControl>
                            </GridItem>
                            
                            <GridItem colSpan={12}>
                                <Link href="/">
                                    <Button
                                        w="full"
                                        className="btn2"
                                    
                                        height={['100px', '70px']}
                                        fontSize={[ '26px', '24px']}
                                        width={['180px', '150px']}
                                    >
                                        Atrás
                                    </Button>
                                </Link>
                                <Button
                                    w="full"
                                    className="btn2"
                                
                                    float='right'

                                    height={['100px', '70px']}
                                    fontSize={[ '26px', '24px']}
                                    width={['180px', '150px']}

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