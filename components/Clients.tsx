import { clients } from "@/utils/constants";
import styles from "@/utils/styles";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Clients({}: Props) {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} my-4 flex-wrap w-[100%]`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`${styles.flexCenter} my-4 flex-1 sm:min-w-[192px] min-w-[120px] `}
          >
            <Image
              src={client.logo}
              alt=""
              width={100}
              height={100}
              className=" sm:w-[192px] w-[100px]  object-contain  hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
