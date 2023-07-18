import React from "react";

type Props = {};

export default function GetStartedCircular({}: Props) {
  return (
    <button className=" rounded-[10px] h-[45px] md:h-[64px] flex-shrink-0 w-[170px] bg-gradient-to-br from-teal-400 to-emerald-700 items-center mt-5 md:mt-10 mb-20 md:mb-0 hover:scale-105  transition-transform duration-500">
      Get Started
    </button>
  );
}
