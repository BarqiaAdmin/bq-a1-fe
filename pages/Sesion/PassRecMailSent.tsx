import { 
    Container,
    Box,
    VStack,
    HStack,
    Image,
    Text,
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
import { Form } from 'react-router-dom';

const PassRecMailSent = () => {

    const handlePasswordRecoveryConfirmation = () => {
        fetch('https://bq-a1-be.vercel.app/passwordRecoveryConfirmation', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                "Content-Type": "application/json"
            }
        })
    }

    return(
        <Container
            h='100%'
            w='100%'
        >
            <SimpleGrid columns={8} gap={2}>
                <GridItem colSpan={8}>
                    <Heading>Restablecer contraseña</Heading>
                </GridItem>
                <GridItem colSpan={8}>
                    <FormControl>
                        <FormLabel>Ingresa el código de 6 dígitos que enviamos a tu casilla de correo:</FormLabel>
                        <Input id='inputCodigo' type="text" placeholder="Código de verificación" onChange={ () => {} } style={{ marginRight: "20px" }}/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={8}>
                    <FormControl>
                        <FormLabel>Nueva contraseña</FormLabel>
                        <Input id='inputPassword' type="password" placeholder="Ingresa tu nueva contraseña" onChange={ () => {} } />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={8}>
                    <FormControl>
                        <FormLabel>Repetir contraseña</FormLabel>
                        <Input id='inputPasswordRepeat' type="password" placeholder="Repetí tu contraseña" onChange={ () => {} } />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={8}>
                    <Button
                        w="full"
                        className="btn2"
                        onClick={handlePasswordRecoveryConfirmation}
                    >
                        Aceptar
                    </Button>
                </GridItem>
                {/**
                <GridItem colSpan={8}>
                    <Button w="full">
                        <Image alt=''  src="/google.png" height='20px' width='20px'/>&nbsp;
                        Continuar con Google
                    </Button>
                </GridItem>
                
                <GridItem colSpan={8}>
                    <Button w="full">
                        <Image alt=''  src="/facebook.png" height='20px' width='20px'/>&nbsp;
                        Continuar con Facebook
                    </Button>
                </GridItem>
                    */}
                <GridItem colSpan={8} marginTop='25px'>
                    <Box textAlign="center">
                        <VStack>
                            <Text>No tengo una cuenta:</Text>
                            <Link className="link1" href="/">
                                <Button type="button" className='btn1'>
                                    Registrarme
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </GridItem>
            </SimpleGrid>
        </Container>
    )
}

export default PassRecMailSent;