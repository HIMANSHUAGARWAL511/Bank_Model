import React from "react";
import { quotes } from "../assets";
const Feedback = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-[10] sm:mr-5 mr-0 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10  ">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mx-5">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mx-5">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default Feedback;
