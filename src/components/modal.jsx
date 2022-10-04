import React from "react";

const ModalOur = (props) => {
   return (
      <div className='flex justify-center fixed top-0 left-0 bg-opacity-80 w-full h-full z-10 bg-black ' >
         <img src={props.image} alt="" className=" w-[60%] object-contain " />
         <button onClick={() => props.setShowModal(false)}>Close</button>
      </div>
   )
}

export default ModalOur;