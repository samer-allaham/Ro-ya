import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';


interface CardProps {
    title: string;
    imageSrc: string;
    description: string;
    badge1: any;
    badge2: any;
    badge3: any;

}

export default function Coach({ title, imageSrc, description, badge1, badge2, badge3 }: CardProps) {
    return (
        <Center height={"100%"} >
            <Box
                maxW={'320px'}
                w={'full'}
                height={"100%"}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                className='coach'
                p={3}
                //   rounded={'lg'}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        imageSrc
                    }
                    mb={4}
                    pos={'relative'}
                // _after={{
                //   content: '""',
                //   w: 4,
                //   h: 4,
                //   border: '2px solid white',
                //   rounded: 'full',
                //   pos: 'absolute',
                //   bottom: 0,
                //   right: 3,
                // }}
                />
                <Heading mb={12} fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>

                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    mt={15}
                    mb={12}

                    px={3}>
                    {description}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {badge1?.split(' ')[0]}
                        <br />

                        {badge1?.split(' ')[1]}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {badge2?.split(' ')[0]}
                        <br />

                        {badge2?.split(' ')[1]}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {badge3.split(' ')[0]}
                        <br />

                        {badge3.split(' ')[1]}


                    </Badge>
                </Stack>

            </Box>
        </Center>
    );
}
