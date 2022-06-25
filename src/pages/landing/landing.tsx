import React from 'react';
import { Box } from '@chakra-ui/react'
import Intro from "./sections/intro"
import { AboutUs } from './sections/AboutsUs';
import { Services } from './sections/Services';
import { Courses } from './sections/Courses';
import { Blogs } from './sections/Blogs';
import { Coaches } from './sections/Coaches'
export const Landing = () => {
    return (<Box>
        <Intro />
        <AboutUs />
        <Services />
        <Courses />
        <Coaches />
        {/* <Blogs /> */}
    </Box>
    )
}