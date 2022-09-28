
import arrow_img from '/src/assets/try-out-arrow.svg'
import { FaLink } from 'react-icons/fa'
import { RiZoomInFill } from 'react-icons/ri'

import work_image_1 from '../assets/Screenshot from 2022-08-04 16-09-48.jpg'

export const amazing_works = [
   {
      image: work_image_1,
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

   {
      image: work_image_1,
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

   {
      image: work_image_1,
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

]

const Body_4 = () => {
   return (
      <div id="body_4" className=" text-center mt-16 flex flex-col gap-5 relative " >
         <p className=" font-semibold " >Portfolio</p>
         <p className=" font-bold text-5xl text-main_color " >
            My Amazing Works
         </p>
         <p className="w-[30%] m-auto" >
            Most common methods for designing websites that work well on desktop is responsive and adaptive design
         </p>
         <img src={arrow_img} className='block rotate-180 absolute left-[25%] ' alt="" />
         <div className='flex  justify-center gap-6  ' >
            {
               amazing_works.map((elt, index) => {
                  return (
                     <div key={index} className='   cursor-pointer w-[20%] h-96'>
                        <div className='relative' >
                           <img src={elt.image} alt="" />
                           <div className=' bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-all text-white h-full absolute top-0 flex items-center justify-center flex-col gap-5  ' >
                              <p className=' font-semibold text-xl ' >{elt.title}</p>
                              <p className='text-xs' >{elt.description}</p>
                              <div className='flex gap-7'>
                                 <a href="#"><FaLink /></a>
                                 <a href="#"> <RiZoomInFill /></a>
                              </div>
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