import {
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
    Switch,
} from '@chakra-ui/react';

const NavBar = () => {
    return (
        <HStack
            bg="#131619"
            w="100%"
            h="65px"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            zIndex="1"
        >
            <Flex
                alignItems="center"
                marginLeft="25px"
            >
                <Image alt=''  
                    w="22px"
                    h="19px"
                    marginRight="28px"
                    src="/menu.png"
                />
                <Image alt='' 
                    w="130px"
                    src="/logo.png"
                />
            </Flex>
            <Flex
                alignItems="center"
            >
                <Button marginRight="25px">
                    <Link href="/">Cerrar sesión</Link>
                </Button>
                <Image alt='' 
                    marginRight="20px"
                    src="/avatar.png"
                />
            </Flex>
        </HStack>
    )
};

export default NavBar;