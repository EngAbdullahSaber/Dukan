"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import "./ProductSlider.css";
const CashBackSliderr = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="container max-auto">
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
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
    </div>
  );
};

export default CashBackSliderr;
