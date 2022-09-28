import Contact_form from "./contact_form"
import Address from "./address"

const Body_6 = () => {
   return (
      <div className=" flex flex-col items-center justify-center " >
         <p>CONTACT ME</p>
         <p>I want to hear from you !</p>
         <div className="flex" >
            <Address />
            <Contact_form />
         </div>
      </div>

   )
}

export default Body_6