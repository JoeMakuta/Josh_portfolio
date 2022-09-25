import TopMenu, { btn_inverted_styles, btn_styles } from "./top_menu"
import { MdOutlineWavingHand } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

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

export const Left_body_1 = () => {
   return (
      <div className="flex flex-col gap-9">
         <div className=" flex gap-1" >
            <p>Hi,</p>
            <MdOutlineWavingHand size={25} />
            <p>I am</p>
         </div>
         <p className="font-bold text-5xl " >Josué Makuta</p>
         <p className="font-bold">A full stack developer From <span className="font-bold text-main_color" >
            GOMA</span></p>
         <p className=" w-[30%] " >
            I'm a full stack web developper and Ux designer based in DRC, and I'm very passionate and dedicated to my work.
         </p>
         <div className="flex items-center gap-4">
            <button className={btn_inverted_styles + 'w-[15%]'} >
               About
            </button>
            <div className=" flex justify-center items-center gap-4 " >
               {
                  social_media.map((elt, index) => {
                     return (
                        <a href={elt.link} className='opacity-70 hover:opacity-100' >{elt.icon}</a>
                     )
                  })
               }
            </div>
         </div>

      </div>
   )
}


const Body_1 = () => {
   return (
      <div className="w-full h-screen">
         <TopMenu />
         <Left_body_1 />
      </div>
   )
}

export default Body_1

