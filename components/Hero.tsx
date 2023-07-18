import { discount } from "@/assets";
import styles from "@/utils/styles";
import Image from "next/image";
import React from "react";
import GetStarted from "./button/GetStarted";
import GetStartedRectangular from "./button/GetStartedRectangular";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className={`flex md:flex-row flex-col md:justify-between ${styles.paddingY} md:w-[90%] mx-auto h-[92vh] md:px-12 px-10`}
    >
      <div className={` flex-col xl:px-0 lg:px-16 ${styles.flexStart} `}>
        <div className=" flex flex-row items-center py-[2px] lg:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4 md:w-[388px]">
          <Image
            src={discount}
            alt="discount"
            width={40}
            height={40}
            className=" w-[32px] h-[32px] "
          />
          <p
            className={`${styles.paragraph} ml-2 md:text-[18px] text-gray-400 text-[10px]`}
          >
            <span className=" text-White">20% </span>
            Discount For
            <span className=" text-White"> 1 Month </span>
            Account
          </p>
        </div>
        <div className=" w-full xs:w-[90%] md:w-full mx-auto">
          <div className=" flex flex-row justify-between items-center w-full">
            <h1 className=" flex-1 font-poppins font-semibold xl:text-[72px] ss:text-[68px] text-[40px] text-White xl:leading-[100px] ss:leading-[80px] leading-[43px]">
              The Next <br className=" xs:block hidden" />{" "}
              <span className=" bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Generation{" "}
              </span>
            </h1>
            <div className=" lg:flex hidden md:ml-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className=" font-poppins font-semibold ss:text-[47px] xl:text-[70px] text-[34px] text-White xl:leading-[100px] ss:leading-[60px] leading-[43px] w-full">
            Payment Method.
          </h1>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5  text-LightSlate font-[400] text-[15px] lg:text-[18px]`}
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="md:hidden">
        <GetStartedRectangular/>
      </div>
      <div className=" mt-20 w-full md:w-[40%] flex-shrink-0 ">
        <Image
          src="/hero2.png"
          alt="hero"
          width={500}
          height={500}
          className=" object-contain w-[100%] h-[100%] z-50 "
        />
        <div className=" absolute z-0 w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className=" absolute z-[1] w-[10%] h-[80%] rounded-full bottom-40 white__gradient "></div>
        <div className=" absolute z-0 w-[30%] h-[50%] right-20 bottom-20 blue__gradient "></div>
      </div>
    </div>
  );
}
