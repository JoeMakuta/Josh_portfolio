
import arrow_img from '/src/assets/try-out-arrow.svg'

export const amazing_works = [
   {
      image: '/src/assets/Screenshot from 2022-08-04 16-09-48.jpg',
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

   {
      image: '/src/assets/Screenshot from 2022-08-04 16-09-48.jpg',
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

   {
      image: '/src/assets/Screenshot from 2022-08-04 16-09-48.jpg',
      title: 'Landing Page',
      description: 'This page is a landing page of the official site of sunnySide company',
      link: '#'
   },

]

const Body_4 = () => {
   return (
      <div className=" text-center mt-16 flex flex-col gap-5 " >
         <p className=" font-semibold " >Portfolio</p>
         <p className=" font-bold text-5xl text-main_color " >
            My Amazing Works
         </p>
         <p className="w-[30%] m-auto" >
            Most common methods for designing websites that work well on desktop is responsive and adaptive design
         </p>
         {/* <img src={arrow_img} className='block rotate-180 absolute left-[32%] top-[2170px] ' alt="" /> */}
         <div className='flex  justify-center gap-6  ' >
            {
               amazing_works.map((elt, index) => {
                  return (
                     <div key={index} className=' relative  cursor-pointer w-[20%] h-96'>
                        <div>
                           <img src={elt.image} alt="" />
                        </div>
                        <div className=' bg-black bg-opacity-70 text-white h-72 absolute top-0 flex items-center justify-center flex-col gap-5 p-12 ' >
                           <p className=' font-semibold text-xl ' >{elt.title}</p>
                           <p className='text-xs' >{elt.description}</p>
                           <div>
                              <a href="#"></a>

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