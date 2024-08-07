import React, { useEffect, useState, useRef } from "react";
import { navLinksDetails } from "./Helper";
import Link from "next/link";
import Image from "next/image";
import CommonBtn from "./CommonBtn";
import { LogoHero, DropdownIcon } from "./Icons";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (openNav) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [openNav]);

  return (
    <div className="bg-darkblack border-b-[1px] border-b-grey sticky top-0 z-50">
      <div className="container mx-auto xl:max-w-[1164px] xl:px-3 lg:px-5 sm:px-4 px-3">
        <div className="flex justify-between items-center py-[12px] lg:py-0">
          <Link href={"/"} aria-label="hero logo">
            <span className="md:w-[67px] md:h-[67px] w-[55px] h-[55px]">
              <LogoHero />
            </span>
          </Link>
          <ul
            className={`${
              openNav ? "left-0" : "left-[-100%]"
            } flex items-center gap-[35px] lg:gap-3 max-lg:bg-darkblack lg:flex-row max-lg:justify-center max-lg:flex-col top-0 max-lg:min-h-screen max-lg:w-full max-lg:fixed z-40 transition-all duration-300 ease-linear`}
          >
            {navLinksDetails.map((data, index) => (
              <div key={index} ref={index === 4 ? dropdownRef : null} className="relative group">
                <li className="relative">
                  <a
                    href={data.url}
                    className="text-white cursor-pointer flex items-center lg:py-[35px] lg:px-[17px] bg-transparent lg:group-hover:bg-gradient-to-l from-[#d0215d1a] to-[#d0215d00] leading-2sm text-base font-syne font-normal after:h-[2px] after:w-[0] group-hover:after:w-full after:bg-pink after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] group-hover:after:left-[0] after:bottom-0 after:rounded-[20px] transition-all duration-300 ease-linear"
                  >
                    {data.title}
                    {index === 3 && (
                      <Image
                        loading="lazy"
                        src="/assets/images/heroImages/docsImg.webp"
                        alt="Image"
                        width={10}
                        height={4}
                        className="ms-[6px]"
                      />
                    )}
                    {index === 4 && (
                      <span className="ms-[6px] mt-1 group-hover:rotate-0 rotate-180 transition-all duration-300 ease-in-out">
                        <DropdownIcon />
                      </span>
                    )}
                  </a>
                </li>
                {index === 4 && (
                  <ul
                    className="transition-all duration-300 ease-in-out bg-black absolute w-[140px] flex sm:p-6 p-4 lg:mt-0 mt-1 flex-col gap-3 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100"
                  >
                    {data.SocialLinks.map((value, index) => (
                      <li
                        key={index}
                        className="text-white font-semibold hover:text-pink transition-all duration-300 ease-in-out font-syne text-base leading-2sm cursor-pointer"
                      >
                        <Link onClick={() => setOpenNav(false)} href={value.url} target="blank">
                          {value.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
          <div className="lg:hidden block mt-[8px]">
            <CommonBtn text="Trade Now" />
          </div>
          <div className="lg:flex gap-6 hidden">
            <CommonBtn text="Trade Now" />
          </div>
          <div className="flex items-center relative lg:hidden cursor-pointer">
            <div className="absolute lg:static right-0 sm:top-[-10px] top-[-13px]">
              <div
                onClick={() => setOpenNav(!openNav)}
                className="lg:hidden flex w-[40px] h-[26px] justify-between items-center z-40 flex-col relative"
              >
                <span
                  className={`${
                    !openNav && "!rotate-0 !translate-y-0"
                  } bg-white h-[4px] w-full rotate-[50deg] translate-y-[22px] rounded-[10px] transition-all ease-linear duration-300`}
                ></span>
                <span
                  className={`${
                    !openNav && "!block"
                  } bg-white h-[4px] w-full hidden transition-all duration-300 ease-linear rounded-[10px]`}
                ></span>
                <span
                  className={`${
                    !openNav && "!rotate-0 !translate-y-0"
                  } bg-white h-[4px] w-full rotate-[-50deg] translate-y-[10%] transition-all duration-300 ease-linear rounded-[10px]`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
