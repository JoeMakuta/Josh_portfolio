export const btn_styles =
  " border-[1px] border-main_color rounded-full p-3 hover:bg-main_color hover:text-white  active:bg-white ";
export const btn_inverted_styles =
  " border-[1px] text-white hover:bg-inherit hover:text-inherit border-main_color rounded-full p-3 bg-main_color   active:bg-white ";
import { RiMenu4Line } from "react-icons/ri";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOutlineClose } from "react-icons/md";

import My_cv from "../assets/Josue Makuta Cv.jpg";
import { useState } from "react";

const menu_links = [
  {
    link_label: "Home",
    link_url: "#body_1",
  },
  {
    link_label: "About",
    link_url: "#body_3",
  },
  {
    link_label: "Portfolio",
    link_url: "#body_4",
  },
  {
    link_label: "Contact",
    link_url: "#body_6",
  },
];

const TopMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" flex justify-between items-center bg-white gap-[30%] w-[100%] pl-10 pr-10 h-[5vw] ml-auto mr-auto">
      <button>
        {" "}
        <p className=" font-bold text-xl">Josué Makuta</p>{" "}
      </button>

      <div className=" flex gap-[4vw] justify-center items-center ">
        <div className="flex gap-[4vw] flex-wrap justify-center items-center">
          {showMenu ? (
            <div className=" flex fixed w-[100vw] bg-white bg-opacity-[0.95] md:bg-inherit z-10 h-[100vh]  top-[0vw] left-0 gap-[10vh] md:top-0 sm:w-full  md:relative  flex-col lg:flex-row md:gap-[4vw] justify-center items-center ">
              <div>
                <MdOutlineClose size={30} />
              </div>
              {menu_links.map((element, index) => {
                return (
                  <AnchorLink key={index} href={element.link_url}>
                    <button
                      href={element.link_url}
                      className="hover:text-main_color text-sm"
                    >
                      {element.link_label}
                    </button>
                  </AnchorLink>
                );
              })}
              <a
                className={btn_styles + "text-sm box-border"}
                href={My_cv}
                download="Josue Makuta Cv.jpg"
              >
                Download<span className=" font-bold "> CV</span>
              </a>
            </div>
          ) : null}
        </div>
        <button
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          <RiMenu4Line size={30} />
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
