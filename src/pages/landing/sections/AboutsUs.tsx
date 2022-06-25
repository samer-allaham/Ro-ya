import React from 'react';
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export const AboutUs = () => {
    return (
        <Box id="intro" className='boxes' pt={10} pb={20} pl={700} pr={700}>
            <Heading pb={10} textAlign={"center"} as='h3' size='lg'>
                نبذة عن المؤسسة

            </Heading>

            <Text fontSize='md' textAlign={"right"}>
                مؤسسة تدريب وطني معتمدة من الجهات المختصة في الاردن.تاسست عام 2022 من خلال عدد من الخبراء والمختصين قاموا بمشاركة خلاصة تجاربهم على مدى عشرات السنين من الخبرة في كافة مجالات التدريب وتسعى المؤسسة لتجويد التدريب وبناء الكفاءات الوطنية والاقليمية ودعم المدربين في الاردن و خارجه باصحاب الخبرات في تقديم برامج نوعية ومميزة وذات جودة عالية
            </Text>

        </Box>
    )

}