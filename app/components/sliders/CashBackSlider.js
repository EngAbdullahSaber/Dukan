"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const CashBackSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="container mx-auto chashback__slider">
      <h2
        className="text-[#070706] font-bold text-2xl text-center
      pt-8"
      >
        This week offers
      </h2>
      <Swiper
        slidesPerView={2.5}
        centeredSlides={false}
        spaceBetween={50}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        <SwiperSlide>
          <Image src="/add.png" alt="banner" width={504} height={232} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/add (1).png" alt="banner" width={620} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/dd.png"
            alt="banner"
            width={620}
            height={250}
            className="object-scale-down"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/add.png" alt="banner" width={504} height={232} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/add (1).png" alt="banner" width={620} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/dd.png"
            alt="banner"
            width={620}
            height={250}
            className="object-scale-down"
          />
        </SwiperSlide>
      </Swiper>
      <div className="mx-auto block text-center">
        <button onClick={prevHandler} className=" p-2 ">
          <ArrowBackIosIcon className="text-[#B0B0B0]" />
        </button>
        <button onClick={nextHandler}>
          <ArrowForwardIosIcon className="text-[#00A9A2]" />
        </button>
      </div>
    </div>
  );
};

export default CashBackSlider;
