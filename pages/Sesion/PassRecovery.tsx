import { 
    Container,
    Box,
    VStack,
    HStack,
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
import { Form } from 'react-router-dom';

const PassRecovery = () => {

    return(
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
            <Image alt=''  src="/logo.png" />
            <VStack
                position="relative"
            >
                <FormControl>
                    <FormLabel>Correo electrónico:</FormLabel>
                    <Input placeholder="Ingresa tu correo electrónico para recuperar tu contraseña"></Input>
                </FormControl>
                <HStack>
                    <Link href="/">Volver</Link>
                    <Button>
                        <Link href="PassRecMailSent">Enviar</Link>
                    </Button>
                </HStack>
            </VStack>
        </Container>
    )
}

export default PassRecovery;