import Image from "next/image";
import Link from "next/link";
import CommonSubheading from "./common/CommonSubheading";
import { TeamSocialMediaLinks, teamCardDetails } from "./common/Helper";
import { TeamEllipse } from "./common/Icons";

export default function Team() {
  // Mapping through teamCardDetails to create team member cards
  const teamCard = teamCardDetails.map((member, index) => (
    <div
      key={index}
      data-aos="zoom-out"
      className="lg:w-1/3 md:w-1/2 w-full px-3 flex justify-center"
    >
      <div
        className="w-full rounded-[10px] border border-solid border-grey mt-6 hover:border-pink  duration-500 
      teamCardBg lg:p-[30px_0_30px_30.5px] md:p-5 p-4 max-w-[364px]"
      >
        <div className="flex gap-6 items-center">
          <Image
              loading="lazy"
            src={member.profile}
            alt="team1"
            width={100}
            height={100}
            className="lg:w-[100px] lg:h-[100px] md:w-[80px] w-[60px] md:h-[80px] h-[60px]"
          />
          <div>
            <h4 className="text-white font-syne font-medium lg:text-2xl sm:text-xl text-lg leading-[140%] pb-[6px]">
              {member.name}
            </h4>
            <p className=" text-white font-syne text-base leading-[140%] font-normal pb-2.5">
              {member.post}
            </p>
            <div className="flex gap-3">
               {TeamSocialMediaLinks.map((link, i) => (
                <Link
                  key={i}
                  aria-label={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  className="hover:scale-110 duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="pb-20 md:pb-[100px] lg:pb-[100px] xl:pb-[140px] lg:pt-[70px] md:pt-[100px] pt-20 relative z-[1] overflow-x-clip">
      <div className="container max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3">
        <div data-aos="fade-down" className=" flex justify-center mb-2.5 ">
          <CommonSubheading subHeading="Team" />
        </div>
        <h2 className=" text-white text-3xl lg:text-5xl md:text-4xl font-syne text-center !leading-[140%] mb-4">
          Meet Our Team
        </h2>
        <p className="text-white font-syne text-base  leading-[140%] text-center lg:mb-9 sm:mb-10 mb-7 opacity-90 max-w-[640px] mx-auto">
          Maximize your potential gains by leveraging smaller capital
          investments to take larger positions in over 20 diverse markets.
        </p>
        <div className="flex flex-row flex-wrap -mx-3 max-lg:px-4 max-sm:px-0 relative z-30">
          {/* Team Member Cards */}
          {teamCard}
        </div>
      </div>
      <div className="w-[285px] h-[285px] bg-purple opacity-40 blur-[120px] rounded-full absolute top-[10%] left-[-5%] z-[-1] max-sm:hidden"></div>

      <span className="absolute right-0 top-[-11%] z-[-1] max-sm:hidden">
        <TeamEllipse />
      </span>
    </div>
  );
}
