import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Menu } from "lucide-react";
import { getMenu } from "@/lib/menu";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenu();
      setMenuItems(data);
    };
    fetchMenu();
  }, []);

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
                        menu.label === "Disabled" &&
                        "text-[#6b7072] cursor-default"
                      } `}
                    >
                      {menu.label}
                    </Link>
                  );
                } else {
                  return (
                    <div
                      key={menu.id}
                      className=" relative inline-block text-white"
                    >
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
          <div className="flex flex-col items-start pl-4 space-y-4 w-full">
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
                      menu.label === "Disabled" &&
                      "text-[#6b7072] cursor-default"
                    } `}
                  >
                    {menu.label}
                  </Link>
                );
              } else {
                return (
                  <div key={menu.id} className="  text-white w-full">
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
                      } space-y-1 py-2 mt-[10px] rounded-md  border-[1px] border-[rgba(0,0,0,.15)] bg-white text-[#212529] w-full`}
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
};

export default Navbar;
