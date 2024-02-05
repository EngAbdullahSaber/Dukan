import Image from "next/image";
import React from "react";

import MenuList from "./MenuList";

const Navbar = () => {
  return (
    <>
      <div className="first__navbar  hidden  lg:block  w-full  p-3  bg-[#F9F9F9]">
        <div className="container mx-auto flex lg:flex-row sm:flex-col items-center justify-between">
          <div className="right__side flex py-2 ">
            <div className="flex mx-4">
              <img
                src="/Group.png"
                height={24}
                width={44}
                alt="Delivery"
                className="mx-2"
              />
              <p className="font-semibold text-xs">
                Fast Delivery & <br />
                Free delivery
              </p>
            </div>
            <div className="flex mx-4">
              <Image
                src="/storefronthome-icone.png"
                height={24}
                width={24}
                alt="products"
                className="mx-2"
              />
              <p className="font-semibold text-xs">
                + 500 offline stores with <br /> high quality products
              </p>
            </div>
            <div className="flex mx-4">
              <Image
                src="/Active.png"
                height={24}
                width={24}
                alt="cashback "
                className="mx-2"
              />
              <p className="font-semibold text-xs">
                Save more by returning <br /> cashback for each order
              </p>
            </div>
          </div>
          <div className="left__side flex py-2  ">
            <p className="font-semibold text-base pr-8">AR | EN</p>
            <p className="font-semibold text-base"> +966 55 80 2 88 55</p>
          </div>
        </div>
      </div>
      <div className="second__navbar hidden  lg:block   w-full bg-white  p-3 ">
        <div className="container mx-auto flex lg:flex-row sm:flex-col items-center justify-between">
          <div className="right__side flex py-2 ">
            <div className="flex mx-4">
              <Image
                src="/logo.png"
                height={45}
                width={149}
                alt="Delivery"
                className="mx-2"
              />
            </div>

            <div className="flex mx-4 relative">
              <input
                type="text"
                className="bg-white h-auto rounded-3xl  br-[#B0B0B0] border-2 w-72"
              />
              <Image
                src="/search-line (7) 1.png"
                height={20}
                width={20}
                alt="search"
                className=" absolute left-3 xl:top-3 lg:top-5 sm:top-6"
              />
              <Image
                src="/barcode.png"
                height={20}
                width={20}
                alt="search"
                className=" absolute right-3 xl:top-3 lg:top-5 sm:top-6"
              />
            </div>
            <div className="flex mx-4 items-center">
              <Image
                src="/location.png"
                height={24}
                width={24}
                alt="location "
              />
              <p className="font-semibold text-xs">
                <span className="font-semibold text-xs text-gray-400">
                  Delivery to:{" "}
                </span>{" "}
                <br />
                Sulaimaniyah Dist, 455 Riyad Saud...
                <br /> (30-45 mins)
              </p>
              <button className="bg-none text-[#FF4300] font-semibold text-base underline  px-3">
                Change
              </button>
            </div>
          </div>
          <div className="left__side flex justify-between py-2  ">
            <div className="flex flex-col bg-[#F7DE6F] px-5 rounded-br-lg p-2 items-center ">
              <p className="font-normal sm:text-base xl:text-base lg:text-xs ">
                Your Cashback
              </p>
              <div className="flex items-center">
                <Image
                  src="/vector.png"
                  alt="cashback"
                  width={16}
                  height={16}
                />
                <p className="font-bold sm:text-sm xl:text-sm lg:text-xs">
                  SAR 124,00
                </p>
              </div>
            </div>
            <ul className="flex items-center">
              <li className="px-3">
                <Image src="/notification.png" alt="" width={24} height={24} />
              </li>
              <li className="px-3">
                <Image src="/user.png" alt="" width={24} height={24} />
              </li>
              <li className="px-3">
                <Image src="/favourite.png" alt="" width={24} height={24} />
              </li>
              <li className="px-3">
                <Image src="/cart.png" alt="" width={32} height={32} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MenuList />
    </>
  );
};

export default Navbar;
