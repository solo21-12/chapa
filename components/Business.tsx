import React from "react";
import GetStartedCircular from "./button/GetStartedCircular";
import { AiFillStar } from "react-icons/ai";
import { BsShieldFillCheck, BsFillSendFill } from "react-icons/bs";
import BusinessCard from "./card/businessCard";
import H1 from "./typography/H1";
import P from "./typography/P";
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
    <div className=" flex md:flex-row flex-col px-2 w-[90%] s:w-[70%] md:w-[90%] mx-auto mt-2 justify-between">
      <div className=" md:w-[48%] flex flex-col gap-3">
        <H1 title1="You do the business," title2="we’ll handle the money " />
        <P
          title=" With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market."
        />
        <GetStartedCircular />
      </div>
      <div className=" md:w-[48%] mt-3 md:mt-0 flex flex-col gap-5 justify-between mb-9">
        {list.map((item, i) => (
          <BusinessCard
            icon={item.icon}
            title={item.title}
            subTitle={item.sunTitle}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
