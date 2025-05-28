import { FaAngleRight } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const LargeMenu = ({ menuItem }) => {
  return (
    // main list item. Show Link or span.
   <li
      className="rounded-md group text-menuColor mx-1 my-2 px-1 xl:px-2 py-2 xl:py-3 hover:bg-menuColor hover:text-textColor relative cursor-pointer"
    >
      {menuItem.link ? (
        <Link to={menuItem.link} className="pr-2">
          {menuItem.title}
        </Link>
      ) : (
        <span className="flex items-center justify-end gap-1 cursor-pointer">
          {menuItem.title}{" "}
          <GoTriangleDown className="group-hover:rotate-180 duration-200" />
        </span>
      )}

     
      {menuItem.children && (
        <ul
          className="hidden group-hover:block absolute left-0 top-full mt-0 bg-white z-10 w-44 xl:w-56 divide-y-2 text-start shadow-lg transition-opacity duration-200 delay-100 opacity-0 group-hover:opacity-100"
        >
          {menuItem.children.map((dropdown, index) => (
            <li
              key={index}
              className={`px-2 xl:px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-textColor group/dropdown relative ${
                dropdown.children && "flex justify-between items-center"
              }`}
            >
              {dropdown.link ? (
                <Link to={dropdown.link}>{dropdown.title}</Link>
              ) : (
                <>
                  <span className="cursor-pointer">{dropdown.title}</span>
                  {dropdown.children && (
                    <FaAngleRight className="text-lg xl:text-xl" />
                  )}
                </>
              )}

              {dropdown.children && (
                <ul className="hidden group-hover/dropdown:block bg-white divide-y-2 w-44 xl:w-56 absolute left-full top-0 shadow-lg transition-opacity duration-200 delay-100 opacity-0 group-hover/dropdown:opacity-100">
                  {dropdown.children.map((level2, index) => (
                    <li
                      key={index}
                      className="p-3 bg-white text-menuColor hover:bg-menuColor hover:text-textColor"
                    >
                      <Link to={level2.link}>{level2.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// on small screen

const HamburgerMenu = ({ menuItem, setShowNav }) => {
  return (
    <li
      className={"rounded-md group w-full text-menuColor text-start pl-4 py-3 hover:bg-menuColor hover:text-textColor"}
    >
      {menuItem.link ? (
        <Link
          to={menuItem.link}
          onClick={() => {
            setShowNav(false);
          }}
        >
          {menuItem.title}
        </Link>
      ) : (
        <span className="flex items-center justify-start gap-1 cursor-pointer">
          {menuItem.title}{" "}
          <GoTriangleDown className="group-hover:rotate-180 duration-200" />
        </span>
      )}

      {/* if li item has children, show the children */}

      {menuItem.children && (
        <ul className={"mt-2 hidden group-hover:block"}>
          {menuItem.children.map((dropdown, index) => (
            <li
              key={index}
              className="pl-4 py-3 rounded-md hover:bg-menuColor hover:text-textColor group/item"
            >
              {dropdown.link ? (
                <Link
                  to={dropdown.link}
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  {dropdown.title}
                </Link>
              ) : (
                <>
                  <span className="cursor-pointer">{dropdown.title}</span>
                </>
              )}
              {dropdown.children && (
                <GoTriangleDown className="inline ml-1 group-hover/item:rotate-180 duration-200" />
              )}
              {dropdown.children && (
                <ul className="mt-2 hidden group-hover/item:block">
                  {dropdown.children.map((level2, index) => (
                    <li key={index} className="pl-6 py-3 rounded-sm">
                      <Link
                        to={level2.link}
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        {level2.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export { HamburgerMenu, LargeMenu };

