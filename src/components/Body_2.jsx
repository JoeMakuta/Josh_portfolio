import quality_icon_1 from "../assets/pixel-perfect-1.png";
import quality_icon_2 from "../assets/hight-quality-1.png";
import quality_icon_3 from "../assets/awesome-data-1.png";

export const qualities = [
  {
    icon: quality_icon_1,
    label: "Save Money",
    text: "Money is good for nothing unless you know the value of it by experience.",
  },
  {
    icon: quality_icon_2,
    label: "Hight Quality",
    text: "I focus on being productive instead of busy.”",
  },
  {
    icon: quality_icon_3,
    label: "Awesome Ideas",
    text: "Most common methods for designing websites that work well is responsive and adaptive design",
  },
];

const Body_2 = () => {
  return (
    <div id="body_2">
      <div className="flex bg-white w-[80%] h-[60vh] md:flex-nowrap sm:flex-wrap m-auto  items-center justify-evenly mt-20 mb-20 ">
        {qualities.map((elt, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col gap-4 justify-center items-center p-10 "
            >
              <img src={elt.icon} alt="" />
              <h2 className="font-bold text-xl">{elt.label}</h2>
              <p className="text-center text-sm ">{elt.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body_2;
