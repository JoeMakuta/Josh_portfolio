import TopMenu, { btn_inverted_styles, btn_styles } from "./top_menu"
import { MdOutlineWavingHand } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

import main_img from "../assets/IMG_3726_okay-removebg-preview.png"

export const social_media = [
   {
      name: 'facebook',
      icon: <BsFacebook />,
      link: '#'
   },
   {
      name: 'Twitter',
      icon: <BsTwitter />,
      link: '#'
   },
   {
      name: 'Github',
      icon: <BsGithub />,
      link: '#'
   },
   {
      name: 'LinkedIn',
      icon: <BsLinkedin />,
      link: '#'
   },
]

export const Right_body_1 = () => {
   return (
      <div className="flex justify-start ">
         <img src={main_img} className="w-[900px]  " alt="" />
      </div>
   )
}

export const Left_body_1 = () => {
   return (
      <div className="flex flex-col gap-9  ">
         <div className=" flex gap-1" >
            <p>Hi,</p>
            <MdOutlineWavingHand size={25} />
            <p>I am</p>
         </div>
         <p className="font-semibold text-6xl " >Josué Makuta</p>
         <p className="font-semibold">A full stack developer From <span className="font-bold text-main_color" >
            GOMA</span></p>
         <p className=" w-[100%] " >
            I'm a full stack web developper and Ux designer based in DRC, and I'm very passionate and dedicated to my work.
         </p>
         <div className="flex items-center gap-4">
            <button className={btn_inverted_styles + 'w-[40%]'} >
               About
            </button>
            <div className=" flex justify-center items-center gap-4 " >
               {
                  social_media.map((elt, index) => {
                     return (
                        <a key={index} href={elt.link} className='opacity-70 hover:opacity-100' >{elt.icon}</a>
                     )
                  })
               }
            </div>
         </div>

      </div>
   )
}

export const Main_body = () => {
   return (
      <div className="flex items-center justify-around w-[85%] m-auto " >
         <Left_body_1 />
         <Right_body_1 />
      </div>
   )
}


export const Body_1 = () => {
   return (
      <div className=" flex flex-col justify-between w-full h-screen pt-6 bg-main_bg bg-cover">
         <TopMenu />
         <Main_body />
      </div>
   )
}

const Body_1_alter = () => {
   return (
      <div id="body_1" className=" bg-white ">
         <Body_1 />
      </div>
   )
}

export default Body_1_alter

