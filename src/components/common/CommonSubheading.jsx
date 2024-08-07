import React from "react";

const CommonSubheading = ({ subHeading }) => {
  return (
    <p className="border h-[34px] leading-[140%]  border-pink inline-block px-5 pb-2 pt-[5px] text-white font-syne text-base font-normal text-center rounded-[150px] bg-[#D0215D1A]">
      {subHeading}
    </p>
  );
};

export default CommonSubheading;
