import { btn_styles } from "./top_menu";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import { useState } from "react";
import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
const { Option } = Select;

const SpanStar = () => {
  return <span className=" text-red-500 ">*</span>;
};

export const ErrorComponent = ({ errorMessage }) => {
  return <div className=" text-red-500 text-[12px]">{errorMessage}</div>;
};

const errorMessages = {
  name: "Please provide valid  names!",
  email: "Please provide a valid email !",
  message: "Please provide a valid message !",
};

let errors = {
  name: false,
  email: false,
  message: false,
};

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const nameRegex = /^([a-zA-Zéàèçïô]{3,50})$/;

const Contact_form = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFName = (e) => {
    if (!e.target.value.match(nameRegex)) {
      errors = { ...errors, name: true };
    } else {
      errors = { ...errors, name: false };
    }
    setFname(e.target.value);
  };

  const handleLName = (e) => {
    if (!e.target.value.match(nameRegex)) {
      errors = { ...errors, name: true };
    } else {
      errors = { ...errors, name: false };
    }
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    if (!e.target.value.match(emailRegex)) {
      errors = { ...errors, email: true };
    } else {
      errors = { ...errors, email: false };
    }
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    if (e.target.value.trim().length < 3) {
      errors = { ...errors, message: true };
    } else {
      errors = { ...errors, message: false };
    }
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.success("Submit success");
    if (!errors.name && !errors.email && !errors.message) {
      await emailjs
        .send(
          "service_4g0obkx",
          "template_cfb06dh",
          { fName, lName, email, message },
          "_NtfUN4fN--tTiD4P"
        )
        .then((data) => {
          console.log(data, "Success");
        })
        .catch((error) => {
          console.log(error, "failure");
        });
    } else {
    }
  };

  return (
    <form
      className=" bg-gray-300 p-6 flex flex-col w-[90vw] md:w-[40vw] rounded-xl gap-3"
      onSubmit={handleSubmit}
    >
      {/* <div>
        <Toaster />
      </div> */}
      <div className=" flex flex-col gap-1">
        <div className=" flex items-center justify-between gap-2  ">
          <div className=" flex flex-col gap-1 ">
            <p>
              First Name : <SpanStar />
            </p>
            <input
              className=" w-[100%] text-xs h-8 p-3"
              type="text"
              placeholder="First name"
              onChange={handleFName}
            />
          </div>

          <div className=" flex flex-col gap-1 ">
            <p>
              Last Name : <SpanStar />
            </p>
            <input
              onChange={handleLName}
              className=" w-[100%] text-xs h-8 p-3"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        {errors.name ? (
          <ErrorComponent errorMessage={errorMessages.name} />
        ) : null}
      </div>

      <div className=" flex flex-col gap-1 ">
        <p>
          Email : <SpanStar />
        </p>
        <input
          onChange={handleEmail}
          type="text"
          className=" w-[100%] text-xs h-8 p-3"
          placeholder="exemple@exemple.exemple"
        />{" "}
        {errors.email ? (
          <ErrorComponent errorMessage={errorMessages.email} />
        ) : null}
      </div>

      <div className=" flex flex-col gap-1 ">
        <p>
          Message : <SpanStar />
        </p>
        <textarea
          onChange={handleMessage}
          className=" w-[100%] h-[6rem] text-xs p-3 outline-none"
        />
        {errors.message ? (
          <ErrorComponent errorMessage={errorMessages.message} />
        ) : null}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={
          btn_styles +
          "w-full rounded-lg flex justify-center items-center gap-4 mt-4 cursor-not-allowed "
        }
      >
        <h1>Send</h1>
        <FiSend />
      </button>
    </form>
  );
};

export default Contact_form;
