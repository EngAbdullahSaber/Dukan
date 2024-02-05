"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MenuList = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 2, text: "Top Deals" },
    { id: 3, text: "Fruits & Vegetables" },
    { id: 4, text: "Diary & Eggs" },
    { id: 5, text: "Beverages  & Drinks" },
    { id: 6, text: "  Fresh Bakery" },
    { id: 7, text: "Baby Products" },
    { id: 8, text: "Household" },
  ];
  return (
    <div className=" border-b-2 lg:bg-white xs:bg-[#007460]">
      <div className="lg:bg-white xs:bg-[#007460] flex items-center justify-around h-24 mx-auto px-4 text-black">
        {/* Logo */}
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex">
          <li className=" flex items-center py-4 px-3 text-sm font-semibold hover:bg-[#00df9a] rounded-xl  cursor-pointer duration-300 hover:text-black">
            All categories
            <Image
              src="/arrow-down-s-line (3) 1.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </li>{" "}
          <li className="py-4 px-3 flex items-center hover:bg-[#00df9a] rounded-xl text-sm font-semibold cursor-pointer duration-300 hover:text-black">
            <Image
              src="/vector.png"
              alt="cash"
              width={16}
              height={16}
              className="m-1"
            />{" "}
            Highest cashaback
          </li>
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-4 px-3 hover:bg-[#00df9a] rounded-xl text-sm font-semibold cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block text-white lg:hidden z-10">
          {nav ? (
            <AiOutlineClose className="relative top-40" size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div className="flex mr-8 xs:block lg:hidden">
          <Image
            src="/footer-logo.png"
            height={45}
            width={149}
            alt="Delivery"
            className="mx-2"
          />
        </div>
        <div className="flex items-center xs:flex lg:hidden bg-[#F7DE6F] px-5 rounded-br-lg p-2  flex-row mr-8">
          <Image src="/vector.png" alt="cashback" width={16} height={16} />
          <p className="font-bold sm:text-sm xl:text-sm lg:text-xs  ">
            SAR 124,00
          </p>
        </div>{" "}
        <Image
          src="/cart-white.png"
          alt=""
          width={32}
          height={32}
          className="xs:block lg:hidden mr-8"
        />
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c0b0b5e] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <li className="p-4 border-b text-sm font-semibold border-gray-600 hover:bg-[#00df9a] rounded-xl  cursor-pointer duration-300 hover:text-black">
            All categories
          </li>{" "}
          <li className="p-4 border-b hover:bg-[#00df9a] border-gray-600 rounded-xl text-sm font-semibold cursor-pointer duration-300 hover:text-black">
            Highest cashaback
          </li>
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl text-sm font-semibold hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className=" xs:flex lg:hidden pb-8  justify-around items-center">
        <div className="flex mx-4 relative">
          <input
            type="text"
            className="bg-white h-10 rounded-3xl  br-[#B0B0B0] border-2 w-72"
          />
          <Image
            src="/search-line (7) 1.png"
            height={20}
            width={20}
            alt="search"
            className=" absolute left-3 top-2"
          />
          <Image
            src="/barcode.png"
            height={20}
            width={20}
            alt="search"
            className=" absolute left-64 top-2 "
          />
        </div>
        <Image
          src="/notification-white.png"
          height={20}
          width={20}
          alt="search"
          className=""
        />
      </div>
    </div>
  );
};

export default MenuList;
