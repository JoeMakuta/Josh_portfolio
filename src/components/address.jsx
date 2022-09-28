import { ImLocation2 } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

const addresses = [
   {
      color: 'green',
      icon: <ImLocation2 size={30} color='white' />,
      label: 'Adress',
      label_description: 'DRC, N-K, Goma'
   },
   {
      color: 'green',
      icon: <FaEnvelope size={20} color='white' />,
      label: 'Email',
      label_description: 'makutajosue@gmail.com'
   },
   {
      color: 'green',
      icon: <BsFillTelephoneFill size={20} color='white' />,
      label: 'Phone',
      label_description: '+243972383759'
   },
]

const Single_address = (props) => {
   return (
      <div className="  flex gap-3 items-center " >
         <div className=" flex items-center justify-center bg-orange-500 w-20 h-20 rounded-full ">
            {props.icon}
         </div>
         <div>
            <p className=' font-bold text-xl ' >{props.label}</p>
            <p className=' font-light ' >{props.label_description}</p>
         </div>
      </div>
   )
}

const Address = () => {
   return (
      <div className=' flex flex-col justify-center gap-5 w-[100%] ' >
         {
            addresses.map((elt, index) => {
               return (
                  <div key={index} >
                     <Single_address icon={elt.icon} label={elt.label} label_description={elt.label_description} />
                  </div>
               )
            })
         }
      </div>
   )
}

export default Address