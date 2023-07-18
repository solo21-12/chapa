"use client";

import { navLinks } from "@/utils/constants";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
type Props = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

export default function Navbar({ setToggle, toggle }: Props) {
  return (
    <div className=" sm:w-[90%] h-[32px] flex-shrink-0 flex py-10 justify-between items-center navbar sm:px-10 px-4 z-10">
      <div>
        <img src="/chapa1.png" alt="chapa logo" className="h-14 w-14" />
      </div>
      <ul className="  list-none sm:flex hidden justify-end items-center flex-1 gap-5 font-poppins">
        {navLinks.map((item, i) => (
          <li
            key={i}
            className={`font-poppins cursor-pointer text-[16px] hover:text-green-400  font-[400]  leading-[130%]`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className=" sm:hidden flex flex-1 justify-end text-3xl text-green-400">
        <div className="app__navbar-smallscreen">
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            {!toggle ? (
              <BiMenuAltRight
                fontSize={27}
                className="overlay__close text-green-400 text-4xl"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <AiOutlineClose
                fontSize={27}
                className="overlay__close text-4xl z-50 "
                onClick={() => setToggle(!toggle)}
              />
            )}

            <ul
              className={`app__navbar-smallscreen-links align-middle items-center justify-center gap-5  flex-col h-screen font-poppins sidebar ${
                toggle ? "flex" : "hidden"
              }`}
            >
              {navLinks.map((item, i) => (
                <li
                  key={i}
                  className={`font-poppins cursor-pointer hover:text-slate-100  font-[500]  leading-[130%] text-2xl`}
                >
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
