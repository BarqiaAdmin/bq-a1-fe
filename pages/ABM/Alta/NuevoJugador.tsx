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
    AccordionPanel
} from '@chakra-ui/react';

import axios from 'axios';
import { useState, useEffect } from 'react';

import Router from 'next/router';

import { useFileUpload } from 'use-file-upload';

function NuevoJugador() {

    const [domLoaded, setDomLoaded] = useState(false);

    const [files, selectFiles] = useFileUpload();

    const [inputNombre, setInputNombre] = useState('');
    const [inputApellido, setInputApellido] = useState('');
    const [inputEdad, setInputEdad] = useState('');
    const [inputNacimiento, setInputNacimiento] = useState('');
    const [inputNacionalidad, setInputNacionalidad] = useState('');
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
        })
        */
    }

    const handleNombreChange = (e) => {
        setInputNombre(e.target.value)
        localStorage.setItem('nombre', e.target.value);
    }

    const handleApellidoChange = (e) => {
        setInputApellido(e.target.value);
        localStorage.setItem('apellido', e.target.value);
    }

    const handleEdadChange = (e) => {
        setInputEdad(e.target.value);
        localStorage.setItem('edad', e.target.value)
    }

    const handleNacimientoChange = (e) => {
        setInputNacimiento(e.target.value);
        localStorage.setItem('nacimiento', e.target.value);
    }

    const handleNacionalidadChange = (e) => {
        setInputNacionalidad(e.target.value);
        localStorage.setItem('nacionalidad', e.target.value);
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

    const isErrorNombre = inputNombre === ''
    const isErrorApellido = inputApellido === ''
    const isErrorNacimiento = inputNacimiento === ''
    const isErrorNacionalidad = inputNacionalidad === ''
    const isErrorPieHabil = inputPieHabil === ''
    const isErrorPosicion = inputPosicion === ''
    const isErrorGenero = inputGenero === ''
    const isErrorEstatura = inputEstatura === ''
    const isErrorPeso = inputPeso === ''
    const isErrorClub = inputClub === ''
    const isErrorCategoria = inputCategoria === ''

    const crearJugador = () => {
        /*
        axios({
            method: 'post',
            url: 'http://localhost:5051/crearUsuario',
            data: {
                email: localStorage.getItem('email'),
                contrasenia: localStorage.getItem('contraseña'),
                imagelDePerfil: localStorage.getItem('imagenDePerfil'),
                nombre: localStorage.getItem('apellido'),
                apellido: localStorage.getItem('apellido'),
                club: localStorage.getItem('club'),
                edad: localStorage.getItem('edad'),
                nacionalidad: localStorage.getItem('nacionalidad'),
                nivelDeIngles: localStorage.getItem('nivelDeIngles'),
                certificaciones: localStorage.getItem('certificaciones'),
                pieHabil: localStorage.getItem('pieHabil'),
                posicion: localStorage.getItem('posicion'),
                genero: localStorage.getItem('genero'),
                estatura: localStorage.getItem('estatura'),
                categoria: localStorage.getItem('categoria'),
                condicion: localStorage.getItem('condicion'),
                presupuesto: localStorage.getItem('presupuesto'),
                clubesAnteriores : {},
                facebook: localStorage.getItem('facebook'),
                instagram: localStorage.getItem('instagram'),
                tiktok: localStorage.getItem('tiktok'),
            }
        })*/
        Router.push({
            pathname: '/ABM/Alta/NuevoJugador2'
        })
    }

    useEffect(() => {
        setDomLoaded(true);
    })

    return (
        <>
            {domLoaded && (
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
                        gap="32px"
                        margin="auto"
                        marginTop="25px"
                        paddingTop="100px"
                    >
                        <HStack>
                            {/**
                            <div>
                                <Image alt=''  src="/ellipse.png" />
                                <Image alt='' 
                                    id="fotoDePerfil"
                                    src={files?.source || '/usuario.png'}
                                    marginTop="-130px"
                                    marginLeft="60px"
                                    paddingBottom="10px"
                                />
                                
                            </div>
                             */}
                            <Link
                                id="botonDeSubirImagen"
                                color="#6EC1E4"
                                marginLeft="35px"
                                position="relative"
                                zIndex="9999"
                                onClick={subirImagen}
                            >
                                Subir imagen
                            </Link>
                        </HStack>
                        <Divider visibility="hidden" />
                        <SimpleGrid columns={12} gap="32px" w="full">
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorNombre}>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input placeholder="Ingresar nombre" value={inputNombre} onChange={handleNombreChange}/>
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
                                    <Input placeholder="Ingresar apellido" onChange={handleApellidoChange}/>
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
                                    <FormLabel>Edad</FormLabel>
                                    <Input placeholder="DD/MM/AAAA" onChange={handleEdadChange}/>
                                    {!isErrorNacimiento ? (
                                        <FormHelperText>
                                            Ingresa tu edad
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorNacionalidad}>
                                    <FormLabel>Nacionalidad</FormLabel>
                                    <Select placeholder="Seleccionar país" onChange={handleNacionalidadChange}>
                                        <option>Argentina</option>
                                        <option>Colombia</option>
                                    </Select>
                                    {!isErrorNacionalidad ? (
                                        <FormHelperText>
                                            Selecciona tu nacionalidad
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl>
                                    <FormLabel>Nivel de inglés</FormLabel>
                                    <Select onChange={handleNivelDeInglesChange}>
                                        <option>Bilingüe</option>
                                        <option>Avanzado</option>
                                        <option>Intermedio</option>
                                        <option>Básico</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Accordion defaultIndex={[1]} allowMultiple marginTop='31px'>
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
                            <GridItem colSpan={12}>
                                <Text>SOCIAL</Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Facebook</FormLabel>
                                    <Input placeholder="Ingresar usuario" onChange={(e) => localStorage.setItem("facebook", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Instagram</FormLabel>
                                    <Input placeholder="Ingresar usuario" onChange={(e) => localStorage.setItem("instagram", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <FormLabel>Tiktok</FormLabel>
                                    <Input placeholder="Ingresar usuario" onChange={(e) => localStorage.setItem("tiktok", e.target.value)}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={12}>
                                <Text>CARACTERISTICAS JUGADOR</Text>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl isRequired isInvalid={isErrorPieHabil}>
                                    <FormLabel>Pie hábil</FormLabel>
                                    <Select onChange={handlePieHabilChange}>
                                        <option>Derecho</option>
                                        <option>Izquierdo</option>
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
                                    <Select onChange={handlePosicionChange}>
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
                                    <Select onChange={handleGeneroChange}>
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
                                    <Input placeholder="Ingresar estatura" onChange={handleEstaturaChange}/>
                                    {!isErrorEstatura ? (
                                        <FormHelperText>
                                            Ingresa tu estatura
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorPeso}>
                                    <FormLabel>Peso</FormLabel>
                                    <Input placeholder="Ingresar peso" onChange={handlePesoChange}/>
                                    {!isErrorPeso ? (
                                        <FormHelperText>
                                            Ingresa tu peso
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorClub}>
                                    <FormLabel>Club</FormLabel>
                                    <Select placeholder="Seleccionar club" onChange={handleClubChange}>
                                        <option>Club 1</option>
                                        <option>Club 2</option>
                                        <option>Club 3</option>
                                        <option>Club 4</option>
                                        <option>Club 5</option>
                                    </Select>
                                    {!isErrorClub ? (
                                        <FormHelperText>
                                            Selecciona tu club
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage>Campo obligatorio</FormErrorMessage>
                                    )}
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl isRequired isInvalid={isErrorCategoria}>
                                    <FormLabel>Categoría</FormLabel>
                                    <Select placeholder="Seleccionar categoría" onChange={handleCategoriaChange}>
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
                                    <Select placeholder="Condición" onChange={handleCondicionChange}>
                                        <option>Libre</option>
                                        <option>Con contrato</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl>
                                    <Select placeholder="Presupuesto" onChange={handlePresupuestoChange}>
                                        <option>0 - 5.000</option>
                                        <option>6.0000 - 10.000</option>
                                        <option>10.000 - 15.000</option>
                                        <option>16.000 - 20.000</option>
                                        <option>Más de 20.000</option>
                                    </Select>
                                </FormControl>
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
                                            <Input placeholder="Club previo 1" />
                                            <Input placeholder="Club previo 2" />
                                            <Input placeholder="Club previo 3" />
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </GridItem>
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

                                <Link href="/Onboarding/Onboarding">
                                    <Button>
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