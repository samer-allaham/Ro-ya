import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import Coach from './Coach'
// import required modules
import { Pagination } from "swiper";

import coach1 from '../assests/newcoach1.jpg';
import coach2 from '../assests/mohammed.jpg';
import coach3 from '../assests/hassan.jpg';
import coach4 from '../assests/newcoach2.jpg';


let cardOneData = { title: " د محمد اللحام", description: "دكتوراه هندسة برمجيات خبير بادارة المشاريع وإدارة المخاطر وتحليل النظم والأنظمة الموزعة", imageSrc: coach2, badge1: "Risk mng", badge2: "Projects mng", badge3: "distributed sys", }

let cardTwoData = {
    title: "الاستاذ الدكتور عبدالله سرور الزعبي",
    description: "خبير بالمخاطر الزلزالية  و الطاقة والمياه و التعليم العالي و التعليم التقني و الجودة و الإعتماد", imageSrc: coach1, badge1: "Technical Education", badge2: "seismic hazards", badge3: "higher education",
}

let cardThreeData = { title: "د حسن العواملة", description: "خبير بالحكومة الإلكترونية  و القيادة الإدارية الحديثة و إدارة الجودة و التدقيق الداخلي ", imageSrc: coach3, badge1: "E-goverment", badge2: "Audit", badge3: "management", }


let cardFourData = { title: "د مشهور المحارمة", description: "دكتوراه مالية و مصرفية خبير في تدريب المدربين", imageSrc: coach4, badge1: "finance", badge2: "training", badge3: "higher education", }


export default function Slider() {


    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide><Coach {...cardFourData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardTwoData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardThreeData} /></SwiperSlide>


                {/* <SwiperSlide><Coach {...cardTwoData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardOneData} /></SwiperSlide> */}

            </Swiper>
        </>
    );
}
