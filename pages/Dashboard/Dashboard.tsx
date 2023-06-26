import {
    Container,
    Heading,
    Box,
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
    Divider
} from '@chakra-ui/react';

import NavBar from '../../src/Components/NavBar/NavBar';
import SideBar from '../../src/Components/SideBar/SideBar';

const Dashboard = () => {
    return (
        <Container
            maxW="100%"
            p={10}
            bg="#1A202C"
        >
            <NavBar />
            <SideBar />
            <VStack paddingTop="100px">
                <Heading marginBottom="25px">
                    Dashboard
                </Heading>
                <Button width="300px">
                    <Link href="/NuevoJugador"><Image alt=''  display="inline-block" src="/jugadores.png" />&nbsp; Nuevo Jugador</Link>
                </Button>
                <Button width="300px">
                    <Link href="/NuevoEquipo"><Image alt=''  display="inline-block" src="/equipos.png" />&nbsp; Nuevo Equipo</Link>
                </Button>
                <Button width="300px">
                    <Link href="/NuevoTorneo"><Image alt=''  display="inline-block" src="/torneos.png" />&nbsp; Nuevo Torneo</Link>
                </Button>
                <Button width="300px">
                    <Link href="/NuevoPartido"><Image alt=''  display="inline-block" src="/partidos.png" />&nbsp; Nuevo Partido</Link>
                </Button>
                <Button width="300px">
                    <Link href="/NuevoClub"><Image alt=''  display="inline-block" src="/equipos.png" />&nbsp; Nuevo Club</Link>
                </Button>
            </VStack>
        </Container>
    );
}

export default Dashboard;