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

const RegistroClub = () => {
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
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Website</FormLabel>
                            <Input placeholder="Ingresa el website de tu torneo" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>País</FormLabel>
                            <Select placeholder="Seleccionar país">
                                <option value="argentina">Argentina</option>
                                <option value="colombia">Colombia</option>
                                <option value="usa">Estados Unidos</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Nivel deportivo</FormLabel>
                            <Select placeholder="Seleccionar nivel">
                                <option>Pro</option>
                                <option>Semi-Pro</option>
                                <option>Juvenil</option>
                                <option>Amateur</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Link href="http://127.0.0.1:5500/views/OnboardSelect.html">Volver</Link>
                    </GridItem>
                    <GridItem colSpan={1} textAlign="right">
                        <Link href="/Onboarding/Load">
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

export default RegistroClub;