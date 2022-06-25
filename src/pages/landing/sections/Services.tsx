import React from 'react';

import { Heading, useColorModeValue, SimpleGrid, Box } from '@chakra-ui/react'

import imageOneSrc from '../../../assests/card1.jpeg';
import imageTwoSrc from '../../../assests/training3.jpg';
import imageThreeSrc from '../../../assests/training1.jpg';


import Card from '../../../components/Card';

let cardOneData = { title: "التنظيم والشركات", imageSrc: imageOneSrc }

let cardTwoData = { title: "العضويات و المدربين", imageSrc: imageTwoSrc }

let cardThreeData = { title: "استشارات وتدريب", imageSrc: imageThreeSrc }
export const Services = () => {

    return <Box id='services' className='boxes' pt={10} pb={20} pl={700} pr={700} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Heading pb={10} as='h3' textAlign={"center"} size='lg'>
            خدمات المؤسسة
        </Heading>
        <SimpleGrid minChildWidth='300px' spacing='40px' >
            {/* <Card {...cardOneData} /> */}
            <Card {...cardTwoData} />
            <Card {...cardThreeData} />
        </SimpleGrid>
    </Box>
}

