import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import menuData from "../../../data/menuData";
import { HamburgerMenu, LargeMenu } from "./MenuItem";

export default function NavMenu() {
  // state to show-hide navbar on small screen
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="md:px-6 lg:px-8 xl:px-12 px-4  relative">
      {/* small screen hamburger icon */}
      <button className="py-3 w-full flex justify-end lg:hidden">
        <HiOutlineMenuAlt3
          className="text-3xl text-menuColor pointer"
          onClick={() => {
            setShowNav((state) => !state);
          }}
        />
      </button>

      {/* large screen menu */}
      <ul className="text-primary text-sm xl:text-md  font-semibold gap-1 hidden lg:flex items-center">
        {menuData.map((menuItem, index) => (
          <LargeMenu key={index} menuItem={menuItem} />
        ))}
      </ul>

      {/* small screen menu */}
      <ul
        className={`text-primary text-md font-semibold items-end flex-col mt-2 px-2 py-4 absolute w-80 bg-white z-10 right-4 rounded-md ${
          showNav ? "flex" : "hidden"
        } lg:hidden `}
      >
        {menuData.map((menuItem, index) => (
          <HamburgerMenu
            key={index}
            menuItem={menuItem}
            setShowNav={setShowNav}
          />
        ))}
      </ul>
    </div>
  );
}
