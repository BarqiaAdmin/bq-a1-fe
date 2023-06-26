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
            <Box>Please enter your email for recovery:</Box>
            <VStack
                position="relative"
            >
                <FormControl>
                    <FormLabel>User email:</FormLabel>
                    <Input placeholder="Enter your email here to send code"></Input>
                </FormControl>
                <HStack>
                    <Link href="/">Back</Link>
                    <Button>
                        <Link href="PassRecMailSent">Send</Link>
                    </Button>
                </HStack>
            </VStack>
        </Container>
    )
}

export default PassRecovery;