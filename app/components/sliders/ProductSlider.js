"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Virtual, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "./ProductSlider.css";
const ProductSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  // Create array with 500 slides
  const slides = [
    { index: 1, img: "/1.png", title: `Highest \n  cashback` },
    {
      index: 2,
      img: "/2.png",
      title: `Top \n Deals`,
    },
    { index: 3, img: "/3.png", title: `Fruits &  \nvegetables` },
    {
      index: 4,
      img: "/4.png",
      title: `Diary & \n Eggs`,
    },
    { index: 5, img: "/5.png", title: `Cold \n  Beverages ` },
    {
      index: 6,
      img: "/6.png",
      title: `Fresh \nBakery`,
    },
    {
      index: 7,
      img: "/7.png",
      title: `Frozen \nFood`,
    },
    {
      index: 8,
      img: "/8.png",
      title: `Grocery
`,
    },
    { index: 9, img: "/9.png", title: `Baby \n Products` },
    { index: 10, img: "/1.png", title: `Highest \n  cashback` },
    {
      index: 11,
      img: "/2.png",
      title: `Top \n Deals`,
    },
    { index: 12, img: "/3.png", title: `Fruits &  \nvegetables` },
    {
      index: 13,
      img: "/4.png",
      title: `Diary & \n Eggs`,
    },
    { index: 14, img: "/5.png", title: `Cold \n  Beverages ` },
    {
      index: 15,
      img: "/6.png",
      title: `Fresh \nBakery`,
    },
    {
      index: 16,
      img: "/7.png",
      title: `Frozen \nFood`,
    },
    {
      index: 17,
      img: "/8.png",
      title: `Grocery
`,
    },
    { index: 18, img: "/9.png", title: `Baby \n Products` },
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={9}
        centeredSlides={false}
        spaceBetween={50}
        navigation={true}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={slideContent.img}
                alt="banner"
                width={66}
                height={66}
              />
              <p className="font-semibold text-sm py-2">{slideContent.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
