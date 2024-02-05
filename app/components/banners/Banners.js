"use client";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./Banners.css";
import Image from "next/image";
const Banners = () => {
  return (
    <div className="container mx-auto hero__section">
      <div className="first__banner  py-5">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
          <SwiperSlide>
            <Image
              src="/Hero banners.png"
              alt="arrow"
              className="w-full"
              width={1000}
              height={600}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Hero banners.png"
              alt="arrow"
              className="w-full"
              width={1000}
              height={600}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Hero banners.png"
              alt="arrow"
              className="w-full"
              width={1000}
              height={600}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Hero banners.png"
              alt="arrow"
              className="w-full h-72"
              width={1000}
              height={600}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Hero banners.png"
              alt="arrow"
              className="w-full h-72"
              width={1000}
              height={600}
              layout="responsive"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="second__banner flex justify-between py-5">
        <div className="left__side w-full">
          <Image
            src="/banner 1.png"
            alt="banner"
            width={608}
            height={320}
            layout="responsive"
          />
        </div>
        <div className="right__side w-full ml-2">
          <Image
            src="/banner 2.png"
            alt="banner"
            width={620}
            height={320}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
