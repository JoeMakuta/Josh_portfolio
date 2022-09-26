
import { btn_inverted_styles, btn_styles } from './top_menu'
import main_img from '/src/assets/20220804_103923 (1).jpg'

export const Left_body_3 = () => {
   return (
      <div className=' flex items-center justify-center w-[70%]'>
         <img src={main_img} className=" block rounded-full border-[1px] border-main_color " alt="" />
      </div>
   )
}

export const Right_body_3 = () => {
   return (
      <div className='flex flex-col items-center justify-center gap-5 w-[100%] text-center' >
         <p className=' text-blue-500 '>I'm a web developer</p>
         <p className='text-3xl font-semibold ' >I can design and implement anything you want</p>
         <p> Hello there! I'm a web developer, and I'm very passionate and dedicated to my work. With more than 1 year  experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development  process, from discussion and collaboration.</p>
         <button className={btn_inverted_styles + 'w-[40%]' }>
            Hire me
         </button>

      </div>
   )
}

const Body_3 = () => {
   return (
      <div className="flex items-center justify-around gap-[10%] bg-white w-[100%] p-28 ">
         <Left_body_3 />
         <Right_body_3 />
      </div>
   )
}

export default Body_3