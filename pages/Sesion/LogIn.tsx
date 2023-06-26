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
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';

const LogIn = () => {
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
                    <GridItem colSpan={8} textAlign="right">
                        <Link className="link1" href="PassRecovery">Olvidé mi contraseña</Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Link className="link1" href="http://localhost:3000/Usuario/Perfil-beta">
                            <Button
                                w="full"
                                className="btn1"
                            >
                                Iniciar sesión
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  src="/google.png" />
                            Continuar con Google
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Button w="full">
                            <Image alt=''  
                            width="19px"
                            height="18px"
                            src="/facebook.png" />
                            Continuar con Facebook
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8}>
                        <Box textAlign="center">
                            ¿No tienes una cuenta? <Link className="link1" href="/">Regístrate aquí</Link>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default LogIn;