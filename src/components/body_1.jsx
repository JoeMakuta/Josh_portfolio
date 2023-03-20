import TopMenu, { btn_inverted_styles, btn_styles } from "./top_menu";
import { MdOutlineWavingHand } from "react-icons/md";
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import main_img from "../assets/IMG_3726_okay-removebg-preview.png";

export const social_media = [
  {
    name: "facebook",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/josue.joemakuta",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    link: "https://twitter.com/JosueMakuta",
  },
  {
    name: "Github",
    icon: <BsGithub />,
    link: "https://github.com/JoeMakuta",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/josu%C3%A9-makuta-32367120b/",
  },
];

export const Right_body_1 = () => {
  return (
    <div className=" hidden sm:flex">
      <img src={main_img} className="w-full" alt="" />
    </div>
  );
};

export const Left_body_1 = () => {
  return (
    <div className="flex flex-col w-[90vw] sm:w-[50vw] gap-8 flex-wrap justify-center h-full sm:gap-5 ">
      <div className=" flex gap-1">
        <p>Hi,</p>
        <MdOutlineWavingHand size={25} />
        <p>I am</p>
      </div>
      <p className="font-extralight text-6xl ">Josué Makuta</p>
      <p className="font-semibold">
        A full stack developer From{" "}
        <span className="font-bold text-main_color">GOMA</span>
      </p>
      <p className=" w-[100%] text-sm ">
        I'm a full stack web developper and Ux designer based in DRC, and I'm
        very passionate and dedicated to my work.
      </p>
      <div className="flex items-center flex-wrap gap-10">
        <AnchorLink
          href="#body_3"
          className={
            btn_inverted_styles + " flex items-center justify-center w-[70vw] sm:w-[40%]"
          }
        >
          <button>About</button>
        </AnchorLink>
        <div className=" flex justify-center items-center gap-4 ">
          {social_media.map((elt, index) => {
            return (
              <a
                key={index}
                href={elt.link}
                target="__blank"
                className="opacity-70 hover:opacity-100"
              >
                {elt.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Main_body = () => {
  return (
    <div className=" flex flex-col-reverse sm:flex-row justify-center">
      <Left_body_1 />
      <Right_body_1 />
    </div>
  );
};

export const Body_1 = () => {
  return (
    <div className=" flex flex-col p-5 justify-center items-center max-w-screen h-[90vh] pt-6 bg-main_bg bg-cover">
      <Main_body />
    </div>
  );
};

// const Body_1_alter = () => {
//   return (
//     <div id="body_1" className=" bg-white ">
//       <Body_1 />
//     </div>
//   );
// };

// export default Body_1_alter;
