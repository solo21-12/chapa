import React from "react";
import H1 from "./typography/H1";
import P from "./typography/P";
import { people01, people02, people03 } from "../assets";
import Testimonal from "./card/testimonal";
type Props = {};
const list = [
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Dawit Abraham",
    role: "Full-stack developer",
    img: "/people01.png ",
  },
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Steve Mark",
    role: "Founder & Leader",
    img: "/people02.png ",
  },
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Kenn Gallagher",
    role: "Founder & Leader",
    img: "/people03.png ",
  },
];

export default function Testimonials({}: Props) {
  return (
    <div className=" h-screen flex flex-col px-5 md:w-[80%] mx-auto justify-center mb-10 gap-10">
      <div className=" flex justify-between w-[80%] mx-auto align-middle items-center">
        <H1 title1={"What people are "} title2={"saying about us"} />
      </div>
      <div className=" gap-5 w-[90%] ss:w-[66%] md:w-[80%] mx-auto flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {list.map((item, i) => (
          <Testimonal key={i} user={item} />
        ))}
      </div>
    </div>
  );
}
