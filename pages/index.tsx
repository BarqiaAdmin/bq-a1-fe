import { 
    Container,
    Box,
    VStack,
    Image,
    Heading,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Button
} from '@chakra-ui/react';

const IndexPage = () => {
    return (
        <Container
            h='100%'
            w='100%'
        >
            <Image alt='' 
                position="fixed"
                bottom="0"
                left="0"
                h='100%'
                zIndex="0"
                src='/artwork2.png'
            />
            <Image alt='' 
                position='fixed'
                top='0'
                right='0'
                p="40px"
                src='/artwork3.png'
            />
            <VStack
                position="relative"
            >
                <SimpleGrid columns={8}>
                    <GridItem colSpan={8}>
                        <Image alt=''  src="/logo.png" />
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Heading>La plataforma para potenciar tu pasión</Heading>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Ingresa tu email" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Ingresa tu contraseña" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <FormControl>
                            <FormLabel>Repetir contraseña</FormLabel>
                            <Input type="password" placeholder="Repetí tu contraseña" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Checkbox>
                            Acepto los <Link className="link1" >Términos y condiciones</Link>
                        </Checkbox>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Link className="link1" href="Sesion/PassRecovery">Olvidé mi contraseña</Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Link className="link1" href="/Onboarding/Onboarding">
                            <Button
                                w="full"
                                className="btn1"
                            >
                                Registrarme
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/google.png" height='20px' width='20px'/>
                            Continuar con Google
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/facebook.png" height='20px' width='20px'/>
                            Continuar con Facebook
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Box textAlign="center">
                            Ya tienes cuenta? <Link className="link1" href="Sesion/LogIn">Ingresar</Link>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default IndexPage;