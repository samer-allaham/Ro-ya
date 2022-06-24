import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import Course from "../../../components/Course"
import course1 from '../../../assests/course1.jpeg';
import course2 from '../../../assests/course2.jpeg';
import course3 from '../../../assests/course3.jpeg';
import course4 from '../../../assests/course4.jpeg';
import course5 from '../../../assests/course5.jpeg';
import course6 from '../../../assests/course6.jpeg';
import course7 from '../../../assests/course7.jpeg';
import course8 from '../../../assests/course8.jpeg';
import course9 from '../../../assests/course9.jpeg';
import course10 from '../../../assests/course10.jpeg';
import course11 from '../../../assests/course11.jpeg';




let cardOneData = { title: "الموارد البشرية ونظام العمل", imageSrc: course1 }

let cardTwoData = { title: "الصحة والسلامة المهنية", imageSrc: course2 }

let cardThreeData = { title: "السكرتارية التنفيذية وإدارة المكاتب", imageSrc: course4 }

let cardFourData = { title: "إدارة المشاريع اإحترافية PMP", imageSrc: course5 }

let cardFiveData = { title: "العلاقات العامة والبروتوكول", imageSrc: course7 }

let cardSixData = { title: "المهارات المتقدمة لللموارد البشرية ونظام العمل", imageSrc: course8 }
let cardSevenData = { title: "مهارات الوظيفة وأنماط التكامل", imageSrc: course9 }

let cardEightData = { title: "سياسات التسويق الإلكتروني", imageSrc: course10 }
let cardNineData = { title: "مهارات صناعة البخور وبيعة", imageSrc: course6 }
let cardTenData = { title: "مركز الاتصال call center", imageSrc: course11 }
let cardElevenData = { title: "تدريب المدربين", imageSrc: course3 }

export const Courses = () => {
    return <Box className='boxes' pt={20} pb={60} pl={700} pr={700}>
        <Heading textAlign={"center"} pb={10} as='h3' size='lg'>
            الدورات التدريبية

        </Heading>
        <SimpleGrid minChildWidth='300px' spacing='40px' >

            <Course {...cardOneData} />
            <Course {...cardTwoData} />
            <Course {...cardThreeData} />
            <Course {...cardFourData} />
            <Course {...cardFiveData} />
            <Course {...cardSixData} />
            <Course {...cardSevenData} />
            <Course {...cardEightData} />
            <Course {...cardNineData} />
            <Course {...cardTenData} />
            <Course {...cardElevenData} />

        </SimpleGrid>
    </Box>
}