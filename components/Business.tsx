import React from "react";
import GetStartedCircular from "./button/GetStartedCircular";
import { AiFillStar } from "react-icons/ai";
import { BsShieldFillCheck, BsFillSendFill } from "react-icons/bs";
import BusinessCard from "./card/businessCard";
type Props = {};
const list = [
  {
    icon: <AiFillStar />,
    title: "Rewards",
    sunTitle:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    icon: <BsShieldFillCheck />,
    title: "100% secured",
    sunTitle:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    icon: <BsFillSendFill />,
    title: "Balance Transfer",
    sunTitle:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
export default function Business({}: Props) {
  return (
    <div className=" flex md:flex-row flex-col px-2 w-[90%] mx-auto mt-20 justify-between">
      <div className=" md:w-[48%] flex flex-col gap-3">
        <h1 className=" font-poppins text-[28px] ss:text-[43px] md:text-[48px] font-semibold leading-[40px] md:leading-[70px]">
          You do the business, <br />
          we’ll handle the money.
        </h1>
        <p className=" font-poppins text-LightestSlate text-[14px] md:text-[18px] font-normal leading-[30px] max-w-[570px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <GetStartedCircular />
        
      </div>
      <div className=" md:w-[48%] mt-3 md:mt-0 flex flex-col gap-5 justify-between">
        {list.map((item, i) => (
          <BusinessCard
            icon={item.icon}
            title={item.title}
            subTitle={item.sunTitle}
          />
        ))}
      </div>
    </div>
  );
}
