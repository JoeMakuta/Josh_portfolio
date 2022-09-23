

const TopMenu = () => {
   return (
      <div className=" flex justify-center items-center gap-[40%] w-full mt-7 ">
         <a href=""> <p className=" font-bold text-xl  ">Josue Makuta</p> </a>
         <div className="flex gap-[3rem] justify-center items-center " >
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">Contacts</a>
            <button className=" border-[1px] border-main_color rounded-full p-3 hover:bg-main_color hover:text-white " >
               Download <span className=" font-bold ">CV</span>
            </button>
         </div>
      </div>
   )
}

export default TopMenu