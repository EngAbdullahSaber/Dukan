import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#272727]    ">
        <div className="mx-auto  px-4 pb-6 pt-4 sm:px-6 lg:px-8">
          <div className="mt-4 grid grid-cols-1 gap-8s border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-8">
            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <div className="mx-auto mt-8 justify-center flex flex-col items-center ">
                <Image
                  src="/footer-logo.png"
                  width={174}
                  height={52}
                  alt="logo"
                />
                <p className="text-base font-bold text-[#fff] pb-2 pt-5">
                  Follow us
                </p>
                <div className="flex ">
                  <Image
                    src="/facebook.png"
                    width={24}
                    height={24}
                    alt="facebook"
                    className="mr-2"
                  />
                  <Image
                    src="/_Instagram.png"
                    width={24}
                    height={24}
                    alt="_Instagram"
                    className="mx-2"
                  />{" "}
                  <Image
                    src="/_Twitter.png"
                    width={24}
                    height={24}
                    alt="_Twitter"
                    className="mx-2"
                  />
                  <Image
                    src="/_Snapchat.png"
                    width={24}
                    height={24}
                    alt="_Snapchat"
                    className="mx-2"
                  />
                  <Image
                    src="/_YouTube.png"
                    width={24}
                    height={24}
                    alt="_YouTube"
                    className="mx-2"
                  />
                  <Image
                    src="/_TikTok.png"
                    width={24}
                    height={24}
                    alt="_TikTok"
                    className="mx-2"
                  />
                </div>
                <div className="flex py-8">
                  <Image
                    src="/_WhatsApp.png"
                    width={24}
                    height={24}
                    alt="_WhatsApp"
                  />
                  <p className="px-2 font-semibold text-base text-white">
                    {" "}
                    +966 55 80 2 88 55
                  </p>
                </div>
              </div>
            </div>
            <div className=" pt-8 sm:text-left">
              <p className="text-md text-center font-bold text-gray-300">
                About Company
              </p>

              <ul className="mt-3 text-center space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    {" "}
                    News{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Store locations{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>{" "}
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Sell with us{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center pt-8 sm:text-left">
              <p className="text-md text-center font-bold text-gray-300">
                Customer support
              </p>

              <ul className="mt-3 text-center space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Contact Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray/75"
                    href="/"
                  >
                    {" "}
                    Returns & Exchanges{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center pt-8 sm:text-left">
              <p className="text-md text-center font-bold text-gray-300">
                Services
              </p>

              <ul className="mt-3 text-center space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Services & Warranty
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    {" "}
                    Shipping & Delivery{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center pt-8 sm:text-left">
              <p className="text-md text-center font-bold text-gray-300">
                Our programs
              </p>

              <ul className="mt-3 text-center space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Cashback programs
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Gift Cards
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="/"
                  >
                    Gift Cards{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center pt-3 sm:text-left  lg:col-span-2">
              <p className="text-md sm:text-center font-bold text-gray-300 md:text-right pe-14 pb-6 ">
                AR
                <span className="text-white"> | EN</span>
              </p>

              <p className=" text-gray-300 font-medium text-sm text-center">
                Avaliable paument methods
              </p>
              <div className="flex justify-center items-center pt-6">
                <Image
                  src="/master-card.png"
                  width={27}
                  height={16}
                  alt="logo"
                  className="mx-2"
                />
                <Image
                  src="/visa.png"
                  width={33}
                  height={10}
                  alt="logo"
                  className="mx-2"
                />
                <Image
                  src="/amirecian-express.png"
                  className="mx-2"
                  width={17}
                  height={16}
                  alt="logo"
                />
                <Image
                  src="/apple-pay.png"
                  width={27}
                  height={12}
                  alt="logo"
                  className="mx-2"
                />
              </div>
              <div className="flex justify-center items-center p-3">
                <Image
                  src="/mada.png"
                  className="mx-2"
                  width={32}
                  height={11}
                  alt="logo"
                />
                <Image
                  src="/cash.png"
                  width={46}
                  height={16}
                  alt="logo"
                  className="mx-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-6 xs:flex xs:items-center xs:flex:col xs:justify-between pb-3">
          <div className="container mx-auto flex xs:flex-col md:flex-row justify-between">
            <p className="text-center text-sm text-white sm:text-left mt-2">
              support@dukan.me{" "}
            </p>

            <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <Image
                src="/apple-store.png"
                width={114}
                height={38}
                alt="apple-store"
              />
              <Image
                src="/Google-Play.png"
                width={114}
                height={38}
                alt="logo"
              />
              <Image src="/AppGallery.png" width={114} height={38} alt="logo" />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white  xs:block md:hidden">
        <div className="flex justify-around">
          <div className="flex flex-col justify-between items-center">
            <Image src="/Rectangle 1.png" width={40} height={3} alt="line" />
            <Image src="/Group 11163.png" width={24} height={24} alt="home" />
            <p className="text-[#FF4300] font-semibold text-[10px]">Home</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="/dashboard-square.png"
              width={24}
              height={24}
              alt="categories"
              className="my-2"
            />
            <p className="font-semibold text-[10px] text-[#000]">Categories</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="/discount-tag.png"
              width={24}
              height={24}
              alt="categories"
              className="my-2"
            />
            <p className="font-semibold text-[10px] text-[#000]">Deals</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="/Cart-footer.png"
              width={24}
              height={24}
              alt="categories"
              className="my-2"
            />
            <p className="font-semibold text-[10px] text-[#000]">Carts</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="/user-footer.png"
              width={24}
              height={24}
              alt="categories"
              className="my-2"
            />
            <p className="font-semibold text-[10px] text-[#000]">Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
