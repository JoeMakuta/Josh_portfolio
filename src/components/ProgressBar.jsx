

const ProgressBar = (props) => {

   const styles = {
      outer_style: `w-[40vw] bg-orange-400 h-5 rounded-full`,
      inner_style: `w-[${props.level}%] bg-gray-400 h-5 rounded-full`
   }

   return (
      <div className="m-2">
         <div className=" flex justify-between " >
            <p>{props.Title}</p>
            <p>{props.level}</p>
         </div>
         <div className={styles.outer_style} >
            <div className={styles.inner_style}>
            </div>
         </div>

      </div>
   )
}

export default ProgressBar