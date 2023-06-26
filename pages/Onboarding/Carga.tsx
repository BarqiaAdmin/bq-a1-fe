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
    Flex,
    Spinner
} from '@chakra-ui/react';

const Load = () => {
    return (
        <Container
            maxW="100%"
            p={10}
        >
            <Image alt=''  src="/artwork1.png" position="fixed" left="0" bottom="0" />
            <Link href="/Usuario/Perfil">
                <VStack
                    w="702px"
                    h="500px"
                    p="40px 80px"
                    bg="#0E1216"
                    boxShadow="0px 1px 2px rgba(0, 0, 0, 0.08)"
                    borderRadius="16px"
                    color="#ECECEC"
                    gap="32px"
                    margin="auto"
                    marginTop=""
                    paddingTop="150px"
                >
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                    <Text
                        fontStyle="Normal"
                        fontWeight="600"
                        fontSize="18px"
                        lineHeight="195%"
                        textAlign="center"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="#FFFFFF"
                    >
                        UN MOMENTO POR FAVOR! <br />
                        ESTAMOS CREANDO TU CUENTA
                    </Text>
                </VStack>
            </Link>
        </Container>
    )
}

export default Load;