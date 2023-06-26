import {
    Container,
    VStack,
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
    BreadcrumbLink
} from '@chakra-ui/react';

import NavBar from '../../../src/Components/NavBar/NavBar';
import SideBar from '../../../src/Components/SideBar/SideBar';

const NuevoPartido = () => {
    return (
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
            <VStack
                w="702px"
                p="40px 80px"
                bg="#0E1216"
                boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                borderRadius="16px"
                color="#ECECEC"
                gap="32px"
                margin="auto"
                paddingTop="100px"
            >
                <Breadcrumb color="#6EC1E4" separator='>'>
                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Partidos</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem color="#FFFFFF" isCurrentPage>
                    <BreadcrumbLink href='#'>Nuevo partido</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <SimpleGrid columns={3} gap="32px" w="full">
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Equipo local</FormLabel>
                            <Select placeholder="Seleccionar equipo">
                                <option>Equipo 1</option>
                                <option>Equipo 2</option>
                                <option>Equipo 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Resultado</FormLabel>
                            <Input placeholder="Ingresar" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Equipo visitante</FormLabel>
                            <Select placeholder="Seleccionar equipo">
                                <option>Equipo 1</option>
                                <option>Equipo 2</option>
                                <option>Equipo 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Resultado</FormLabel>
                            <Input placeholder="Ingresar" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <FormControl>
                            <FormLabel>Torneo</FormLabel>
                            <Select placeholder="Seleccionar torneo">
                                <option value="">Torneo 1</option>
                                <option value="">Torneo 2</option>
                                <option value="">Torneo 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <FormControl>
                            <FormLabel>Video URL</FormLabel>
                            <Input placeholder="Ingresar link de VEO" />
                        </FormControl>
                    </GridItem>                
                    <GridItem colSpan={3} textAlign="right">
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
                            Crear partido
                        </Button>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default NuevoPartido;