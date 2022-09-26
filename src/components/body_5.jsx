
import ProgressBar from './ProgressBar'
import main_img from '/src/assets/20220804_103923 (1).jpg'

const talents = [
   {
      title: 'TailWind',
      color: 'Orange',
      level: 75
   },
   {
      title: 'TailWind',
      color: 'Orange',
      level: 35
   },
   {
      title: 'TailWind',
      color: 'Orange',
      level: 50
   }
]

const Body_5 = () => {
   return (
      <div className=" flex pl-20 pr-20 bg-white h-[70vh] " >
         <div className='flex flex-col justify-center items-start box-border ' >
            <p className=' text-main_color ' >For me web developement  is Life</p>
            <p className=' font-bold text-4xl '>I Develop Skills Regularly to Keep Me Updated</p>
            <p className='text-sm' >Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            {
               talents.map((elt, index) => {
                  return (
                     <ProgressBar Title={elt.title} level={elt.level} color={elt.color} />
                  )
               })
            }

         </div>
         <div className=' w-[50%] ' >
            <img src={main_img} alt="" />
         </div>
      </div>
   )
}

export default Body_5