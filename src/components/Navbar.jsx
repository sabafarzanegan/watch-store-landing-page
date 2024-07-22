import React from "react";
import logo from "../assets/toggle/logo (1).png";
import { FaCaretDown } from "react-icons/fa";
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
          <div>darkmood</div>
          <ul className="flex items-center justify-center gap-4">
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
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
