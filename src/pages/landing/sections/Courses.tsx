import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import Course from "../../../components/Course"
import course1 from '../../../assests/newcourse1.jpeg';
import course2 from '../../../assests/newcourse2.jpeg';
import course3 from '../../../assests/newcourse11.jpeg';
import course4 from '../../../assests/newcourse3.jpeg';
import course5 from '../../../assests/newcourse4.jpeg';
import course6 from '../../../assests/newcourse9.jpeg';
import course7 from '../../../assests/newcourse5.jpeg';
import course8 from '../../../assests/newcourse6.jpeg';
import course9 from '../../../assests/newcourse7.jpeg';
import course10 from '../../../assests/newcourse8.jpeg';
import course11 from '../../../assests/newcourse10.jpeg';
import course12 from '../../../assests/newcourse12.jpeg';
import course13 from '../../../assests/newcourse13.jpeg';
import course14 from '../../../assests/newcourse14.jpeg';
import course15 from '../../../assests/newcourse15.jpeg';
import course16 from '../../../assests/newcourse16.jpeg';



/*
المهارات الإشرافية
تطوير المرؤوسين
إدارة ضغوط العمل 
فرق العمل
إدارة الاجتماعات 
رسم السياسات واتخاذ القرار
التخطيط الاستراتيجي 
أدارة الأداء 
إدارة المخاطر
التفكير الإبداعي 
نظم دعم اتخاذ القرارات
إدارة المشاريع الاحترافية
شبكات الحاسوب
التسويق الإلكتروني
تحليل النظم
التحليل الإحصائي


*/



let cardOneData = { title: "المهارات الإشرافية", imageSrc: course1 }

let cardTwoData = { title: "تطوير المرؤوسين", imageSrc: course2 }

let cardThreeData = { title: "إدارة ضغوط العمل", imageSrc: course4 }

let cardFourData = { title: "فرق العمل", imageSrc: course5 }

let cardFiveData = { title: "إدارة الاجتماعات", imageSrc: course7 }

let cardSixData = { title: "رسم السياسات واتخاذ القرار", imageSrc: course8 }
let cardSevenData = { title: "التخطيط الاستراتيجي", imageSrc: course9 }

let cardEightData = { title: "إدارة الأداء", imageSrc: course10 }
let cardNineData = { title: "إدارة المخاطر", imageSrc: course6 }
let cardTenData = { title: "التفكير الإبداعي", imageSrc: course11 }
let cardElevenData = { title: "نظم دعم اتخاذ القرارات", imageSrc: course3 }


let cardTwelveData = { title: "إدارة المشاريع الاحترافية", imageSrc: course12 }

let cardTherteenData = { title: "شبكات الحاسوب", imageSrc: course13 }

let cardFourteenData = { title: "التسويق الإلكتروني", imageSrc: course14 }
let cardFifteenData = { title: "تحليل النظم", imageSrc: course15 }
let cardSixteenData = { title: "التحليل الإحصائي", imageSrc: course16 }

export const Courses = () => {
    return <Box id='courses' className='boxes' pt={20} pb={60} pl={700} pr={700}>
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
            <Course {...cardTwelveData} />
            <Course {...cardTherteenData} />
            <Course {...cardFourteenData} />
            <Course {...cardFifteenData} />
            <Course {...cardSixteenData} />
        </SimpleGrid>
    </Box>
}