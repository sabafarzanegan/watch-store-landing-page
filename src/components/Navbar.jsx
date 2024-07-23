import React from "react";
import logo from "../assets/toggle/logo (1).png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Darkmood from "./darkmood";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Top Sellers",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
  {
    name: "Trending Now",
    link: "/#",
  },
];

function Navbar() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <div className="flex items-center justify-between gap-4 container py-3 md:py-0 ">
        {/* logo section */}
        <div>
          <a href="" className="flex items-center gap-2 text-2xl sm:text-3xl">
            <img src={logo} alt="" className="w-10" />
            <span className="font-bold">Watch</span>Store
          </a>
        </div>
        {/* menu section */}
        <div className="flex items-center justify-between gap-2">
          <Darkmood />
          <ul className=" items-center justify-center gap-4 hidden md:flex">
            {Menu.map((item) => (
              <li>
                <a
                  className="inline-block px-4 py-2  hover:text-primary  "
                  href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
            {/* drop down */}
            <li className="group relative cursor-pointer ">
              <a href="" className="flex h-[72px] items-center gap-[2px] ">
                Quick Links
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute hidden group-hover:block  -left-9 z-[9990] w-[150px] p-2 bg-white shadow-md rounded-md">
                <ul className="space-y-3">
                  {DropdownLinks.map((item) => (
                    <li>
                      <a
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:text-black"
                        href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          {/* cart section */}
          <div>
            <button className="px-4 py-2 rounded-full hover:bg-gradient-to-r  hover:from-primary hover:to-secondary hover:scale-105 transition-all duration-200">
              <FaCartShopping className="text-lg text-black dark:text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
