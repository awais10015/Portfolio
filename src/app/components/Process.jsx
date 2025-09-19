import React from "react";

const Process = () => {
  return (
    <section id="process">
      <div 
      // id="process" 
      className="w-full flex flex-col gap-12 mt-30">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter text-center">
          WHAT MY PERFECT <br /> COLLAB LOOKS LIKE
        </h1>
        <div className="overflow-hidden  relative p-5">
          <img
            src="/introCOPY.avif"
            alt="intro"
            className="transform -translate-x-20 sm:-translate-x-30 md:-translate-x-40 lg:-translate-x-50 rotate-5"
          />
        </div>
         <div className="w-full flex items-center justify-center  ">
          <img src="Joke.webp" alt="process" className="w-[250px] rotate-12 rounded-2xl object-center object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Process;
