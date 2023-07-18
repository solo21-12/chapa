import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

export default function BusinessCard({ icon, subTitle, title }: Props) {
  return (
    <div className=" flex  items-center gap-5 mx-2">
      <div className=" border border-[#09977C] w-[45px] md:w-[64px] h-[45px] md:h-[64px] rounded-[50%] items-center justify-center flex flex-col">
        <div className=" text-[15px] md:text-[30px] text-[#00F6FF]">{icon}</div>
      </div>
      <div className=" flex flex-col flex-1">
        <h4 className=" font-poppins text-[14px] md:text-[18px] uppercase font-semibold">
          {title}
        </h4>
        <p className=" font-poppins text-[12px] md:text-[16px]  font-normal  text-LightSlate max-w-md">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
