

export const qualities = [
   {
      icon  : '/src/assets/pixel-perfect-1.png',
      label : 'Save Money',
      text : 'Most common methods for designing websites that work well on desktop is responsive and adaptive design',
   },
   {
      icon  : '/src/assets/hight-quality-1.png',
      label : 'Hight Quality',
      text : 'Most common methods for designing websites that work well on desktop is responsive and adaptive design',
   },
   {
      icon  : '/src/assets/awesome-data-1.png',
      label : 'Awesome Ideas',
      text : 'Most common methods for designing websites that work well on desktop is responsive and adaptive design',
   },
]

const Body_2 = () => {
   return (
      <div>
        <div className="flex bg-white w-[80%] m-auto  items-center justify-evenly mt-20 mb-20 ">
         {
            qualities.map(( elt, index ) => {
               return(
                  <div className=" flex flex-col gap-4 justify-center items-center p-10 " >
                     <img src={elt.icon} alt="" />
                     <h2 className="font-bold text-xl" >{elt.label}</h2>
                     <p className="text-center" >{elt.text}</p>
                  </div>
               )
            })
         }
        </div>

      </div>
   )
}

export default Body_2