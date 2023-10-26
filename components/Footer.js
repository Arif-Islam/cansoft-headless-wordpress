import React from "react";

const Footer = ({ footer }) => {
  return (
    <div className="md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto mt-2 px-[15px]">
      <hr />
      <p className="my-4 text-[#212529]">{footer?.title}</p>
    </div>
  );
};

export default Footer;
