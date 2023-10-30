import Link from "next/link";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const DesktopMenu = ({ menuItems, dropdown, setDropdown }) => {
  return (
    <div className="hidden md:block space-x-4">
      {menuItems?.nodes?.map((menu) => {
        if (menu.childItems?.nodes?.length === 0) {
          return (
            <Link
              key={menu.id}
              href={menu.url}
              className={`${menu.label === "Home" && "text-white"} ${
                menu.label === "Link" &&
                "text-[rgba(255,255,255,.5)] hover:text-[rgba(255,255,255,.7)]"
              } ${
                menu.label === "Disabled" && "text-[#6b7072] cursor-default"
              } `}
            >
              {menu.label}
            </Link>
          );
        } else {
          return (
            <div key={menu.id} className=" relative inline-block text-white">
              <div
                className="flex items-center text-[rgba(255,255,255,.5)] hover:text-white"
                onClick={() => setDropdown(!dropdown)}
              >
                <button className="">{menu.label}</button>
                <MdArrowDropDown></MdArrowDropDown>
              </div>
              <ul
                className={`${
                  dropdown ? "block" : "hidden"
                } absolute space-y-1 py-2 mt-[10px] rounded-md  border-[1px] border-[rgba(0,0,0,.15)] bg-white text-[#212529] w-[200px] `}
              >
                {menu.childItems?.nodes?.map((item) => (
                  <li key={item.id} className="hover:bg-gray-100 py-1 ">
                    <Link href={item.url} className="pl-4">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DesktopMenu;
