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

import coach1 from '../assests/coachAvatar.png';
import coach2 from '../assests/coachAvatar2.jpeg';

let cardOneData = {
    title: "أحمد عبد الوهاب قرملي",
    description: "خبير تطوير الأعمال المعتمد", imageSrc: coach1, badge1: "Marketing", badge2: "Marketing", badge3: "Marketing",
}

let cardTwoData = { title: "دينا الهاشمي", description: "كوتش معتمد في مارس فينوس الدوليه للكوتشنج", imageSrc: coach2, badge1: "Marketing", badge2: "Marketing", badge3: "Marketing", }

let cardThreeData = { title: "السكرتارية التنفيذية وإدارة المكاتب", description: "كوتش معتمد في مارس فينوس الدوليه للكوتشنج", imageSrc: coach1, badge1: "Marketing", badge2: "Marketing", badge3: "Marketing", }

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
                <SwiperSlide><Coach {...cardOneData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardTwoData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardTwoData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardTwoData} /></SwiperSlide>
                <SwiperSlide><Coach {...cardOneData} /></SwiperSlide>

            </Swiper>
        </>
    );
}
