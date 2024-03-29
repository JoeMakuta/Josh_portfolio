// import Contact_form from "./contact_form"
import Address from "./address";
import Contact_form from "./contact_form";
import FormAnt from "./contact_form";

const Body_6 = () => {
  return (
    <div
      id="body_6"
      className=" flex flex-col items-center justify-center pt-20 pb-20 gap-10"
    >
      <div className="text-center">
        <p className=" text-xs font-bold ">CONTACT ME</p>
        <p className=" text-4xl text-main_color font-semibold ">
          I want to hear from you !
        </p>
      </div>
      <div className="flex w-full justify-center gap-16 flex-wrap">
        <Contact_form />
        {/* <Address /> */}

        {/* <AdvancedSearchForm /> */}
      </div>
    </div>
  );
};

export default Body_6;
