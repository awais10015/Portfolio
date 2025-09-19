import React from "react";
import Navbar from "@/app/components/Navbar";
import Process from "@/app/components/Process";
import Work from "@/app/components/Work";
import Story from "@/app/components/Story";
import Connect from "@/app/components/Connect";

import Hero from "@/app/components/Hero";

const Page = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Work />

      <Story />

      <Process />

      <Connect />
    </>
  );
};

export default Page;
