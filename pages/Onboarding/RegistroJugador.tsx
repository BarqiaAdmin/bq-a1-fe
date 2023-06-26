import {
    Container,
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
    Flex
} from '@chakra-ui/react';

const RegistroJugador = () => {
    return (
        <Container
            maxW="100%"
            p={10}
        >
            <Image alt=''  src="/artwork1.png" position="fixed" left="0" bottom="0" />
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
                <VStack>
                    <div>
                        <Image alt=''  src="/ellipse.png" />
                        <Image alt='' 
                            src="/usuario.png"
                            marginTop="-130px"
                            marginLeft="64px"
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
                            <FormLabel>Nombre</FormLabel>
                            <Input placeholder="Ingresa tu nombre" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Apellido</FormLabel>
                            <Input placeholder="Ingresa tu apellido" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Fecha de nacimiento</FormLabel>
                            <Input placeholder="DD/MM/AAAA" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Nacionalidad</FormLabel>
                            <Select placeholder="Seleccionar">
                                <option>Argentina</option>
                                <option>Colombia</option>
                                <option>Estados Unidos</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Link href="http://127.0.0.1:5500/views/OnboardSelect.html">Volver</Link>
                    </GridItem>
                    <GridItem colSpan={1} textAlign="right">
                        <Link className="btn1" href="http://localhost:3000/Onboarding/Load">
                            <Button
                                p="10px 24px 12px"
                                w="161px"
                                h="57px"
                                bg="#353535"
                                borderRadius="5px"
                                fontSize="21px"
                                color="#A2A2A2"
                            >
                                Registro
                            </Button>
                        </Link>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default RegistroJugador;