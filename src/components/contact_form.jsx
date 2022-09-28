import { btn_styles } from "./top_menu"




const Input_field = (props) => {
   const input_styles = 'block p-3 outline-none w-[' + props.width + '%] h-' + props.height
   return (
      <div>
         <p>{props.label}</p>
         <input type="text" placeholder={props.placeholder} className={input_styles} />
      </div>
   )
}


const Contact_form = () => {
   return (
      <div className=" bg-gray-300 p-10 ">
         <div className=" flex items-center justify-center " >
            <Input_field width='80' label='First Name' placeholder='First Name' />
            <Input_field width='80' label='Last Name' placeholder='Last Name' />
         </div>
         <Input_field width='80' label='Email' placeholder='makutajosue@gmail.com' />
         <Input_field width='80' height="[300px]" label='Comment' placeholder='' />
         <button className={btn_styles + 'w-full'} >Send</button>
      </div>
   )
}

export default Contact_form