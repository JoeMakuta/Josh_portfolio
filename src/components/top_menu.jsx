
export const btn_styles = " border-[1px] border-main_color rounded-full p-3 hover:bg-main_color hover:text-white  active:bg-white "

export const btn_inverted_styles = " border-[1px] text-white hover:bg-inherit hover:text-inherit border-main_color rounded-full p-3 bg-main_color   active:bg-white "


const menu_links = [
   {
      link_label: 'Home',
      link_url: '#'
   },
   {
      link_label: 'About',
      link_url: '#'
   },
   {
      link_label: 'Portfolio',
      link_url: '#'
   },
   {
      link_label: 'Contact',
      link_url: '#'
   },
]

const TopMenu = () => {
   return (
      <div className=" flex justify-between items-center gap-[30%] w-[90%] ml-auto mr-auto">
         <a href=""> <p className=" font-bold text-xl  ">Josue Makuta</p> </a>
         <div className="flex gap-[50px] justify-center items-center " >
            {
               menu_links.map((element, index) => {
                  return (
                     <a key={index} href={element.link_url} className="hover:text-main_color" >{element.link_label}</a>
                  )
               })
            }
            <button className={btn_styles} >
               Download<span className=" font-bold "> CV</span>
            </button>

         </div>
      </div>
   )
}

export default TopMenu