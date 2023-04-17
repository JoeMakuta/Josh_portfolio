import { useState } from "react";
import TopMenu from "./components/top_menu";
import Body_1, { Main_body } from "./components/body_1";
import "./App.css";
import Body_1_alter from "./components/body_1";
import Body_2 from "./components/Body_2";
import Body_3 from "./components/body_3";
import Body_4 from "./components/body_4";
import Footer from "./components/footer";
import Body_5 from "./components/body_5";
import Body_6 from "./components/body_6";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Toaster } from "react-hot-toast";
AOS.init();

Modal.setAppElement("#root");
function App() {
  return (
    <div className="font-poppins pt-10 bg-main_color  sm:pt-0 bg-opacity-20 ">
      {/* <Toaster /> */}
      <TopMenu />
      <Body_1 />
      <Body_2 />
      <Body_3 />
      <Body_4 />
      <Body_5 />
      <Body_6 />
      <Footer />
    </div>
  );
}

export default App;
