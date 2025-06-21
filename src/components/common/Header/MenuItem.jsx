import { FaAngleRight } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const LargeMenu = ({ menuItem }) => {
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="relative group mx-1 my-2">
  <Wrapper
  to={menuItem.link}
  className={`flex items-center justify-end gap-1 rounded-md text-menuColor px-2 py-3 hover:bg-menuColor hover:text-white w-full h-full ${
    menuItem.link ? "" : "cursor-pointer"
  }`}
>
  {menuItem.title}
  {!menuItem.link && (
    <GoTriangleDown className="group-hover:rotate-180 duration-200" />
  )}
</Wrapper>


      {menuItem.children && (
        <ul className="hidden group-hover:block absolute left-0 top-full mt-0 bg-white z-10 w-44 xl:w-56 divide-y-2 text-start shadow-lg transition-opacity duration-200 delay-100 opacity-0 group-hover:opacity-100">
          {menuItem.children.map((dropdown, index) => {
            const DropdownWrapper = dropdown.link ? Link : "div";

            return (
              <li
                key={index}
                className={`px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-white group/dropdown relative ${
                  dropdown.children ? "flex justify-between items-center" : ""
                }`}
              >
                <DropdownWrapper
  to={dropdown.link}
  className={`flex justify-between items-center w-full ${
    dropdown.link ? "" : "cursor-pointer"
  }`}
>
                  {dropdown.title}
                  {dropdown.children && <FaAngleRight />}
                </DropdownWrapper>

                {dropdown.children && (
                  <ul className="hidden group-hover/dropdown:block bg-white divide-y-2 w-44 xl:w-56 absolute left-full top-0 shadow-lg transition-opacity duration-200 delay-100 opacity-0 group-hover/dropdown:opacity-100">
                    {dropdown.children.map((level2, idx) => (
                      <li
                        key={idx}
                        className="p-3 bg-white text-menuColor hover:bg-menuColor hover:text-white"
                      >
                        <Link to={level2.link} className="block w-full">
                          {level2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};


// on small screen

const HamburgerMenu = ({ menuItem, setShowNav }) => {
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="rounded-md group w-full text-menuColor text-start hover:bg-menuColor hover:text-white">
    <Wrapper
  to={menuItem.link}
  onClick={() => setShowNav(false)}
  className={`flex items-center justify-between w-full px-4 py-3 ${
    menuItem.link ? "" : "cursor-pointer"
  }`}
>

        {menuItem.title}
        {!menuItem.link && (
          <GoTriangleDown className="group-hover:rotate-180 duration-200" />
        )}
      </Wrapper>

      {menuItem.children && (
        <ul className="mt-2 hidden group-hover:block pl-2">
          {menuItem.children.map((dropdown, index) => {
            const DropdownWrapper = dropdown.link ? Link : "div";

            return (
              <li
                key={index}
                className="py-3 rounded-md hover:bg-menuColor hover:text-white group/item"
              >
               <DropdownWrapper
  to={dropdown.link}
  onClick={() => setShowNav(false)}
  className={`flex justify-between items-center px-4 w-full ${
    dropdown.link ? "" : "cursor-pointer"
  }`}
>

                  {dropdown.title}
                  {dropdown.children && (
                    <GoTriangleDown className="ml-1 group-hover/item:rotate-180 duration-200" />
                  )}
                </DropdownWrapper>

                {dropdown.children && (
                  <ul className="mt-2 hidden group-hover/item:block">
                    {dropdown.children.map((level2, idx) => (
                      <li key={idx} className="pl-6 py-2 rounded-sm">
                        <Link
                          to={level2.link}
                          onClick={() => setShowNav(false)}
                          className="block w-full"
                        >
                          {level2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};




export { HamburgerMenu, LargeMenu };

