import { 
    Container,
    VStack,
    Image,
    Heading,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link
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
                <SimpleGrid columns={4}>
                    <GridItem>
                        <Image alt=''  src="/logo.png" />
                    </GridItem>
                    <GridItem>
                        <Heading>La plataforma para potenciar tu pasión</Heading>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Ingresa tu email" />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Ingresa tu contraseña" />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel>Repetir contraseña</FormLabel>
                            <Input type="password" placeholder="Repetí tu contraseña" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <FormControl>
                            <Checkbox />
                            <FormLabel>
                                Acepto los Términos y Condiciones
                            </FormLabel>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                       <Link>
                            Olvidé mi contraseña
                       </Link>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default LogIn;