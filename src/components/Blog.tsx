import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

import coach1 from '../assests/coachAvatar.png';

interface CardProps {
    title: string;
    imageSrc: string;
    description: string;
    author: string;
    date: string;

}
export default function Blog({ title, description, author, date, imageSrc }: CardProps) {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                    backgroundImage={imageSrc}
                >


                </Box>
                <Stack>
                    <Text
                        color={'#0476d0'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'lg'}
                        textAlign={"right"}
                        letterSpacing={1.1}>
                        مقال
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                        textAlign={"right"}>
                        {title}
                    </Heading>
                    <Text textAlign={"right"} color={'gray.500'}>
                        {description}
                    </Text>
                </Stack>
                <Stack className='blog-author' mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={coach1}
                    />
                    <Stack className='blog-author' direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text textAlign={"right"} fontWeight={600}>{author}</Text>
                        <Text textAlign={"right"} color={'gray.500'}>{date}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
