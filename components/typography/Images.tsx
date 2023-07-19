import Image from "next/image";
import React from "react";
type Props = {
  img: string;
};

export default function Images({ img }: Props) {
  return (
    <div className=" mt-2 md:w-[50%] flex-1 flex-shrink-0 ">
      <Image
        src={img}
        alt="hero"
        width={500}
        height={500}
        className=" object-contain h-[100%] z-20 "
      />
    </div>
  );
}
