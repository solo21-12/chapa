import React from "react";

type Props = { title: string };

export default function P({ title }: Props) {
  return (
    <p className=" font-poppins text-LightestSlate text-[15px] md:text-[18px] font-normal leading-[30px] max-w-[570px]">
      {title}
    </p>
  );
}
