import React from 'react';
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export const AboutUs = () => {
    return (
        <Box className='boxes' pt={10} pb={20} pl={700} pr={700}>
            <Heading pb={10} textAlign={"center"} as='h3' size='lg'>
                نبذة عن المركز

            </Heading>

            <Text fontSize='md' textAlign={"right"}>

                مركز تدريب وطني معتمد من المؤسسة العامة للتدريب التقني والمهني.نشئ المركز عام 2016 من خلال عدد من الخبراء والمختصين قاموا بمشاركة خلاصة تجاربهم على مدى 35 عاما من الخبرة في كافة مجالات التدريب ويسعى المركز لتجويد التدريب وبناء الكفآت الوطنية ودعم المدربين السعوديين اصحاب الخبرات في تقديم برامج نوعية ومميزة وذات جودة عالية
            </Text>

        </Box>
    )

}