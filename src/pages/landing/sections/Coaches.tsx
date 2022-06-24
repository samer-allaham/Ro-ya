import React from 'react';
import { Box } from '@chakra-ui/react'
import Slider from '../../../components/Slider'
import { Heading, useColorModeValue } from '@chakra-ui/react'


export const Coaches = () => {
    return <Box pt={10} pb={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Heading pb={10} as='h3' textAlign="center" size='lg'>
            المدربين
        </Heading>
        <Slider />
    </Box>
}