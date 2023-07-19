"use client";

import {
  Hero,
  Navbar,
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Stats,
  Testimonials,
} from "@/components";
import { Section } from "@/containers";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className=" bg-primary w-full overflow-hidden h-screen text-White snap-y snap-mandatory overflow-y-scroll">
      <Section
        children={<Navbar toggle={toggle} setToggle={setToggle} />}
        id="navbar"
      />
      <div className={`${toggle ? "hidden" : " block"}`}>
        <div className=" snap-center">
          <Section children={<Hero />} id="hero" />
        </div>
        <div className=" h-screen align-middle  justify-center flex-col flex px-5 snap-center">
          <Section children={<Stats />} id="stats" />
          <Section children={<Business />} id="busines" />
        </div>
        <div className=" snap-center">
          <Section children={<Billing />} id="billing" />
        </div>

        <div className=" snap-center">
          <Section children={<CardDeal />} id="carddeal" />
        </div>
        <div className=" snap-center">

        <Section children={<Testimonials />} id="testimoal" />
        </div>

        {/* <Section children={<Clients />} id="clients" /> */}
        {/* <Section children={<CTA />} id="cts" /> */}
        {/* <Section children={<Footer />} id="footer" /> */}
      </div>
    </main>
  );
}
