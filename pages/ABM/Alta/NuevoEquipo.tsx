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

import NavBar from '../../../Componentes/Components/NavBar/NavBar';
import SideBar from '../../../Componentes/Components/SideBar/SideBar';

const NuevoEquipo = () => {

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
                    <BreadcrumbLink href='#'>Equipos</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem color="#FFFFFF" isCurrentPage>
                    <BreadcrumbLink href='#'>Nuevo equipo</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <VStack>
                    <div>
                        <Image alt=''  src="/ellipse.png" />
                        <Image alt='' 
                            src="/escudo.png"
                            marginTop="-130px"
                            marginLeft="56px"
                            paddingBottom="10px"
                        />
                        <Link
                            color="#6EC1E4"
                            marginLeft="35px"
                        >
                        Subir imagen
                        </Link>
                    </div>
                </VStack>
                <SimpleGrid columns={4} gap="32px" w="full">
                    <GridItem colSpan={4}>
                        <FormControl>
                            <FormLabel>Nombre del equipo</FormLabel>
                            <Input placeholder="Ingresa el nombre del equipo" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Ciudad</FormLabel>
                            <Input placeholder="Ingresar ciudad" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>País</FormLabel>
                            <Select placeholder="Seleccionar país">
                                <option value="argentina">Argentina</option>
                                <option value="colombia">Colombia</option>
                                <option value="usa">Estados Unidos</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Género</FormLabel>
                            <Select placeholder="Seleccionar género">
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Club</FormLabel>
                            <Select placeholder="Seleccionar club">
                                <option value="club1">Club 1</option>
                                <option value="club2">Club 2</option>
                                <option value="club3">Club 3</option>
                                <option value="club4">Club 4</option>
                                <option value="club5">Club 5</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Código</FormLabel>
                            <Input placeholder="Ingresar código de equipo" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1} alignItems="center">
                        <Checkbox>PRIVADO</Checkbox>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Checkbox>VERIFICADO</Checkbox>
                    </GridItem>
                    <GridItem colSpan={4} textAlign="right">
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
                            Crear equipo
                        </Button>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>    
    );
};

export default NuevoEquipo;