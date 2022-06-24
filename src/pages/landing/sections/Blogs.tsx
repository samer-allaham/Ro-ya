import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

import Blog from '../../../components/Blog';
import blog1 from '../../../assests/blog1.jpeg';


let cardOneData = { title: "خطوات لبدء نشاط تجاري", description: "هذه مقالة عامة يمكنك استخدامها لإضافة محتوى المادة / المواضيع على موقع الويب الخاص بك.", author: "أحمد عبد الوهاب قرملي", date: "2/2/2022", imageSrc: blog1 }


// title,description,author,date,duration, imageSrc
export const Blogs = () => {
    return <Box className='boxes' pt={10} pb={20} pl={700} pr={700}>
        <Heading pb={10} textAlign={"center"} as='h3' size='lg'>
            المقالات
        </Heading>
        <SimpleGrid minChildWidth='300px' spacing='40px' >
            <Blog {...cardOneData} />
            <Blog {...cardOneData} />
            <Blog {...cardOneData} />


        </SimpleGrid>

    </Box>
}