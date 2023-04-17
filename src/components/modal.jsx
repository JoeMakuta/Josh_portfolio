import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { amazing_works } from "./body_4";

const ModalOur = (props) => {
  return (
    <div className="flex gap-10 justify-center fixed top-0 left-0 bg-opacity-80 w-full h-full z-10 bg-black ">
      <button
        className=" text-white"
        onClick={() => {
          const isLast = props.imgIndex === 0;
          isLast
            ? props.setImgIndex(amazing_works.length - 1)
            : props.setImgIndex(props.imgIndex - 1);
        }}
      >
        <MdOutlineArrowForwardIos className=" rotate-180 " size={40} />
      </button>
      <img
        src={amazing_works[props.imgIndex].image}
        className=" transition-all w-[80%] object-contain "
      />
      <button
        className=" text-white fixed top-10 z-10 right-16 "
        onClick={() => props.setShowModal(false)}
      >
        <BsXLg size={25} />
      </button>

      <button
        className=" text-white"
        onClick={() => {
          const isLast = props.imgIndex === amazing_works.length - 1;
          isLast ? props.setImgIndex(0) : props.setImgIndex(props.imgIndex + 1);
        }}
      >
        <MdOutlineArrowForwardIos size={40} />
      </button>
    </div>
  );
};

export default ModalOur;
