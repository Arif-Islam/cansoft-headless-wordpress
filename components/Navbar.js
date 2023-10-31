import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar({ menuItems }) {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    setDropdown(false);
  };

  return (
    <div className="">
      <nav className={` bg-[#343A40] h-[56px] md:h-[70px] lg:h-[56px]`}>
        <div className="px-4 h-full flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <Link href="#" className="text-[20px]  text-white mr-6">
              Navbar
            </Link>

            <DesktopMenu
              menuItems={menuItems}
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
          </div>

          <div
            onClick={toggleMenu}
            className="md:hidden border-[1px] border-[rgba(255,255,255,.1)] px-2 py-1 rounded-[4px] hover:border-yellow-500 "
          >
            <Menu className="w-[30px] h-[30px] text-[rgba(255,255,255,.5)]" />
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              className="h-[38px] w-[207px] pl-3 mr-2 border-[1px] border-[#ced4da] focus:outline-none focus:border-blue-600 rounded-[4px] bg-white text-[#495057]"
              placeholder="Search"
            />
            <button className="text-[#28a745] border-[1px] border-[#28a745] hover:text-white hover:bg-[#28a745] h-[38px] w-[73px] rounded-[4px]">
              Search
            </button>
          </div>
        </div>
      </nav>
      {menu && (
        <div
          id="nav"
          className={`${
            dropdown ? "h-[345px]" : "h-[215px]"
          } bg-[#343A40]  -mt-1 w-full pr-4 `}
        >
          <MobileMenu
            menuItems={menuItems}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />

          <div className="pl-4 mt-4">
            <input
              type="text"
              className="h-[38px] w-[207px] pl-3 mr-2 border-[1px] border-[#ced4da] focus:outline-none focus:border-blue-600 rounded-[4px] bg-white text-[#495057]"
              placeholder="Search"
            />
            <button className="text-[#28a745] border-[1px] border-[#28a745] hover:text-white hover:bg-[#28a745] h-[38px] w-[73px] rounded-[4px]">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
