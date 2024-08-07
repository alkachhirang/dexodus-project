import { useState } from "react";
import Link from "next/link";
import { DiscordIcon, LogoIcon, TwitterdIcon } from "./common/Icons";
import { footerLinks } from "./common/Helper";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // State to manage email input value
  const [email, setEmail] = useState("");

  // Handle form submission for email subscription
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email address.");
    } else {
      // Add your subscribe logic here
      console.log("Subscribed with:", email);
      setEmail(""); // Clear the input field after subscription
    }
  };
  return (
    <div className="bg-onxy mt-[-2px] pt-[48px] sm:pt-[58px] md:pt-[70px]">
      <div className="container mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 max-w-[1164px]">

        <div className="flex lg:flex-row flex-col justify-between ">
            <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start ">
               <Link aria-label="Home" href="#">
                <LogoIcon />
              </Link>
              <p className="font-syne text-base mt-4 leading-[137%] text-white opacity-90 font-normal max-w-[374px] text-center lg:text-start">
                Your gateway to gasless trading with stable fees, trading across
                multiple markets, copy trading, singles transactions for a
                CEX-like experience and competitive rankings.
              </p>
              <div className="mt-5 sm:mt-[30px] mb-[30px] lg:mb-[70px] flex items-center gap-4">
                <Link
                  aria-label="twitter"
                  href="https://x.com/home"
                  target="blank"
                  className="transition-all duration-300 ease-in-out hover:translate-y-[-7px]"
                >
                  <TwitterdIcon />
                </Link>
                <Link
                  aria-label="discode"
                  href="https://discord.com"
                  target="blank"
                  className="transition-all duration-300 ease-in-out hover:translate-y-[-7px]"
                >
                  <DiscordIcon />
                </Link>
              </div>
            </div>
       
        <div className="flex max-w-[580px] w-full lg:mb-0 mb-10 lg:justify-between justify-center lg:gap-0 gap-10 xxs:flex-row flex-col items-start lg:mx-0 mx-auto">
            <ul className="mx-auto xxs:mx-0">
              <li className="mb-3 sm:mb-[20px] font-syne text-base leading-[137%] text-white opacity-90 font-semibold">
                Resources
              </li>
              {footerLinks.map((value, index) => (
                <li
                  key={index}
                  className="mb-3 sm:mb-[14px] xxs:text-start text-center"
                >
                  <Link
                    aria-label="title"
                    href={value.url}
                    className="font-syne text-sm sm:text-start text-center sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal whitespace-nowrap"
                  >
                    {value.title}
                  </Link>
                </li>
              ))}
            </ul>
          <div className="flex justify-end w-full">
            <div className="max-w-[350px] sm:max-w-[302px] w-full mx-auto xxs:mx-0">
              <p className="mb-[20px] font-syne text-base leading-[137%] xxs:text-start text-center text-[#e7e7e7] font-semibold">
                Sign Up for Email Updates
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-between pr-2 bg-[#242424] !rounded-[115px]"
              >
                <input
                  id="footer_input"
                  type="email"
                  placeholder="Your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 sm:p-4 pr-2 placeholder:text-sm placeholder:text-[#bdbdbd] placeholder:font-normal bg-[#242424] max-w-[130px] sm:max-w-[175px] !rounded-[115px] text-white !outline-none"
                  required
                />
                <button
                  aria-label="subscribe"
                  type="submit"
                  className="text-sm sm:text-base font-syne text-white font-semibold py-[6px] h-[34px] sm:h-[44px] shadow-[0px_8px_20px_0px_#D0215D66] px-3 sm:px-[20.1px] button-gradient rounded-[130px]"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-[14px] font-syne xxs:text-start text-center text-sm leading-[137%] text-white opacity-70 font-normal max-w-[298px] xxs:mx-0 mx-auto">
                Sign up with your email address to receive news and updates
              </p>
            </div>
          </div>
        </div>
            
          
         
       
        </div>
         <div className="py-3 sm:py-5 border-t-[#414141] border-t-[1px] flex flex-col sm:flex-row items-center justify-between">
          <p className="font-syne text-white opacity-70 font-normal text-xs leading-[135%]">
            Copyright ©{currentYear} Dexodus. All rights reserved.
          </p>

          <div className="flex items-center gap-[14px]">
            <p className="font-syne text-white opacity-70 font-normal text-xs leading-[135%] mt-2 sm:mt-0 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer">
              Privacy Policy
            </p>
            <div className="px-[14px] mt-2 sm:mt-0 text-white opacity-70">|</div>
            <p className="font-syne text-white opacity-70 font-normal text-xs leading-[135%] mt-2 sm:mt-0 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer">
              Terms and Conditions
            </p>
          </div>
          
          </div>
      </div>
      
     </div>
  );
};

export default Footer;
