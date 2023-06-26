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

const NuevoClub = () => {
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
            <VStack>
                <Breadcrumb color="#6EC1E4" separator='>'>
                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Clubes</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem color="#FFFFFF" isCurrentPage>
                    <BreadcrumbLink href='#'>Nuevo club</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <VStack
                    w="702px"
                    p="40px 80px"
                    bg="#0E1216"
                    boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                    borderRadius="16px"
                    color="#ECECEC"
                    gap="32px"
                >
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
                    <SimpleGrid columns={2} gap="32px" w="full">
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Nombre del club</FormLabel>
                                <Input placeholder="Ingresa el nombre del club" />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Ciudad</FormLabel>
                                <Input placeholder="Ingresar ciudad" />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>País</FormLabel>
                                <Select placeholder="Seleccionar país">
                                    <option value="argentina">Argentina</option>
                                    <option value="colombia">Colombia</option>
                                    <option value="españa">España</option>
                                    <option value="usa">Estados Unidos</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input placeholder="Ingresar e-mail" />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Página Web</FormLabel>
                                <Input placeholder="Ingresar URL" />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Categoría</FormLabel>
                                <Select placeholder="Seleccionar categoría">
                                    <option>Pro</option>
                                    <option>Semi-Pro</option>
                                    <option>Juvenil</option>
                                    <option>Amateur</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2} textAlign="right">
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
                                    Crear club
                                </Button>
                            </Link>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
            </VStack>
        </Container>
    );
}

export default NuevoClub;