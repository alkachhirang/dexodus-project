import CommonSubheading from "./common/CommonSubheading";
import { RoadmapDetails } from "./common/Helper";
import { RoadmapVector } from "./common/Icons";

const Roadmap = () => {
  return (
    <div id="roadmap" className="relative overflow-x-clip bg_roadmap">
      <div className="absolute bg-purple animate-pulse -bottom-[20%] -left-[15%] blur-[50px] lg:flex h-[285px] w-[285px] opacity-[20%] pointer-events-none hidden"></div>
      <div className="absolute bg-pink animate-pulse xl:-top-[20%] top-0 -right-[15%] blur-[50px] lg:flex xl:h-[285px] h-[200px] w-[200px] xl:w-[285px] opacity-[20%] pointer-events-none hidden"></div>
      <span className="absolute h-[365px] left-[-100px] top-0 pointer-events-none hidden md:flex">
        <RoadmapVector />
      </span>
      <div
        id="Roadmap"
        className="container relative z-30 max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 pt-20 md:pt-[100px] lg:pt-[140px] lg:pb-[70px] md:pb-[100px] pb-20"
      >
        <div data-aos="fade-down" className="flex justify-center">
          <CommonSubheading subHeading="Roadmap" />
        </div>
        <h2 className="text-3xl lg:text-5xl md:text-4xl !leading-[140%] text-white font-syne text-center pb-4 pt-[10px]">
          Strategic Development Roadmap
        </h2>
        <p className="text-white opacity-90 text-base font-normal font-syle leading-[140%] text-center pb-3 lg:pb-7 xl:pb-[60px] max-w-[640px] mx-auto"> 
          Our roadmap reflects our commitment to continuous improvement,
          emphasizing the empowerment of our community.
        </p>
        <div
          className={`lg:grid lg:grid-cols-4 overflow-hidden lg:pt-3 gap-6 relative after:absolute after:flex after:lg:w-[80%] after:lg:border-t-[3px] after:max-lg:border-l-[3px] after:max-lg:max-h-[735px] after:max-lg:h-full after:max-lg:hidden after:border-dashed after:border-white after:top-32 after:lg:top-7 max-lg:justify-center after:z-[2] after:left-[17%] after:lg:left-[50%] after:lg:translate-x-[-50%]`}
        >
          {RoadmapDetails.map((data, index) => {
            return (
              <div
                key={index}
                className={`max-w-[700px] lg:max-w-[267px] lg:block flex flex-row relative after:absolute after:border-dashed after:border-t-[3px] after:border-l-[3px] after:lg:w-[0px] after:lg:border-t-0 after:lg:border-l-0 after:border-white after:md:top-28 after:top-24 xxs:after:left-[3%] after:left-[5%] items-center !w-full after:md:h-[240px] after:sm:h-[200px] after:z-20 after:h-[120px] max-[500px]:after:left-[6%] after:w-[2px] mx-auto ${
                  index === 3
                    ? " after:border-none"
                    : "after:border-t-[3px] after:border-l-[3px]"
                }`}
              >
                <div className="bg-darkblack relative z-30 mx-auto h-[35px] w-[50px] lg:w-[35px] border border-purple lg:rotate-45 shadow-[0px_0px_10px_0px_#A020F0B2] flex justify-center">
                  <p className="text-2xl font-medium font-syne text-white leading-[116%] lg:-rotate-45 text-center">
                    {index + 1}
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index + 1}00`}
                  className="lg:min-h-[222px] md:min-h-[200px] sm:min-h-[160px] min-h-[120px] w-full after:lg:w-full after:lg:h-[3px] after:h-full after:w-[3px] after:hover:w-full after:lg:hover:h-full after:bg-purple after:z-[3] after:flex after:absolute relative after:top-0 after:left-0 after:duration-300 ms-4 min-[400px]:ms-8 md:ms-20 lg:ms-0 pt-3 sm:pt-5 px-4 sm:px-5 bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0)] sm:mt-10 mt-7 lg:mt-12"
                >
                  <p className="lg:text-3xl md:text-2xl text-xl font-medium font-syne text-white leading-[140%] pb-3 relative z-10">
                    Q{index + 1} 2024
                  </p>
                  <div className="flex gap-3 pl-2">
                    <div className="h-1 w-1 bg-white my-auto"></div>
                    <p className="text-white text-base sm:text-lg font-syne font-medium leading-[133%] max-w-[199px] relative z-10">
                      {data.point1}
                    </p>
                  </div>
                  <div className="flex gap-3 pl-2 mt-3">
                    <div className="h-1 w-1 bg-white my-auto"></div>
                    <p className="text-white text-base sm:text-lg font-syne font-medium leading-[133%] max-w-[199px] relative z-10">
                      {data.point2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
