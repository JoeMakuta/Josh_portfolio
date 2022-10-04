
import arrow_img from '/src/assets/try-out-arrow.svg'
import { FaLink } from 'react-icons/fa'
import { RiZoomInFill } from 'react-icons/ri'
import { useState } from 'react'
import Modal from 'react-modal'

import work_image_1 from '../assets/Screenshot from 2022-08-04 16-09-48.jpg'
import work_image_2 from '../assets/Programiz-Pro.jpg'
import work_image_3 from '../assets/World Weather.png'
import work_image_4 from '../assets/Calculator.png'
import ModalOur from './modal'


export const amazing_works = [
   {
      image: work_image_1,
      title: 'Quiz App',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: 'https://josuemakutaquizapp.netlify.app/'
   },

   {
      image: work_image_2,
      title: 'Programiz-Pro Design Clone',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: 'https://joemakuta.github.io/Programiz-Pro/'
   },

   {
      image: work_image_3,
      title: 'World Weather App',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: 'https://world-weather-app-josue-makuta.netlify.app/'
   },
   {
      image: work_image_4,
      title: 'Calculator',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: 'https://calculator-josue-makuta.netlify.app/'
   },


]

const Body_4 = () => {

   const [showModal, setShowModal] = useState(false);
   const [imgLink, setImgLink] = useState('');

   return (
      <div id="body_4" className=" text-center mt-16 flex flex-col gap-5 relative " >
         {showModal && <ModalOur image={imgLink} setShowModal={setShowModal} />}
         <p className=" font-semibold " >Portfolio</p>
         <p className=" font-bold text-5xl text-main_color " >
            My Amazing Works
         </p>
         <p className="w-[30%] m-auto" >
            Most common methods for designing websites that work well on desktop is responsive and adaptive design
         </p>
         <img src={arrow_img} className='block rotate-180 absolute left-[25%] ' alt="" />
         <div className='flex flex-wrap justify-center gap-6 mb-28  ' >
            {
               amazing_works.map((elt, index) => {
                  return (
                     <div key={index} className='flex border-[1px] border-gray-700 relative w-72 h-72' >
                        <img src={elt.image} alt={elt.description} className=' object-cover h-full ' />
                        <div className=' bg-rose-500 bg-opacity-90 opacity-0 p-10 hover:opacity-100 transition-all delay-75 text-white h-full absolute top-10 hover:top-0 flex items-center justify-center flex-col gap-5 '>
                           <p className=' font-semibold text-xl ' >{elt.title}</p>
                           <p className='text-xs' >{elt.description}</p>
                           <div className='flex gap-7'>
                              <a href={elt.link} target='__blank' className=' hover:text-yellow-400 ' ><FaLink /></a>
                              <button onClick={() => {setShowModal(true); setImgLink(elt.image)}} className=' hover:text-yellow-400 ' > <RiZoomInFill /></button>
                           </div>

                           

                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}
export default Body_4