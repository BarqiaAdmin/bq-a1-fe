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

const PassRecMailSent = () => {
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
            <Box>Email sent!</Box>
            <VStack
                position="relative"
            >
                <HStack>
                    <Link href="/">Back</Link>
                </HStack>
            </VStack>
        </Container>
    )
}

export default PassRecMailSent;