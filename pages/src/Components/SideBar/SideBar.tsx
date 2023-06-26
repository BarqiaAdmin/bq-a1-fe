import {
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
    Flex,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';

const SideBar = () => {
    const textColor = useColorModeValue("white", "white");
    return (
        <VStack
            w="194px"
            h="100%"
            position="fixed"
            left='0'
            paddingLeft="18px"
            paddingTop="96px"
            justifyContent="flex-start"
            bg="#0E1216"
        >
            <SimpleGrid gap="26px" w="full">
                <GridItem>
                    <Text color={textColor}>DEPORTE</Text>
                </GridItem>
                <GridItem>
                    <Link color={textColor}><Image alt=''  display="inline-block" src="/futbol.png" />&nbsp; Futbol &nbsp;<Image alt=''  display="inline-block" src="/chevron_right.png" /></Link>
                </GridItem>
                <GridItem>
                    <Divider />
                </GridItem>
                <GridItem>
                    <Link color={textColor} href="/Dashboard"><Image alt=''  display="inline-block" src="/dashboard.png" />&nbsp; Dashboard</Link>
                </GridItem>
                <GridItem>
                    <Link color={textColor} href="/NuevoJugador"><Image alt=''  display="inline-block" src="/jugadores.png" />&nbsp; Jugadores</Link>
                </GridItem>
                <GridItem>
                    <Link color={textColor} href="/NuevoPartido"><Image alt=''  display="inline-block" src="/partidos.png" />&nbsp; Partidos</Link>
                </GridItem>
                <GridItem>
                    <Link color={textColor} href="/NuevoEquipo"><Image alt=''  display="inline-block" src="/equipos.png" />&nbsp; Equipos</Link>
                </GridItem>
                <GridItem>
                    <Link color={textColor} href="/NuevoTorneo"><Image alt=''  display="inline-block" src="/torneos.png" />&nbsp; Torneos</Link>
                </GridItem>
                <GridItem>
                    <Link color={textColor} href=""><Image alt=''  display="inline-block" src="/tienda_sl.png" />&nbsp; Tienda SL</Link>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default SideBar;