import React from "react";

type Props = {
  data: {
    Icon: React.ReactNode;
    subTitle: string;
    title: string;
  };
};

export default function DownloadButton({ data }: Props) {
  return (
    <div className=" flex items-center align-middle py-2 px-2 md:px-5 gap-2 mt-5  w-[40%] rounded-md cursor-pointer bg-discount-gradient hover:scale-105 transition-transform duration-500">
      <div className=" md:text-2xl ">{data.Icon}</div>
      <div className=" flex flex-col font-poppins">
        <p className=" text-gray-400 text-[8px] md:text-[10px]">
          {data.subTitle}
        </p>
        <h4 className=" text-[10px] md:text-[14px] xl:text-[18px]">{data.title}</h4>
      </div>
    </div>
  );
}
