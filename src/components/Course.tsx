import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface CardProps {
    title: string;
    imageSrc: string;
}
export default function Course({ title, imageSrc }: CardProps) {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                className='course'

                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    className='course-pic'
                    height={"10vw"}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}
                    backgroundImage={imageSrc}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        px={3}
                        color={'blue.500'}
                        rounded={'full'}>
                        BUSINESS
                    </Text>

                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={5}>
                    <Stack mt={4} direction={'row'} align={'center'} justify={'center'}>

                        <Text fontSize={'2xl'} textAlign={"right"} fontWeight={600}>
                            {title}
                        </Text>

                    </Stack>
                    {/* <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            5.000 page views
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            50 automation executions
                        </ListItem>
                        {/* <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem> */}
                    {/* </List> */}

                    <Button
                        mt={14}
                        w={'full'}
                        bg={'#0476d0'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgba(72, 103, 187, 0.43)'}

                        _hover={{
                            bg: '#005aa0',
                        }}
                        _focus={{
                            bg: '#013761',
                        }}>
                        اشترك الان
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}
