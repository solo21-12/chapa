import React from "react";
import H1 from "./typography/H1";
import P from "./typography/P";
import Images from "./typography/Images";
import DownloadButton from "./button/download";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

type Props = {};
const downloadList = [
  {
    Icon: <BsGooglePlay />,
    subTitle: "Get it on",
    title: "Google Play",
  },
  {
    Icon:<AiFillApple/>,
    subTitle: "Download on the",
    title: "App store",
  }
];
export default function Billing({}: Props) {
  return (
    <div className=" h-screen flex md:flex-row flex-col justify-between px-10 md:w-[90%] xl:w-[80%] mx-auto items-center align-middle mb-10">
      <Images img={"/card1.png"} />
      <div className=" md:w-[50%] flex flex-col gap-5">
        <H1 title1={"Easily control your "} title2={"billing & invoicing."} />
        <P
          title={
            "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
          }
        />
        <div className=" flex gap-5">
          {
            downloadList.map((item,i)=>(
              <DownloadButton key={i} data={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
