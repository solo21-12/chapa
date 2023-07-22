import React from "react";
import H1 from "./typography/H1";
import P from "./typography/P";
import { people01, people02, people03 } from "../assets";
import Testimonal from "./card/testimonal";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};
const list = [
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Dawit Abraham",
    role: "Full-stack developer",
    img: people01,
  },
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Steve Mark",
    role: "Founder & Leader",
    img: people02,
  },
  {
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Kenn Gallagher",
    role: "Founder & Leader",
    img: people03,
  },
];
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export default function Testimonials({}: Props) {
  return (
    <motion.div layout className="  h-screen flex flex-col px-5 md:w-[80%] mx-auto justify-center gap-10 pt-20">
      <div className=" flex xl:flex-row flex-col justify-between md:w-[80%] mx-auto align-middle">
        <H1 title1={"What people are "} title2={"saying about us"} />
        <P title="Everything you need to accept card payments and grow your business anywhere on the planet." />
      </div>
      <motion.ul
        className=" gap-5 w-[95%] ss:w-[66%] md:w-[85%] mx-auto flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 3,
        }}
        layoutScroll
      >
        {list.map((item, i) => (
          <Testimonal key={i} user={item} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
