import React from "react";

type Props = {
  title1: string;
  title2: string;
};

export default function H1({ title1, title2 }: Props) {
  return (
    <h1 className=" font-poppins text-[28px] ss:text-[43px] md:text-[41px] font-semibold leading-[40px] md:leading-[70px]">
      {title1} <br />
      {title2}
    </h1>
  );
}
