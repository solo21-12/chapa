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
    <main className=" bg-primary w-full overflow-hidden min-h-screen text-white">
      <Section
        children={<Navbar toggle={toggle} setToggle={setToggle} />}
        id="navbar"
      />
      <div className={`${toggle ? "hidden" : " block"}`}>
        <Section children={<Hero />} id="hero" />
        <div className=" h-screen align-middle  justify-center flex-col flex px-5">
          <Section children={<Stats />} id="stats" />
          <Section children={<Business />} id="busines" />
        </div>
        <Section children={<Billing />} id="billing" />
        {/* <Section children={<CardDeal />} id="carddeal" /> */}
        {/* <Section children={<Testimonials />} id="testimoal" /> */}
        {/* <Section children={<Clients />} id="clients" /> */}
        {/* <Section children={<CTA />} id="cts" /> */}
        {/* <Section children={<Footer />} id="footer" /> */}
      </div>
    </main>
  );
}
