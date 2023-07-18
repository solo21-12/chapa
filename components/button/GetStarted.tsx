import styles from "@/utils/styles";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
type Props = {};

export default function GetStarted({}: Props) {
  return (
    <div
      className={`${styles.flexCenter} md:w-[140px] h-[140px] rounded-full bg-gradient-to-r from-green-600 to-emerald-400 p-[2px] cursor-pointer`}
      onClick={()=>alert("hi")}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexCenter} flex-row gap-2`}>
          <p className=" font-poppins font-medium text-[18px] leading-[23px]">
            <span className={`${styles.GreenGradientText}`}>Get</span>
          </p>
          <BsArrowUpRight className=" text-[23px]" />
        </div>
        <p className=" font-poppins font-medium text-[18px] leading-[23px]">
          <span className={`${styles.GreenGradientText}`}>Started</span>
        </p>
      </div>
    </div>
  );
}
