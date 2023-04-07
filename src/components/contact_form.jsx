import { btn_styles } from "./top_menu";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import { useState } from "react";
const { Option } = Select;

const Contact_form = () => {
  return (
    <form className=" bg-gray-300 p-6 flex flex-col w-[40vw] rounded-xl gap-3">
      <div className=" flex items-center justify-between gap-2  ">
        <div className=" flex flex-col gap-1 ">
          <p>First Name :</p>
          <input className=" w-[100%] text-xs h-8 p-3" type="text" />
        </div>
        <div className=" flex flex-col gap-1 ">
          <p>Last Name :</p>
          <input className=" w-[100%] text-xs h-8 p-3" type="text" />
        </div>
      </div>
      <div className=" flex flex-col gap-1 ">
        <p>Email : </p>
        <input type="email" className=" w-[100%] text-xs h-8 p-3" />
      </div>
      <div className=" flex flex-col gap-1 ">
        <p>Message :</p>
        <textarea className=" w-[100%] text-xs h-8 p-3 outline-none" />
      </div>

      <button
        type="submit"
        className={
          btn_styles +
          "w-full rounded-full flex justify-center items-center gap-4 mt-4"
        }
      >
        <h1>Send</h1>
        <FiSend />
      </button>
    </form>
  );
};

export default Contact_form;
