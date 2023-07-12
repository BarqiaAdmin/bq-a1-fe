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
} from '@chakra-ui/react';

import NavBar from '../src/Components/NavBar/NavBar';
import SideBar from '../src/Components/SideBar/SideBar';

import { useFileUpload } from 'use-file-upload';
import { get } from 'http';

import { useState } from 'react';
import {ChevronRightIcon} from '@chakra-ui/icons';

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

    const [urlDeImagen, setUrlDeImagen] = useState('');
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

    // As we have used custom buttons, we need a reference variable to
    // change the state

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [
        'https://s3.abcstatics.com/media/bienestar/2019/09/17/futbol-1-kU3C--1248x698@abc.jpg',
        'https://chajari.gob.ar/wp-content/uploads/2016/12/futbol-generic-entry-point.jpg',
        'https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg',
        'https://definicion.de/wp-content/uploads/2009/03/futbolistas.jpg'
    ];
    
    useEffect(() => {
        setUrlDeImagen(localStorage.getItem('urlDeImagen'));
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
    }, []);   

    return(
        <>
        <Box>
            <NavBar />
            {/**
            <SideBar />
             */}
            <HStack>
                <SimpleGrid columns={4}>
                    <GridItem
                        colSpan={4}
                        marginLeft="200px"
                        >
                        <VStack
                            gap="5px"
                            paddingTop="100px"
                        >
                            <HStack>
                                
                                <VStack gap="5px">
                                    <Image alt=''
                                        marginRight="20px"
                                        width="150px"
                                        src={urlDeImagen}
                                        borderRadius='100%'
                                    />
                                    <Heading>{ nombre } { apellido }</Heading>
                                    <HStack gap="5px">
                                        <Button
                                            color="white"
                                            background="#144077"
                                            >
                                            Seguir jugador
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
                                        <Button
                                            color="white"
                                            background="#144077"
                                            >
                                            <Image alt=''  src="/share.png" />
                                        </Button>
                                    </HStack>
                                </VStack>
                                <HStack>
                                    <Progress value={75} size='lg' colorScheme='green' />
                                </HStack>
                            </HStack>
                        </VStack>
                        <VStack
                            bg="#0E1216"
                            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                            borderRadius="16px"
                            color="#ECECEC"
                            margin="auto"
                            marginTop="25px"
                            padding="30px 100px">
                            
                            <SimpleGrid columns={15} fontSize='19px' textAlign="center">
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">EQUIPO</Text>
                                    <Text>{ club }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">POSICIÓN</Text>
                                    <Text>{ posicion }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">CATEGORÍA</Text>
                                    <Text>{ categoria }</Text> 
                                </GridItem>
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">ESTATURA</Text>
                                    <Text>{ estatura }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">PESO</Text>
                                    <Text>{ peso }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">EDAD</Text>
                                    <Text>{ edad }</Text> 
                                </GridItem>
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">ATRIBUTOS</Text>
                                    {/**
                                    <Image alt='' 
                                        src="/sl-icono-argentina.jpg"
                                        borderRadius="100%"
                                        margin="auto"
                                        marginTop="10px"
                                        width="30px"
                                    />
                                     */}
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">NACIONALIDAD</Text>
                                    <Text>{ nacionalidad }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">PIE HÁBIL</Text>
                                    <Text>{ pieHabil }</Text> 
                                </GridItem>
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">CONDICIÓN</Text>
                                    <Text>{ condicion }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text color="#707378">NIVEL DE INGLÉS</Text>
                                    <Text>{ nivelDeIngles }</Text> 
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Box h="48px" w="1px" margin="auto" background="#707378"></Box>
                                </GridItem>
                                <GridItem colSpan={3} marginBottom="30px">
                                    <Text color="#707378">PRESUPUESTO</Text>
                                    <Text>{ presupuesto }</Text> 
                                </GridItem>
                                    {/*
                                    Commit
                                    <GridItem colSpan={5}>
                                    <VStack>
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
                                    </VStack>
                                </GridItem>
                                    */}
                                

                                {/*
                                <GridItem colSpan={5}>
                                    <VStack>
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
                                    </VStack>
                                </GridItem>
                                */}
                            </SimpleGrid>
                        </VStack>
                    </GridItem>
                        

                    {/* "Top Torneos (Figma)" */}

                    <GridItem colSpan={15}>
                    <VStack>
                                <Heading>Galeria</Heading>
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
                                <Box
                                position={'relative'}
                                height={'600px'}
                                width={'full'}
                                overflow={'hidden'}>
                                {/* CSS files for react-slick */}
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
                                {/* Left Icon */}
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
                                {/* Right Icon */}
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
                                {/* Slider */}
                                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                                    {cards.map((url, index) => (
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
                        </VStack>
                        <Box>
                            <HStack>
                                <Text>ESTADISTICAS</Text>
                                <FormControl>
                                    <Input placeholder="Buscar por nombre del club rival" />
                                </FormControl>
                            </HStack>
                            <HStack>
                                <TableContainer m='auto'>
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
                        <HStack>
                            <Image h='330px' src='https://s3.abcstatics.com/media/bienestar/2019/09/17/futbol-1-kU3C--1248x698@abc.jpg' alt=''/>
                            <Image h='330px' src='https://chajari.gob.ar/wp-content/uploads/2016/12/futbol-generic-entry-point.jpg' alt=''/>
                            <Image h='330px' src='https://definicion.de/wp-content/uploads/2009/03/futbolistas.jpg' alt=''/>
                            <Image h='330px' src='https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg' alt=''/>
                        </HStack>
                        </Box>
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
        </Box>
        </>
    )
}