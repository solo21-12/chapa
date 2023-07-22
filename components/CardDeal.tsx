import React from "react";
import Images from "./typography/Images";
import H1 from "./typography/H1";
import P from "./typography/P";

type Props = {};

export default function CardDeal({}: Props) {
  return (
    <div className=" h-[50vh] flex  md:flex-row-reverse flex-col justify-between px-3 md:px-10 md:w-[90%] xl:w-[80%] mx-auto items-center align-middle mb-10">
      <Images img={"/card2.png"} />
      <div className=" md:w-[50%] flex flex-col gap-5 mb-10 md:mb-0">
        <H1 title1={"Find a better card deal "} title2={"in few easy steps."} />
        <P
          title={
            "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
          }
        />
      </div>
    </div>
  );
}
