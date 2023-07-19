import React from "react";

type Props = {};
type List = {
  title: string;
  subTitle: string;
};

const list: List[] = [
  {
    title: "3800+",
    subTitle: "User Active",
  },
  {
    title: "230+",
    subTitle: "TRUSTED BY COMPANY",
  },
  {
    title: "$230M+",
    subTitle: "TRANSACTION",
  },
];

export default function Stats({}: Props) {
  return (
    <div>
      <div className=" ss:mt-[100px] md:mt-0 flex w-[100%] px-5 md:w-[90%] mx-auto justify-between mb-3">
        {list.map((item, i) => (
          <div
            key={i}
            className=" flex gap-2 md:justify-between w-[31%] items-center align-middle"
          >
            <div className=" flex gap-2 justify-center items-center align-middle">
              <h4 className=" font-poppins text-[12px] xs:leading-[53px] leading-[30px]  md:text-[41px] font-[600] md:leading-7">
                {item.title}
              </h4>
              <p className=" font-poppins text-[8px] xs:text-[15px] md:text-[21px] font-[400] uppercase md:leading-9 bg-gradient-to-r from-teal-400 to-emerald-700 bg-clip-text text-transparent">
                {item.subTitle}
              </p>
            </div>
            {i < 2 && <div className={`h-8 w-1 bg-gray-500 `} />}
          </div>
        ))}
      </div>
    </div>
  );
}
