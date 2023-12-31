import { ChevronsRight } from "lucide-react";
import React, { useState } from "react";

const Card = ({ post }) => {
  const desc = post?.excerpt?.replace(/<[^>]+>/g, "").trim();
  return (
    <div className="w-[350px] md:w-[219px] lg:w-[299px] xl:w-[359px] mx-auto flex flex-col items-start justify-start">
      <h1 className="text-[32px] font-medium  text-[#212529] mb-2">
        {post.title}
      </h1>

      <p className="text-[#212529] mb-4">{desc}</p>

      <button className="flex items-center justify-center w-[132px] h-[38px] bg-[#6c757d] hover:bg-[#5A6268] text-white rounded-md">
        <p>View details</p> <ChevronsRight className="w-4 h-4 mt-1 ml-1" />
      </button>
    </div>
  );
};

export default Card;
