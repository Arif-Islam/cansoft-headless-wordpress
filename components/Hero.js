import { ChevronsRight } from "lucide-react";
import React from "react";

const Hero = ({ heroPost }) => {
  const desc = heroPost?.excerpt?.replace(/<[^>]+>/g, "").trim();
  return (
    <div className="bg-[#e9ecef] rounded-sm py-10 md:py-[74px] px-4 md:px-8 ">
      <div className="md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto px-[15px]">
        <h1 className="text-7xl font-light  text-[#212529] mb-3">
          {heroPost?.title}
        </h1>
        {/* <p
          dangerouslySetInnerHTML={{ __html: heroPost?.excerpt }}
          className="text-[#212529] mb-4"
        ></p> */}
        <p className="text-[#212529] mb-4">{desc}</p>
        <button className="flex items-center justify-center w-[150px] h-12 bg-[#007bff] hover:bg-[#0069D9] text-[20px] text-white rounded-md ">
          <p>Learn more</p> <ChevronsRight className="w-4 h-4 mt-1 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
