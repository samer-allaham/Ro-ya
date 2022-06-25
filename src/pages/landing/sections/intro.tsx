import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';
import imageSrc from '../../../assests/hero2.jpg';
import logoSrc from '../../../assests/newlogo-removebg-preview.png';


export default function Hero() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                imageSrc
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                align={'center'}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'3x3'} align={'center'} spacing={6}>
                    <Image
                        rounded={'lg'}
                        height={290}
                        width={500}
                        objectFit={'cover'}
                        src={logoSrc}
                    />
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        marginLeft={50}
                        pl={35}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        حلول التدريب و المدربين
                    </Text>
                    {/* <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack> */}
                </Stack>
            </VStack>
        </Flex>
    );
}
