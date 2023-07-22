import styles from "@/utils/styles";
import React from "react";
import GetStartedRectangular from "./button/GetStartedRectangular";
import P from "./typography/P";
import GetStartedCircular from "./button/GetStartedCircular";

type Props = {};

function CTA({}: Props) {
  return (
    <div
      className={`${styles.flexCenter}  sm:mt-16 my-6 sm:px-20 px-6 sm:py-20 py-4  sm:flex-row flex-col flex bg-black-gradient-2 rounded-[20px] box-shadow mx-auto md:w-[90%] mb-5 ss:mb-[18rem] md:mb-[5rem]`}
    >
      <div className={` flex-1 flex flex-col `}>
        <h2 className={`${styles.heading2} font-poppins font-seamibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Let’s try our service now!</h2>
        <P
          // className={` ${styles.paragraph} max-w-[470px] mt-5 `}
          title="Everything you need to accept card payments and grow your business
          anywhere on the planet."
        />
      </div>
      <div>
        <GetStartedCircular />
      </div>
    </div>
  );
}

export default CTA;
