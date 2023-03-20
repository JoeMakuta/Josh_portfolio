
const ProgressBar = (props) => {

   const styles = {
      outer_style: `w-[30vw] bg-gray-400 h-5 rounded-full`,
      inner_style: `w-[${props.level}%] bg-${props.color}-400 h-5 rounded-full`
   }

   return (

      <div>
         <div className=" flex w-96  justify-between " >
            <p className=" font-semibold ">{props.Title}</p>
            <p>{props.level}%</p>
         </div>
         {/* <div className={styles.outer_style} >
            <div className={styles.inner_style}>
            </div>
         </div> */}

      </div>
   )
}

export default ProgressBar