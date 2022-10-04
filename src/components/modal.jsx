import React from "react";
import { BsXLg } from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const ModalOur = (props) => {
   return (
      <div className='flex gap-10 justify-center fixed top-0 left-0 bg-opacity-80 w-full h-full z-10 bg-black ' >
         <button className=" text-white" onClick={() => props.setShowModal(false)}><MdOutlineArrowForwardIos className=" rotate-180 " size={40} /></button>
         <img src={props.image} alt="" className=" transition-all w-[80%] object-contain " />
         <button className=" text-white fixed top-10 right-20 " onClick={() => props.setShowModal(false)}><BsXLg size={20} /></button>

         <button className=" text-white" onClick={() => props.setShowModal(false)}><MdOutlineArrowForwardIos size={40} /></button>
      </div>
   )
}

export default ModalOur;