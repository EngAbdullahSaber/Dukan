"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarRatings from "react-star-ratings";
import "./HighProduct.css";

const HighProduct = ({ delivary, index }) => {
  const url =
    "https://innova.products.aait-d.com/api/website/home?guest_token=ZZoEhLlFeEs6rSh9UT9nUFgVgLgR762J1VJJcpZu9wYVdqtDtzSvFAewKcMgNFD2";

  const [data, setData] = useState([]);
  const [sizeWindow, setSizeWindow] = useState("");
  const [isLoading, setLoading] = useState(false);
  async function fetchData() {
    const response = await fetch(url);

    response.json().then((response) => {
      setData(response.data[index].content);
      setLoading(true);
    });
  }
  useEffect(() => {
    fetchData();
    setSizeWindow(window.innerWidth);
  }, []);
  console.log(sizeWindow);

  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="container mx-auto my-5">
      <h2
        className="text-[#070706] font-bold text-2xl 
      pt-8"
      >
        Highest Cashback{" "}
      </h2>
      <div className="mx-auto block text-right">
        <button
          onClick={prevHandler}
          className=" py-1 px-1  border-2 rounded-md border-[#B0B0B0] mx-1 "
        >
          <ArrowBackIosIcon className="text-[#B0B0B0] " />
        </button>
        <button
          onClick={nextHandler}
          className=" py-1 px-1  border-2 rounded-md border-[#B0B0B0] mx-1 "
        >
          <ArrowForwardIosIcon className="text-[#00A9A2]  " />
        </button>
      </div>
      <Swiper
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
        }}
        centeredSlides={false}
        spaceBetween={50}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {data.length > 0 ? (
          data.map((item, index) => {
            console.log(item);
            return (
              <SwiperSlide key={index}>
                <div className="h-fit">
                  <div className="flex flex-row justify-between  ">
                    <div className="px-2 py-1 text-white bg-[#FF8540] flex rounded-br-xl">
                      <Image
                        src="/fire.png"
                        alt="fire"
                        width={20}
                        height={20}
                      />
                      <span className="mx-1 text-base font-semibold">
                        Top deal
                      </span>
                    </div>
                    <Image
                      src="/favourite.png"
                      alt="banner"
                      width={32}
                      height={32}
                    />
                  </div>
                  <Image
                    src={item.image}
                    alt="banner"
                    width={504}
                    height={232}
                  />
                  <div className=" bg-[#007460] p-2 w-fit rounded-r-lg rounded-l-sm my-3 ">
                    <Image
                      src="/plus.png"
                      alt="banner"
                      width={14}
                      height={14}
                    />
                  </div>
                  <div className="flex sm:flex-col justify-between items-center lg:flex-row">
                    <StarRatings
                      rating={3.5}
                      starRatedColor="yellow"
                      numberOfStars={5}
                      name="rating"
                      starDimension="24px"
                      className="h-12 w-12"
                    />
                    <div className="flex flex-row bg-[#F7DE6F] justify-center  rounded-br-lg p-2 my-2 items-center ">
                      <Image
                        src="/vector.png"
                        alt="cashback"
                        width={16}
                        height={16}
                      />
                      <p className="font-semibold text-base text-center ">
                        {item.currency}
                        {item.price}
                      </p>
                    </div>
                    <div className="mx-auto">
                      {" "}
                      <Image
                        src="/list_add_check.png"
                        alt="cashback"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <h3 className="text-left p-1">
                    <span className="font-bold text-xl "> {item.price}</span>
                    <span className="font-bold text-lg"> {item.currency}</span>
                  </h3>
                  <p className="font-normal text-sm text-left p-1">
                    Pasta Reggia — Penne ziti, 500g
                  </p>
                  <p className="font-bold text-md text-left p-1">
                    More information
                  </p>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p>loading....</p>
        )}
      </Swiper>
    </div>
  );
};

export default HighProduct;
