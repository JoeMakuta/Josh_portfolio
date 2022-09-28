
import ProgressBar from './ProgressBar'
import main_img from '/src/assets/20220804_103923 (1).jpg'

const talents = [
   {
      title: 'TailWind',
      color: 'orange',
      level: 66
   },
   {
      title: 'Web 3.0',
      color: 'orange',
      level: 88
   },
   {
      title: 'React',
      color: 'blue',
      level: 90
   }, {
      title: 'Js',
      color: 'orange',
      level: 87
   },
]

const Body_5 = () => {
   return (
      <div id="body_5" className=" flex pl-36 pr-36 pt-20 pb-20 box-content bg-white h-[70vh] " >
         <div className='flex flex-col gap-5 justify-center items-start box-border w-[50%] ' >
            <p className=' text-main_color ' >For me web developement  is Life</p>
            <p className=' font-bold text-4xl '>I Develop Skills Regularly to Keep Me Updated</p>
            <p className='text-sm' >Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            {
               talents.map((elt, index) => {
                  return (
                     <ProgressBar key={index} Title={elt.title} level={elt.level} color={elt.color} />
                  )
               })
            }

         </div>
         <div className=' flex items-center justify-center w-[50%] ' >
            <img className=' w-[80%] h-full object-cover rounded-3xl ' src={main_img} alt="" />
         </div>
      </div>
   )
}

export default Body_5