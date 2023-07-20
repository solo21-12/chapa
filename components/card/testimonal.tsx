import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  user: {
    description: string;
    name: string;
    role: string;
    img: any;
  };
};

export default function Testimonal({ user }: Props) {
  return (
    <div className=" cursor-pointer hover:bg-Navy h-[325px] md:h-[395px] w-[80vw] ss:w-[60vw] md:w-[370px] flex-grow-0 rounded-[20px]  flex flex-col justify-center gap-8 font-poppins flex-shrink-0 snap-center px-5 md:px-10">
      <Image
        src={"/q.png"}
        width={42}
        height={24}
        alt=""
        className=" object-contain"
      />
      <p className="  font-medium xl:text-[18px]">{user.description}</p>
      <div className=" flex gap-5">
        <Image src={user.img} width={50} height={50} alt="" />
        <div className=" flex flex-col">
          <h5 className=" text-LightestSlate">{user.name}</h5>
          <p className=" text-gray-400 text-[10px]">{user.role}</p>
        </div>
      </div>
    </div>
  );
}
