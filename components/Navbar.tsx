"use client";

import { navLinks } from "@/utils/constants";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import styles from "@/utils/styles";
import { motion } from "framer-motion";

type Props = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

export default function Navbar({ setToggle, toggle }: Props) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          type: "tween",
        }}
        className=" sm:w-[90%] h-[32px] flex-shrink-0 flex py-10 justify-between items-center navbar sm:px-10 px-4 z-10"
      >
        <div>
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            src="/chapa1.png"
            alt="chapa logo"
            className="h-14 w-14"
          />
        </div>
        <ul className="  list-none sm:flex hidden justify-end items-center flex-1 gap-5 font-poppins z-[200]">
          {navLinks.map((item, i) => (
            <li
              key={i}
              className={`font-poppins cursor-pointer text-[16px] hover:text-green-400  font-[400]  leading-[130%]`}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        <div className={` sm:hidden flex flex-1 justify-end text-3xl  `}>
          <div className="">
            <div className=" slide-bottom text-green-400">
              {!toggle ? (
                <BiMenuAltRight
                  fontSize={27}
                  className="overlay__close  text-4xl"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <AiOutlineClose
                  fontSize={27}
                  className=" text-4xl z-50 text-green-400 "
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <ul className={` ${toggle ? " flex flex-col h-[90vh] justify-center items-center align-middle sidebar gap-5" : "hidden"}`}>
        {navLinks.map((item, i) => (
          <li
            key={i}
            className={`font-poppins cursor-pointer hover:text-slate-100  font-[500]  leading-[130%] text-2xl ${styles.GreenGradientText}`}
          >
            <Link href={`#${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
