import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Image,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { ReactNode } from 'react';
import logo from '../assests/newlogo.png';


const Logo = (props: any) => {
    return (

        <Image height={40} src={logo} />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <Link href={'#courses'}>الدورات التدريبية</Link>
                    <Link href={'#intro'}>نبذة عن المؤسسة</Link>
                    {/* <Link href={'#'}>المقالات</Link> */}
                    <Link href={'#services'}>خدمات المؤسسة</Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>الرؤية المستدامة للاستشارات و التدريب
                        ©</Text>
                    <Stack direction={'row'} spacing={6}>
                        {/* <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton> */}
                        <SocialButton label={'Facebook'} href={'#'}>
                            <FaFacebook />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}