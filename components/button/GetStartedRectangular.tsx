import styles from "@/utils/styles";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
type Props = {};

export default function GetStartedRectangular({}: Props) {
  return (
    <div
      className={`${styles.flexCenter}  border border-green-400 rounded-sm  mx-10 mb-5 mt-6 py-[4px] px-[20px] cursor-pointer hover:scale-105 transition-all duration-500`}
      onClick={() => alert("hi")}
    >
      <div className={`${styles.flexCenter} flex-row gap-2 z-[100]`}>
        <p className=" font-poppins font-medium text-[18px] leading-[23px]">
          <span>Get </span>
        </p>
        <p className=" font-poppins font-medium text-[18px] leading-[23px]">
          <span>Started</span>
        </p>
        <BsArrowUpRight className={` text-Green text-[15px]`} />
      </div>
    </div>
  );
}
